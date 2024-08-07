---
title: Testing Laravel Continuously with CircleCI
date: 2024-07-31T00:00:00.000Z
---

As developer we all know tests are important, but when it comes to really doing it, I think personally I need to get better at it.

I'm working on Static Ninja, and shipping features continuously. In order to prevent system down, it should be tested before the deployment. I can just run the tests locally (which I do), but when a new team member joins, we have to make sure it tested even we tested locally.

GitHub actions are my best friend in terms of free cloud computing for tasks like testing, deployment etc. But, why not do testing on another service and use GitHub credits on the deployment? I never used CircleCI before, so I gave it a chance and running Static Ninja tests on it. To be honest, to make my testing script work took time and not that smooth, but I managed to make it work.

Here is the config I'm using:

```yaml
# Use the latest 2.1 version of CircleCI pipeline process engine.
# See: https://circleci.com/docs/configuration-reference
version: 2.1

orbs:
  browser-tools: circleci/browser-tools@1.4.8

# Define a job to be invoked later in a workflow.
# See: https://circleci.com/docs/jobs-steps/#jobs-overview & https://circleci.com/docs/configuration-reference/#jobs
jobs:
  build:
    docker:
      - image: cimg/php:8.3.9-browsers

    steps:
      - checkout
      - when:
          condition:
            equal: [ main, << pipeline.git.branch >> ]
          steps:
            - browser-tools/install-browser-tools
            - run:
                name: "Prepare env"
                command: |
                  sudo apt update
                  sudo docker-php-ext-install zip

            - run:
                name: "Create env file"
                command: |
                  mv .env.testing .env

            - restore_cache:
                keys:
                  - v1-dependencies-{{ checksum "composer.json" }}
                  - v1-dependencies-

            - run:
                name: "Install dependencies"
                command: composer install -n --prefer-dist

            - save_cache:
                key: v1-dependencies-{{ checksum "composer.json" }}
                paths:
                  - ./vendor

            - run:
                name: "Generate app key"
                command: php artisan key:generate

            - run:
                name: "Run unit tests"
                command: ./vendor/bin/phpunit tests/Unit

# Orchestrate jobs using workflows
# See: https://circleci.com/docs/workflows/ & https://circleci.com/docs/configuration-reference/#workflows
workflows:
  test:
    jobs:
      - build
```

Understanding this config took some time for me, but I'll explain what I understood.

[According to CircleCI](https://circleci.com/orbs/#:~:text=An%20orb%20is%20a%20reusable%20package%20of%20YAML%20configuration%20that%20condenses%20repeated%20pieces%20of%20config%20into%20a%20single%20line%20of%20code.): an orb is a reusable package of YAML configuration that condenses repeated pieces of config into a single line of code.

If you will be doing browser testing, this circleci/browser-tools orb is amazing.

```yaml
orbs:
  browser-tools: circleci/browser-tools@1.4.8
```

In the jobs section, this is similiar to the GitHub Actions, we just define the actions and the system to execute it.

```yaml
jobs:
  build:
    docker:
      - image: cimg/php:8.3.9-browsers
```

cimg/php:8.3.9-browsers docker image is what we want, I think it comes with browser features as well with this one.

```yaml
steps:
  - checkout
  - when:
      condition:
        equal: [ main, << pipeline.git.branch >> ]
      steps:
        - browser-tools/install-browser-tools
        - run:
            name: "Prepare env"
            command: |
              sudo apt update
              sudo docker-php-ext-install zip

        - run:
            name: "Create env file"
            command: |
              mv .env.testing .env

        - restore_cache:
            keys:
              - v1-dependencies-{{ checksum "composer.json" }}
              - v1-dependencies-

        - run:
            name: "Install dependencies"
            command: composer install -n --prefer-dist

        - save_cache:
            key: v1-dependencies-{{ checksum "composer.json" }}
            paths:
              - ./vendor

        - run:
            name: "Generate app key"
            command: php artisan key:generate

        - run:
            name: "Run unit tests"
            command: ./vendor/bin/phpunit tests/Unit
```

In the steps, that strange when condition thing is added by me, may be there is a better way to do that. Basically I just wanted to make sure tests only executed when main branch changed, not the other ones. In my scale, executing this tests on all of the branches is expensive.

In order to make tests work, I prepared a special env file called .env.testing and while the system builds project, it renames it to .env.

You might ask, where did you setup the database? I'm using SQLite for testing and for production so there is no additional setup needed, good luck doing that with a MySQL database.

There are some steps about cache, to be honest, I don't really understood how they work, but they probably about caching the vendor packages.

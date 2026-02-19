#!/bin/bash
set -e

if [ ! -f .env.deploy ]; then
  echo "Missing .env.deploy file. Create one based on .env.deploy.example"
  exit 1
fi

source .env.deploy

echo "Deploying $SITE..."

git push

ssh $VPS_HOST "cd $REMOTE_PATH && git pull && rm -rf dist && npm run build && sudo rm -rf /var/www/html/$SITE && sudo cp -r dist /var/www/html/$SITE"

echo "Done! $SITE deployed."

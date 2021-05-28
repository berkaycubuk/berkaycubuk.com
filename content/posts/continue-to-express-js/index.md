---
title: Continue to Express.js
slug: continue-to-express-js
date: 2021-02-23T06:44:26.000Z
date_updated: 2021-02-23T06:47:10.000Z
excerpt: With Express.js we can use requests and responses. Request is coming to Express and response is going from Express.
---

With Express.js we can use requests and responses. Request is coming to Express and response is going from Express.

## Sending a Response

With Express we can easly send responses. With this code we're sending string as a response:
```js
res.send('Hi')
```

If we want to send json response:
```js
res.json({
    message: 'Hi',
    name: 'Berkay'
})
```

### Response Types

We can change response types as well:
```js
res.type('html') // text/html

res.type('json') // application/json

res.type('png')  // image/png
```

### Response Headers

Changing headers are easy:
```js
res.set('Authorization', 'token')

res.set('Content-Type', 'application/json')
```

### Response Cookies

Sometimes we'll want to add cookies to our responses:
```js
res.cookie('token', 'supersecrettoken')
```

You can also delete cookies
```js
res.clearCookie('token')
```

### Response Status

We can set our response status:
```js
res.status(404).json({
    message: 'Not found'
})
```

You can do the samething with a shortcut:
```js
res.sendStatus(404) // => res.status(404).send('Not found')
```

### Response Redirect

With a simple response you can redirect your users:
```js
res.redirect('https://berkaycubuk.com')

res.redirect('./')

res.redirect('back') // sending users back
```

## Routing

Routes are simply directions where we are accepting requests. For example:
```js
app.get('/login', (req, res) => {})
```

In this example, we opened our gates for the "/login" address, but only for get request.

### Routes With Parameters

We want to create a blog and we have "/post" route. Our visitors will be normal people so they are not using any API tools, they will use their browser to access our website. What if they only want to see a single post? We have to get some data with the url, to do that:
```js
app.get('/post/:postName', (req, res) => {
    res.send(req.params.postName)
})
```

This example sends user back the parameter.

## Middleware

Middlewares are a function that we can connect to routes. We can run it in all requests or we can run it on specific requests. They all can work together, that means you can use multiple middlewares. Let's understand it with an example:
```js
const express = require('express')
const app = express()

app.use(express.json())
```

In this example we used Express's built in json function. It helps us to use json in our responses and requests. It runs in every request. Time to create our own and adding it to specific routes.
```js
const myMiddleFunc = (req, res, next) => {
    // do what you want in here
    next() // sending the ball to the next one
}

app.get('/', myMiddleFunc, (req, res) => {})
```

With this, we created simple  function that does what you want and when it's finish it's job, going to next middleware. To add middlewares to specific routes, we can pass them to route as a parameter.

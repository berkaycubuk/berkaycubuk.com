---
title: Express.js, a Node.js web application framework
date: 2021-02-22T05:00:00.000Z
date_updated: 2021-02-22T05:00:00.000Z
excerpt: Express.js (aka Express) is a Node.js web application framework. With Express you can create web servers.
---

Express.js (aka Express) is a Node.js web application framework. With Express you can create web servers. If you want to create a backend with javascript, Express will be your first choice.

## Installation

If you want to developer javascript based applications you should [install Node.js](https://nodejs.org/en/) on your computer. After installing Node.js you can test it with this command:

    node -v
    

Node.js comes with NPM(Node Package Manager). Npm helps us to install node packages without pain. To test npm, you can run this command:

    npm -v
    

Now we can start our first express project. Create a new directory for your project. And initialize package.json with:

    npm init -y
    

This command will create a package.json file for you. `-y` is helps us to skip questions (package name, description, etc). After all, we can install Express with this command:

    npm install express
    
    // for yarn (in the future posts I'll try to explain what is yarn.)
    
    yarn add express
    
    

Now, you have Express available in your project. Next step is creating the **index.js **file.

## First Project

Our first code will be the classical "Hello, World!" example. Create a new file called **index.js**. And write this code in it:

    // index.js
    const express = require('express')
    const app = express()
    
    const PORT = 5000
    
    app.get('/', (req, res) => {
        res.send("Hello, World!")
    })
    
    app.listen(PORT, () => console.log('Our first server is started!'))
    

Now, open your terminal and run the server:

    node index.js
    

After starting the server, go visit localhost:5000. If everything goes well, you should see the message we wrote.

Ok, let's understand our code. First we imported the Express library, and then we passed the **express()** function to a variable. Created a variable called PORT to store server's port. And with the app.get() function we created http get request for our server. That's explains why we see our text when we visit the site. To understand it better, see that code:

    app.get( URL we want to get our request, function (request, response) { ... } )
    
    // you can also use other requests as well
    
    app.post()   // post request, to send data to server
    app.patch()  // patch request, to update data
    app.put()    // put request, to update data if not create data
    app.delete() // delete request, to delete data
    

Last part is for the listening **port **we defined earlier. It's works when we hit our server with that port number, that's why we added port number to url. (localhost**:5000**)

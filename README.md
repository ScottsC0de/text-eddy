# text-eddy
Progressive text-editor web application

<img src="https://octodex.github.com/images/daftpunktocat-thomas.gif" alt="github mascot with daft punk helmet on" width="200"/>

<br>

## 💡 Table of Contents

- [Description](#description-id)
- [New Tech Learned](#newtech-id)
- [Installation](#installation-id)
- [Usage](#usage-id)
- [Links](#links-id)
- [Screenshot](#screenshot-id)

<br>

## <a id="description-id"></a>Description
This project was created to demonstrate the installation and application of *Webpack plug-ins* to create a *Progressive Web Application* in the form of a Text Editor. WebPack plug-ins are npms that allow us to build modern applications using JavaScript objects installed here: https://webpack.js.org/concepts/plugins/. They are then linked to our projects by running the proper commands (see [Installation](#installation-id) steps). 

For this project, we want the user to be able to save their notes to their browser so that they their changes persist when leaving & returning to the text editor. For saving user data, we used *IndexDB*. Much like Local Storage, IndexDB saves user data inside the browser so it can be used when the user closes and opens the page. IndexDB also allows us to use our applications offline. IndexDB is able to fetch queries even when there is no internet connection. IndexDB stores client side storage and Binary Large Objects. BLOB is a generic term used to describe the handling and storage of long strings of data by database management systems. 

One of these webpack plug-ins include *Manifest*, which manages the bundling of our code and creates a connection between webpack and our code. Manifest plug-in handles the downloading of modules in our browser. "JSON file that tells the browser about your Progressive Web App and how it should behave when installed on the user's desktop or mobile device". "Basic Metadata name & version and can also specify aspects of your extension's functionality (such as background scripts, content scripts, and browser actions"

This application also uses *Service Workers*, which work in between the browser, our web app, and the network. Service workers allow us to use applications offline & set up push notifications. Service workers are JavaScript files that take over when there is no internet connection available. They handle data and network requests.

Set up in a webpack.config.js file, we have imported the webpack plugin Manifest so that we can download the proper bundles necessary for setting up our application. Service workers are imported in src-sw.js files

> <strong>Deployed Heroku link: </strong>

<br>

## <a id="newtech-id"></a>WebDev Tech & Concepts Learned

```js
- Webpack & Webpack Plug-Ins
- IndexDB
- Manifest Plug-In
- Service Workers
- BinaryLargeOBjects (BLOBs)
```
> Links for these concepts can be found <a href="#links-id">below</a>

<br>

## <a id="installation-id"></a>Installation
To use this application, please click the link here:

> Install this app so it can be used locally & offline by clicking the <button> Install </button> at the top left corner of the page 

<br>

For downloading & building webpack plug-ins...
> Please follow the code snippets shown below. Feel free to **copy and paste**

<br>

```js
CLI Commands

- npm run start
- concurrently \"cd client && npm run build\" \"cd server && npm run server\"
- npm run build && cd server && node server.js
- cd server node server.js --ignore client
- cd client && npm run build
- cd server && npm i && cd ../client && npm i
- cd client && npm start
```

<br>

```js
package.json "scripts" object

"scripts": {
        "start:dev": "concurrently \"cd client && npm run build\" \"cd server && npm run server\" ",
        "start": "npm run build && cd server && node server.js",
        "server": "cd server node server.js --ignore client",
        "build": "cd client && npm run build",
        "install": "cd server && npm i && cd ../client && npm i",
        "client": "cd client && npm start"
    }
```

<br>

```js
Importing Webpack & Manifest in JavaScript

const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
```

<br>

```js
Importing Service Worker in JavaScript

const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');
```

<br>

## <a id="usage-id"></a>Usage
Upon arriving to the site (heroku link), you will see a basic text editor with name 'Jate' written in capital letters. Click anywhere in the text editor to begin typing, using all basic keyboard commands for input (<kbd>Enter</kbd> for new line, <kbd>Space</kbd> between letters, <kbd>Shift</kbd> for capital letters, etc). You may install onto your local machine by clicking the <button> Install </button> at the top left corner of the page. This will allow you to use the app offline. Your changes are also automatically saved with IndexDB. (<a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" target="_blank">Learn More</a>)

<br>

## <a id="links-id"></a>Links
The author is a developer with a GitHub account: https://github.com/ScottsC0de & email: **Scott5902@gmail.com**<br>
<br>
Heroku link: <hr>
GitHub project repo: https://github.com/ScottsC0de/text-eddy <hr>
WebPack: https://webpack.js.org/<hr>
IndexDB: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API<hr>
Manifest: https://webpack.js.org/concepts/manifest/<hr>
Service Workers: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API

<br>

## <a id="screenshot-id"></a>Screenshot
![alt text](client/src/img/text-eddy-screenshot.png)
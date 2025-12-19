# React: Software Architecture

This is the repository for the LinkedIn Learning course React: Software Architecture. The full course is available from [LinkedIn Learning][lil-course-url] by Shaun Wassell.

## Instructions

Starting off with a simple React app
later adding `server.js` to handle SSR
it's a simple react app
Since it's going to be essentially, running our front-end code. So, in order to do both of those things, we need to install a few packages.
We're going to install some packages from babel that will basically take the modern code that we write, such as in react, as well as on the server itself. And, basically, convert that into something that no js will be able to run. So, we're going to say npm install save dev, we're going to install a few packages here, the first one's going to be @babel/core, then @babel/node, @babel/preset-env and @babel/preset-react.

```bash
npm install --save-dev @babel/core @babel/node @babel/preset-env @babel/preset-react nodemon
```

install Express package to be able to run a basic server

```bash
npm i express
```

define a `babelrc` file. It tells babel what presets it needs to use to make a sense of our code

```bash
{ "presets": ["@babel/preset-env", "@babel/preset-react"] }
```

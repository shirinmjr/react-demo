````md
# React Software Architecture

## Server-Side Rendering (SSR) with Express & styled-components

This project demonstrates how to set up **Server-Side Rendering (SSR)** for a React application using **Express**, **React Router (v5)**, and **styled-components**.

The goal of this project is to understand how SSR works under the hood and how styling, routing, and hydration behave in a real-world React architecture.

---

## Goals

- Render React components on the server
- Support routing using `StaticRouter`
- Correctly handle `styled-components` styles on the server
- Avoid Flash of Unstyled Content (FOUC)
- Ensure clean client-side hydration

---

## Tech Stack

- React
- Express
- react-dom/server
- react-router-dom (v5)
- styled-components
- Babel
- Webpack / CRA build output

---

## Project Overview

- The React app is built normally using `npm run build`
- Express serves static assets from the `/build` directory
- For all incoming routes, Express:
  - renders the React app using `renderToString`
  - injects the rendered HTML into `build/index.html`
  - optionally injects styled-components styles for true SSR

---

## Getting Started

### 1. Install Babel dependencies

We start with a simple React app.  
To run React and modern JavaScript on the server, Babel is required to transpile the code into something Node.js can execute.

```bash
npm install --save-dev \
  @babel/core \
  @babel/node \
  @babel/preset-env \
  @babel/preset-react \
  nodemon
```
````

### 2. Install Express

Express is used to create a basic Node server that handles SSR.

```bash
npm install express
```

---

## Babel Configuration

Create a `.babelrc` or `babel.config.js` file to tell Babel how to transpile the code:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

---

## styled-components & SSR

### Install styled-components

```bash
npm install styled-components
```

### Recommended Babel Plugin

This plugin ensures:

- consistent class names
- better debugging
- fewer hydration mismatches

```bash
npm install babel-plugin-styled-components
```

Update Babel config:

```json
{
  "plugins": ["babel-plugin-styled-components"]
}
```

---

## Handling styled-components on the Server

### Why `ServerStyleSheet` is needed

Without server-side style injection:

- styles appear only after client JavaScript loads
- Flash of Unstyled Content (FOUC) may occur
- hydration mismatch warnings may appear

### How it works

- `sheet.collectStyles()` wraps the app during server rendering
- `sheet.getStyleTags()` returns `<style>` tags
- these tags are injected into the HTML response

---

## HTML Template Requirement

To support SSR styles, update `build/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    {{styles}}
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### Important

If `{{styles}}` is missing:

- `.replace("{{styles}}", ...)` does nothing
- styles will be injected **client-side only**

---

## Why Styles Still Appear Without SSR Injection

Even if server-side style injection is removed:

- the client bundle still runs
- styled-components injects styles during hydration
- visually, the app still looks styled

⚠️ This means the styles are **not truly SSR**.

---

## How to Verify True SSR

### 1. View Page Source (not DevTools Elements)

- Right click → **View Page Source**
- Search for `<style data-styled="...">`

If present → styles are SSR
If missing → styles are client-only

---

### 2. Disable JavaScript and Reload

- If styles disappear → client-only styles
- If styles remain → true SSR

---

## Common Pitfalls

- Forgetting to install `styled-components`
- Not sealing `ServerStyleSheet`
- Serving CRA `index.html` without replacing the root div
- Confusing client-side hydration styles with SSR styles
- Missing the `{{styles}}` placeholder

---

## Summary

- Express handles routing and SSR
- `StaticRouter` enables server-side routing
- `renderToString` renders React on the server
- styled-components require explicit server style injection
- Client-side hydration can mask SSR issues
- Always verify using **View Page Source**

---

## Server Setup (SSR)

### `server.js`

```js
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";
import path from "path";
import fs from "fs";
import App from "./src/App";

const app = express();

app.use(express.static("./build", { index: false }));

app.get("/*", (req, res) => {
  const sheet = new ServerStyleSheet();

  try {
    const reactApp = renderToString(
      sheet.collectStyles(
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      )
    );

    const templateFile = path.resolve("./build/index.html");

    fs.readFile(templateFile, "utf8", (err, data) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(
        data
          .replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
          .replace("{{styles}}", sheet.getStyleTags())
      );
    });
  } finally {
    // Prevent memory leaks
    sheet.seal();
  }
});

app.listen(8080, () => {
  console.log("SSR server running at http://localhost:8080");
});
```

---

## Next Improvements

- Migrate to React Router v6 SSR
- Add server-side data fetching
- Improve caching and performance
- Compare this setup with Next.js SSR

```

```

import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

const app = express();

app.get("/*", (req, res) => {
  const reactApp = renderToString(<h1>Hello from SSR</h1>);

  res.status(200).send(`
    <!doctype html>
    <html>
      <head><meta charset="utf-8" /></head>
      <body>
        <div id="root">${reactApp}</div>
      </body>
    </html>
  `);
});

app.listen(8080, () => console.log("SSR server on http://localhost:8080"));

import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import path from "path";
import fs from "fs";
import App from "./src/App";

const app = express();

/*This tells our server to statically serve files inside the build folder
 * If you take a look inside this build folder, you'll see that it contains an index.html.
 * By default, when Express is serving a static folder like we are here,
 * when it sees that the folder has an index.html file and the user is trying to load data from it, it will immediately send back that file
 * So we don't want that to happen we put { index: false }
 */
app.use(express.static("./build", { index: false }));

app.get("/*", (req, res) => {
  const reactApp = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const templateFile = path.resolve("./build/index.html");
  fs.readFile(templateFile, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
    );
  });

  //res.status(200).send(`<!doctype html>...`);
});

app.listen(8080, () => console.log("SSR server on http://localhost:8080"));

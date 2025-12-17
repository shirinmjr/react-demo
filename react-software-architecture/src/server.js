import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { App } from "./src/App";

const app = express();

app.use(express.static("./build", { index: false })); //not to immediately send back the index file

app.get("/*", (req, res) => {
  const reactApp = renderToString(
    <StaticRouter location={req.ulr}>
      <App />
    </StaticRouter>
  );

  return res.send(
    ` <html>
      <body>
        <div id="root">${reactApp}</div>
      </body>
    </html>`
  );
});
app.listen(8080, () => {
  console.log("server is listening on port 8080");
});

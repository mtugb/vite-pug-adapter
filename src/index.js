import pug from "pug";
import process from "node:process";
const vite_pug_adapter = {
  name: "vite-pug-adapter",
  configureServer: function (server) {
    server.middlewares.use(async (req, res, next) => {
      // normal page
      if (/^\/[a-zA-Z0-9_-]*$/.test(req.url)) {
        const pug_path = req.url === "/" ? "/index" : req.url;
        try {
          let html = pug.renderFile(`${process.cwd()}${pug_path}.pug`);
          res.setHeader("Content-Type", "text/html");
          // enable hot reloading
          html = await server.transformIndexHtml(req.url, html);
          res.end(html);
        } catch (e) {
          // throw error to vite ( this func mutate error into explict way)
          server.ssrFixStacktrace(e);
          next(e);
        }
      } else {
        next();
      }
    });

    server.watcher.add(`${process.cwd()}/**/*.pug`);

    server.watcher.on("change", (file) => {
      if (file.endsWith(".pug")) {
        server.ws.send({
          type: "full-reload",
          path: "*",
        });
      }
    });
  },
};
export default vite_pug_adapter;

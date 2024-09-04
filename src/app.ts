import { Hono } from "hono";
import { logger } from "hono/logger";
import { handlersRouter } from "./handlers/router";
import { uiRouter } from "./ui/router";

const app = new Hono();

app.use(logger());

app.route("/", uiRouter);
app.route("/api", handlersRouter);

const port = process.env.PORT || "8080";

export default {
  port,
  fetch: app.fetch,
};

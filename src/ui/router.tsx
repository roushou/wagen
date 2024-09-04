import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { Layout } from "./components/layout";
import { HomePage } from "./home";

const router = new Hono();

router.use("/static/*", serveStatic({ root: "./public/" }));

router.get("/", (ctx) => {
  return ctx.html(
    <Layout>
      <HomePage />
    </Layout>,
  );
});

export { router as uiRouter };

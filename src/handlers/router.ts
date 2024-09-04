import { Hono } from "hono";
import { fluxMiddleware } from "../middlewares/flux";
import { healthRouter } from "./health";
import { imageRouter } from "./image";

const router = new Hono();

router.use(fluxMiddleware);

router.route("/", healthRouter);
router.route("/", imageRouter);

export { router as handlersRouter };

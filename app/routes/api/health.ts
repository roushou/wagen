import { createRoute } from "honox/factory";

export const GET = createRoute((ctx) => {
  return ctx.text("healthy");
});

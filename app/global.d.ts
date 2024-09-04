import {} from "hono";
import type { FluxClient } from "../src/flux";

type Head = {
  title?: string;
};

declare module "hono" {
  interface Env {
    Variables: {
      flux: FluxClient;
    };
  }
  type ContextRenderer = (
    content: string | Promise<string>,
    head?: Head,
  ) => Response | Promise<Response>;
}

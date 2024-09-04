import type { FluxClient } from "./flux";

export type Variables = {
  flux: FluxClient;
};

export type Env = {
  FLUX_API_KEY: string;
  FLUX_BASE_URL: string;
};

import type { ApibaraOptions } from "apibara/types";

export async function resolveRuntimeConfigOptions(options: ApibaraOptions) {
  options.runtimeConfig = { ...options.runtimeConfig };
  process.env.APIBARA_RUNTIME_CONFIG = JSON.stringify(options.runtimeConfig);
}

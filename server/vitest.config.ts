// @ts-nocheck

import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globalSetup: "./src/model/dbTesting.ts",
  },
});

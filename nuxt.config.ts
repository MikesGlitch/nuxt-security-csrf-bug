import { type NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  devtools: { enabled: true },

  modules: ["nuxt-csurf"],

  csurf: {
    https: false,
    methodsToProtect: ['PUT'],
  },

  typescript: {
    types: ["@nuxt/types"],
  },
};

export default config;

import { type NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  devtools: { enabled: true },

  modules: [
    "nuxt-security",
  ],

  security: {
    nonce: true,
    csrf: {
      enabled: true,
      https: false,
      addCsrfTokenToEventCtx: true,
      methodsToProtect: ['PUT'],
    }
  },

  typescript: {
    types: ['@nuxt/types']
  }
};

export default config;

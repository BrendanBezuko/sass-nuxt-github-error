// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData: `@use "~/assets/scss/_colors.scss" as *;`,
        },
      },
    },
  },
});

import { defineNuxtConfig } from "nuxt";

const title = "TırıVırıŞeyler";
const description =
  "Akılcı ve yenilikçi içerik platformu ve dijital dergi olan TırıVırıŞeyler ile tanışın. Nuxt.js, TypeScript ve Strapi ile güçlendirildi.";
const url = "https://tiriviriseyler.xyz";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-graphql-client"],
  runtimeConfig: {
    public: {
      GQL_HOST: "https://api.tiriviriseyler.xyz/graphql",
    },
  },
  meta: {
    title,
    meta: [
      { hid: "charset", charset: "utf-8" },
      {
        hid: "viewport",
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { hid: "description", name: "description", content: description },
      { hid: "og:site_name", property: "og:site_name", content: title },
      {
        hid: "og:description",
        property: "og:description",
        content: description,
      },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: url },
      { hid: "og:image", property: "og:image", content: `${url}/icon.png` },
      // Twitter Card
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      { hid: "twitter:site", name: "twitter:site", content: "@tviriseyler" },
      { hid: "twitter:title", name: "twitter:title", content: title },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: description,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: `${url}/icon.png`,
      },
      { hid: "twitter:image:alt", name: "twitter:image:alt", content: title },
    ],
  },
});

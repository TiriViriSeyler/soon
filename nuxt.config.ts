import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-graphql-client'],
    runtimeConfig: {
        public: {
          GQL_HOST: 'https://api.tiriviriseyler.xyz/graphql',
        }
      }
})

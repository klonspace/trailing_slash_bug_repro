// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  hooks: {
    async 'pages:extend'(pages) {
      return new Promise(res => {
        pages.push(...[
          {
            path: "/",
            name: "home",
            file: "~/_pages/Home.vue"
          },
          {
            path: "/about",
            name: "about",
            file: "~/_pages/About.vue"
          },
          {
            path: "/trailing/",
            name: "trailing",
            file: "~/_pages/Trailing.vue"
          }
        ])
        console.log(pages)
        res()
      })

    },
  },
})

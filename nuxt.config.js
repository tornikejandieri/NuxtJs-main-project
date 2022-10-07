export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "main-project",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    baseUrl:
      process.env.BASE_URL ||
      "https://nuxt-blog-ea935-default-rtdb.europe-west1.firebasedatabase.app/posts/-NDhz3wjaZp-VgvGRS2w",
  },
  generate: {},
  rootDir: "/",
  // router: {
  //   base: '/my-app/'
  //   extendRoutes(routes, resolve) {
  //     routes.push(
  //       path: '*',
  //       component: resolve(__dirname, 'pages/index.vue')
  //     )
  //   }
  // }
};

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'COVID en Venezuela' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { hid: 'og:image', name: 'og:image', content: '/static/share.png' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@plugins/vue-font-awesome'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-seo'
    // '@nuxtjs/proxy'
  ],
  seo: {
    // Module options
    name: 'Covid en Venezuela',
    title: 'Covid en Venezuela',
    description: 'Resumen de la pandemia en Venezuela'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  proxy: {
    '/summary': 'https://covid19.patria.org.ve/api/v1/summary',
    '/timeline': 'https://covid19.patria.org.ve/api/v1/timeline'
  },
  axios: {
    proxy: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push(
        {
          test: /\.(json|geojson)$/,
          loader: 'json-loader'
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader'
        }
      )
    }
  }
}

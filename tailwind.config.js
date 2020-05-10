/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        white: '#FAFFFD',
        background: '#121724',
        confirmed: 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)',
        recovered: '#48E5C2',
        death: '#D7263D',
        active: '#FA824C'
      }
    }
  },
  variants: {},
  plugins: []
}

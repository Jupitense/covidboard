# Covidboard - Venezuela

> A simple tracker for COVID19 in Venezuela

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Map

The map was build with [Vue-SVG-Map](https://github.com/VictorCazanave/vue-svg-map) with a SVG provide by [mapsvg.com](https://mapsvg.com/maps/venezuela)

## Proxy

All data comes from [Venezuela's Official Source](https://covid19.patria.org.ve/api-covid-19-venezuela/) but CORS policy requires a proxy

Proxy rules has defined in netlify.toml file

    [[redirects]]
        from = "/summary"
        to = "https://covid19.patria.org.ve/api/v1/summary"
        status = 200
        force = true
    [[redirects]]
        from = "/timeline"
        to = "https://covid19.patria.org.ve/api/v1/timeline"
        status = 200
        force = true

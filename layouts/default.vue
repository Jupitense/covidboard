<template>
  <div>
    <div class="w-full bg-green-100 text-green-700 text-center">
      Covidboard es un proyecto Open Source dessarrollado por
      <a
        href="https://github.com/olimpoo/"
        target="blank"
        class="underline font-bold"
      >
        Olimpoo
      </a>
      usando los
      <a
        href="https://covid19.patria.org.ve/"
        target="blank"
        class="underline font-bold"
      >
        datos oficiales del país
      </a>
    </div>
    <div v-if="isLoading" class="load-view">
      <atom-spinner :animation-duration="1000" :size="100" color="#8fc93aff" />
      <span>Cargando datos...</span>
    </div>
    <div v-else class="dashboard grid">
      <aside class="bg-gray-900">
        <h1
          class="hidden lg:block text-white lg:text-lg font-black text-center p-6 pb-0"
        >
          COVID-Venezuela
        </h1>
        <h1
          class="lg:hidden text-white text-2xl font-black text-center p-6 pb-0"
        >
          CB
        </h1>
        <ul class="flex flex-col mt-12">
          <a
            href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public/q-a-coronaviruses"
            target="blank"
          >
            <li
              class="flex flex-col items-center lg:block w-full cursor-pointer pt-4 pb-4 pl-6 pr-6 hover:bg-green-700"
            >
              <font-awesome-icon icon="newspaper" class="lg:mr-4" />
              <span class="invisible md:visible lg:text-sm xl:text-base">
                Información
              </span>
            </li>
          </a>
          <a
            href="https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
            target="blank"
          >
            <li
              class="flex flex-col items-center lg:block w-full cursor-pointer pt-4 pb-4 pl-6 pr-6 hover:bg-green-700"
            >
              <font-awesome-icon icon="globe" class="lg:mr-4" />
              <span class="invisible md:visible lg:text-sm xl:text-base">
                Global
              </span>
            </li>
          </a>
        </ul>
      </aside>
      <nuxt />
    </div>
  </div>
</template>

<script>
import { AtomSpinner } from 'epic-spinners'

export default {
  components: {
    AtomSpinner
  },
  computed: {
    isLoading() {
      return this.$store.state.appController.isLoading
    }
  },
  async beforeCreate() {
    await this.$store.dispatch('appController/getAllData')
  },
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/share.png'
        }
      ],
      script: [
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
          'data-ad-client': 'ca-pub-4812198063433866',
          async: true
        }
      ]
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  @apply bg-background;
  @apply text-white;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.load-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.load-view span {
  margin-top: 1.5rem;
}

.dashboard {
  grid-template-columns: 20% auto;
}

@media screen and (min-width: 640px) {
  .dashboard {
    grid-template-columns: 15% auto;
  }
}

aside {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 100vh;
}
</style>

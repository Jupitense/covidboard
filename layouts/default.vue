<template>
  <div>
    <div v-if="isLoading" class="load-view">
      <atom-spinner :animation-duration="1000" :size="100" color="#8fc93aff" />
      <span>Cargando datos...</span>
    </div>
    <div v-else class="dashboard grid">
      <aside class="bg-gray-900">
        <h1
          class="hidden lg:block text-white lg:text-lg font-black text-center p-6 pb-0"
        >
          COVIDBoard
        </h1>
        <h1
          class="lg:hidden text-white text-2xl font-black text-center p-6 pb-0"
        >
          CB
        </h1>
        <ul class="flex flex-col mt-12">
          <a
            v-for="option in menu"
            :key="option"
            :href="option.url"
            :target="option.target"
          >
            <li
              class="flex flex-col items-center lg:block w-full cursor-pointer pt-4 pb-4 pl-6 pr-6 hover:bg-green-700"
            >
              <font-awesome-icon :icon="option.icon" class="lg:mr-4" />
              <span class="invisible md:visible lg:text-sm xl:text-base">
                {{ option.label }}
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
  data() {
    return {
      menu: [
        {
          label: 'Resumen',
          icon: 'virus',
          url: '/',
          target: ''
        },
        {
          label: 'Noticias',
          icon: 'newspaper',
          url: '#',
          target: ''
        },
        {
          label: 'Global',
          icon: 'globe',
          url:
            'https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6',
          target: 'blank'
        }
      ]
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.appController.isLoading
    }
  },
  async beforeCreate() {
    await this.$store.dispatch('appController/getAllData')
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

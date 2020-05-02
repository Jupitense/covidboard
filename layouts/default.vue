<template>
  <div>
    <div v-if="isLoading" class="load-view">
      <atom-spinner :animation-duration="1000" :size="100" color="#8fc93aff" />
      <span>Cargando datos...</span>
    </div>
    <div v-else class="dashboard grid">
      <aside class="bg-gray-900">
        <h1 class="text-white text-2xl font-black text-center p-6 pb-0">
          COVIDBoard<sub class="text-xs font-normal">BETA</sub>
        </h1>
        <ul class="flex flex-col mt-12">
          <li
            v-for="option in menu"
            :key="option"
            class="w-full cursor-pointer pt-4 pb-4 pl-6 pr-6 hover:bg-green-700"
          >
            <font-awesome-icon :icon="option.icon" class="mr-4" />
            {{ option.label }}
          </li>
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
          icon: 'virus'
        },
        {
          label: 'Noticias',
          icon: 'newspaper'
        }
      ]
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.appController.isLoading
    },
    data() {
      return this.$store.state.appController.data
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
  grid-template-columns: 15% auto;
}

aside {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 100vh;
}
</style>

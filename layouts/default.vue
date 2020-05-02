<template>
  <div>
    <div v-if="isLoading" class="load-view">
      <atom-spinner :animation-duration="1000" :size="100" color="#8fc93aff" />
      <span>Cargando datos...</span>
    </div>
    <div v-else class="grid">
      <aside class="bg-background">
        <h1 class="text-white text-4xl font-black text-center p-6 pb-0">
          COVIDToday
        </h1>
        <h3 class="text-white text-center">
          Estado de la pandemia en <br /><b>Venezuela</b>
        </h3>
        <div class="grid grid-rows-4 grid-cols-1 gap-6 pt-6">
          <div class="flex flex-col justify-center items-center">
            <span class="text-5xl font-black text-confirmed">
              {{ data ? data.Confirmed.Count : 0 }}
            </span>
            <span class="text-xl text-white">Casos confirmados</span>
          </div>
          <div class="flex flex-col justify-center items-center">
            <span class="text-5xl font-black text-recovered">
              {{ data ? data.Recovered.Count : 0 }}
            </span>
            <span class="text-xl text-white">Pacientes recuperados</span>
          </div>
          <div class="flex flex-col justify-center items-center">
            <span class="text-5xl font-black text-death">
              {{ data ? data.Deaths.Count : 0 }}
            </span>
            <span class="text-xl text-white">Pacientes fallecidos</span>
          </div>
          <div class="flex flex-col justify-center items-center">
            <span class="text-5xl font-black text-active">
              {{ data ? data.Active.Count : 0 }}
            </span>
            <span class="text-xl text-white">Casos activos</span>
          </div>
        </div>
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
  background: #eeeeee;
  color: #2d2d2d;
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

.grid {
  grid-template-columns: 20% auto;
}

aside {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: #00124e;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230b3a68' fill-opacity='0.23' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>

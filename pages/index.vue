<template>
  <div class="app flex flex-col min-h-screen p-8">
    <section class="grid grid-cols-2 grid-rows-1 bg-white p-8 rounded-md">
      <div>
        <h1 class="text-xl font-bold mb-8">Casos confirmados por estado</h1>
        <ul>
          <li v-for="cases in casesByState" :key="cases">
            <span class="count inline-block text-center">{{ cases[1] }}</span>
            <span class="inline-block">{{ cases[0] }}</span>
          </li>
        </ul>
      </div>
      <div></div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      casesByState: []
    }
  },
  computed: {
    data() {
      return this.$store.state.appController.data
    }
  },
  created() {
    this.casesByState = Object.entries(this.data.Confirmed.ByState).sort(
      (a, b) => b[1] - a[1]
    )
  }
}
</script>

<style>
ul {
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  line-height: 1.75;
}

.count {
  width: 33px;
}
</style>

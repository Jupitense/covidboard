<template>
  <div class="app flex flex-col min-h-screen p-8">
    <section
      class="grid grid-cols-2 grid-rows-1 bg-gray-900 p-8 rounded-lg shadow-md"
    >
      <div>
        <h1 class="text-xl font-bold mb-8">Casos confirmados por estado</h1>
        <ul>
          <li v-for="cases in casesByState" :key="cases[0]">
            <span class="count inline-block text-center">{{ cases[1] }}</span>
            <span class="inline-block">{{ cases[0] }}</span>
          </li>
        </ul>
      </div>
      <div>
        <svg-map :map="venezuela" :location-class="fillMap" />
      </div>
    </section>
  </div>
</template>

<script>
import { SvgMap } from 'vue-svg-map'
import venezuela from 'static/venezuela.js'

export default {
  components: {
    SvgMap
  },
  data() {
    return {
      casesByState: [],
      venezuela,
      casesCount: {}
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
    for (let i = 0; i < this.venezuela.locations.length; i++) {
      for (let j = 0; j < this.casesByState.length; j++) {
        if (this.venezuela.locations[i].name === this.casesByState[j][0]) {
          this.venezuela.locations[i].count = this.casesByState[j][1]
        }
      }
    }
  },
  methods: {
    fillMap(location, index) {
      if (location.count > 15) {
        return 'test'
      } else return 'test2'
    }
  }
}
</script>

<style src="vue-svg-map/dist/index.css"></style>

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

.test {
  fill: red;
}

.test2 {
  fill: blue;
}
</style>

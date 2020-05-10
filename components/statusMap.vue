<template>
  <div>
    <h1 class="text-xl md:text-2xl font-bold ml-8 mt-4 mb-4">
      Casos confirmados por estado
    </h1>
    <div
      class="grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-1 items-center gap-4 p-8 pt-0 rounded-lg"
    >
      <ul>
        <li
          v-for="cases in casesByState"
          :key="cases[0]"
          class="bg-gray-700 w-full p-2 mb-2 mr-2 rounded-sm"
          :class="fillList(cases[1])"
        >
          <span class="count inline-block text-center font-bold">
            {{ cases[1] }}
          </span>
          <span class="inline-block">{{ cases[0] }}</span>
        </li>
      </ul>
      <svg-map :map="venezuela" :location-class="fillMap" />
    </div>
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
      casesCount: []
    }
  },
  computed: {
    data() {
      return this.$store.state.appController.summary
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
          this.casesCount.push(this.venezuela.locations[i].count)
        }
      }
    }
  },
  methods: {
    fillMap(location, index) {
      const max = Math.max.apply(null, this.casesCount)
      const range = (number, percentaje) => {
        return number - (number * percentaje) / 100
      }
      let color = ''
      switch (true) {
        case location.count === 0:
          color = 'zero'
          break
        case location.count >= range(max, 100) &&
          location.count < range(max, 90):
          color = 'lower'
          break
        case location.count >= range(max, 90) &&
          location.count < range(max, 75):
          color = 'low'
          break
        case location.count >= range(max, 75) &&
          location.count < range(max, 50):
          color = 'midle'
          break
        case location.count >= range(max, 50) &&
          location.count < range(max, 20):
          color = 'high'
          break
        case location.count >= range(max, 20):
          color = 'higher'
          break
        default:
          break
      }
      return color
    },
    fillList(location) {
      const max = Math.max.apply(null, this.casesCount)
      const range = (number, percentaje) => {
        return number - (number * percentaje) / 100
      }
      let color = ''
      switch (true) {
        case location === 0:
          color = 'zero'
          break
        case location >= range(max, 100) && location < range(max, 90):
          color = 'lower'
          break
        case location >= range(max, 90) && location < range(max, 75):
          color = 'low'
          break
        case location >= range(max, 75) && location < range(max, 50):
          color = 'midle'
          break
        case location >= range(max, 50) && location < range(max, 20):
          color = 'high'
          break
        case location >= range(max, 20):
          color = 'higher'
          break
        default:
          break
      }
      return color
    }
  }
}
</script>

<style src="vue-svg-map/dist/index.css"></style>

<style>
ul {
  -webkit-column-count: 1;
  -moz-column-count: 1;
  column-count: 1;
  line-height: 1.5;
}

@media screen and (min-width: 640px) {
  ul {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    line-height: 1.75;
  }
}

.count {
  width: 33px;
}

.higher {
  fill: #c53030;
  border-left: 5px solid #c53030;
}

.high {
  fill: #e53e3e;
  border-left: 5px solid #e53e3e;
}

.midle {
  fill: #f56565;
  border-left: 5px solid #f56565;
}

.low {
  fill: #fc8181;
  border-left: 5px solid #fc8181;
}

.lower {
  fill: #feb2b2;
  border-left: 5px solid #feb2b2;
}

.zero {
  fill: #ebf8ff;
  border-left: 5px solid #ebf8ff;
}
</style>

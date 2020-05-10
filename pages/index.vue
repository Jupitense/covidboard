<template>
  <div>
    <div
      class="cards grid grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 w-full gap-6 p-6"
    >
      <cases-card
        :count="summary.Confirmed.Count"
        type="confirmed"
        title="Confirmados"
        icon="viruses"
      />
      <cases-card
        :count="summary.Recovered.Count"
        type="recovered"
        title="Recuperados"
        icon="heartbeat"
      />
      <cases-card
        :count="summary.Deaths.Count"
        type="deaths"
        title="Muertos"
        icon="skull-crossbones"
      />
      <cases-card
        :count="summary.Active.Count"
        type="actives"
        title="Activos"
        icon="head-side-cough"
      />
    </div>
    <status-map />
    <div class="p-8 hidden lg:block">
      <timeline-chart :data="timelineData" :options="timelineOptions" />
    </div>
  </div>
</template>

<script>
import timelineChart from '~/components/timelineChart.vue'
import casesCard from '~/components/casesCard.vue'
import statusMap from '~/components/statusMap.vue'

export default {
  components: {
    timelineChart,
    statusMap,
    casesCard
  },
  data() {
    return {
      timelineData: {
        datasets: [
          {
            label: 'Confirmados',
            data: [],
            fill: false,
            borderColor: '#0072ff',
            pointBackgroundColor: '#00c6ff'
          },
          {
            label: 'Recuperados',
            data: [],
            fill: false,
            borderColor: '#11998e',
            pointBackgroundColor: '#38ef7d'
          },
          {
            label: 'Muertos',
            data: [],
            fill: false,
            borderColor: '#ed213a',
            pointBackgroundColor: '#93291e'
          },
          {
            label: 'Activos',
            data: [],
            fill: false,
            borderColor: '#f5af19',
            pointBackgroundColor: '#f1e711'
          }
        ]
      },
      timelineOptions: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'COVID19 - Línea de Tiempo',
          fontColor: '#fafffd',
          fontSize: 24
        },
        legend: {
          labels: {
            fontColor: '#fafffd',
            fontSize: 16
          }
        },
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'week',
                tooltipFormat: 'MM/DD/YYYY'
              },
              scaleLabel: {
                display: true,
                fontColor: '#fafffd',
                fontSize: 16,
                labelString: 'Semanas'
              },
              ticks: {
                fontColor: '#fafffd'
              },
              gridLines: {
                display: false,
                color: '#4a5568'
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                fontColor: '#fafffd',
                fontSize: 16,
                labelString: 'Número de Casos'
              },
              ticks: {
                fontColor: '#fafffd'
              },
              gridLines: {
                display: false,
                color: '#4a5568'
              }
            }
          ]
        }
      }
    }
  },
  computed: {
    summary() {
      return this.$store.state.appController.summary
    },
    timeline() {
      return this.$store.state.appController.timeline
    }
  },
  created() {
    this.timelineData.datasets[0].data = this.timeline.map((cases) => {
      return {
        x: cases.Date,
        y: cases.Confirmed.Count
      }
    })
    this.timelineData.datasets[1].data = this.timeline.map((cases) => {
      return {
        x: cases.Date,
        y: cases.Recovered.Count
      }
    })
    this.timelineData.datasets[2].data = this.timeline.map((cases) => {
      return {
        x: cases.Date,
        y: cases.Deaths.Count
      }
    })
    this.timelineData.datasets[3].data = this.timeline.map((cases) => {
      return {
        x: cases.Date,
        y: cases.Active.Count
      }
    })
  }
}
</script>

<style>
.cards {
  justify-items: center;
}
</style>

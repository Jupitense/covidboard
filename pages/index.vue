<template>
  <div>
    <div class="grid grid-cols-4 grid-rows-1 w-full gap-6 p-6">
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
    <timeline-chart :data="timelineData" :options="timelineOptions" />
    <!-- <div class="app flex flex-col min-h-screen p-8">
      <status-map />
    </div> -->
  </div>
</template>

<script>
import timelineChart from '~/components/timelineChart.vue'
import casesCard from '~/components/casesCard.vue'
// import statusMap from '~/components/statusMap.vue'

export default {
  components: {
    timelineChart,
    // statusMap,
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
            borderColor: '#0197F6'
          },
          {
            label: 'Recuperados',
            data: [],
            fill: false,
            borderColor: '#48E5C2'
          },
          {
            label: 'Muertos',
            data: [],
            fill: false,
            borderColor: '#D7263D'
          },
          {
            label: 'Activos',
            data: [],
            fill: false,
            borderColor: 'orange'
          }
        ]
      },
      timelineOptions: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'COVID19 - Línea de Tiempo'
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
                labelString: 'Semanas'
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Número de Casos'
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

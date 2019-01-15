import { Component, Vue } from "vue-property-decorator";
import lineChartComponent from "@/components/chart/line/LineChart.vue";

@Component({
  components: {
    lineChartComponent
  }
})
export default class Chart extends Vue {
  public chartTitle: string = "Vue Chartjs Demo";
  public chartData: any = {};
  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      // display: false
      onClick(event, legendItem) {
        return;
      },
      fullWidth: false,
      labels: {
        boxWidth: 15,
        fontColor: "#ffffff"
      },
    },
    layout: {
      padding: {
        top: 20,
        left: 20,
        bottom: 20,
        right: 20
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            autoSkip: true,
            fontColor: "rgba(255, 255, 255, 1)",
            fontSize: 14
          },
          scaleLabel: {
            display: true,
            fontColor: "rgba(255, 255, 255, 1)",
            labelString: "月",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            color: "rgba(255, 255, 255, .5)",
            zeroLineColor: "rgba(255, 255, 255, 1)"
          },
          scaleLabel: {
            display: false,
          },
          ticks: {
            autoSkip: true,
            fontColor: "rgba(255, 255, 255, 1)",
            fontSize: 14,
            max: 100,
            min: 0
          },
        },
      ],
    }
  };

  public created() {
    this.createChartValue();
  }

  public createChartValue() {
    this.chartData = {
      labels: ["1", "2", "3", "4", "5"],
      datasets: [
        {
          label: "Tokyo",
          backgroundColor: "#F87979",
          borderColor: "#F87979",
          fill: false,
          data: this.craeteRamdomValue()
        },
        {
          label: "Osaka",
          backgroundColor: "#6090EF",
          borderColor: "#6090EF",
          fill: false,
          data: this.craeteRamdomValue()
        }
      ]
    };
  }

  public craeteRamdomValue() {
    const arr: number[] = [];
    for (let i = 0; i < 5; i++) {
      arr.push(Math.random() * 100);
    }
    return arr;
  }
}

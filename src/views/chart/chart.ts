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
            display: true,
            drawOnChartArea: false,
            color: "rgba(255, 255, 255, .5)",
            zeroLineColor: "rgba(255, 255, 255, 1)"
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
          id: "yAxis_1",
          type: "linear",
          gridLines: {
            display: true,
            drawOnChartArea: false,
            color: "rgba(255, 255, 255, .5)",
            zeroLineColor: "rgba(255, 255, 255, 1)"
          },
          scaleLabel: {
            display: true,
            fontColor: "rgba(255, 255, 255, 1)",
            labelString: "温度(℃)"
          },
          ticks: {
            autoSkip: true,
            fontColor: "rgba(255, 255, 255, 1)",
            fontSize: 14,
            min: 0,
            max: 40
          },
        },
        {
          id: "yAxis_2",
          type: "linear",
          gridLines: {
            display: true,
            drawOnChartArea: false,
            color: "rgba(255, 255, 255, .5)",
            zeroLineColor: "rgba(255, 255, 255, 1)"
          },
          scaleLabel: {
            display: true,
            fontColor: "rgba(255, 255, 255, 1)",
            labelString: "湿度(%)"
          },
          ticks: {
            autoSkip: true,
            fontColor: "rgba(255, 255, 255, 1)",
            fontSize: 14,
            min: 0,
            max: 100
          },
          position: "right"
        }
      ],
    }
  };

  public created() {
    this.createChartData();
  }

  // public createOptions() {
  //   const params: any[] = [];
  //   for (let i = 1; i < 3; i++) {
  //     const pushParams = this.baseYAxisParams;
  //     pushParams["id"] = "yAxis_" + String(i);
  //   }
  //   console.log(params);
  //   return params;
  // }

  public createChartData() {
    this.chartData = {
      labels: ["1", "2", "3", "4", "5"],
      datasets: [
        {
          yAxisID: "yAxis_1",
          type: "line",
          label: "温度",
          backgroundColor: "#F87979",
          borderColor: "#F87979",
          fill: false,
          data: this.craeteRamdomValue(40)
        },
        {
          yAxisID: "yAxis_2",
          label: "湿度",
          backgroundColor: "#6090EF",
          borderColor: "#6090EF",
          fill: false,
          data: this.craeteRamdomValue(100)
        }
      ]
    };
  }

  public craeteRamdomValue(baseNumber: number) {
    const arr: number[] = [];
    for (let i = 0; i < 5; i++) {
      arr.push(Math.floor(Math.random() * baseNumber));
    }
    return arr;
  }
}
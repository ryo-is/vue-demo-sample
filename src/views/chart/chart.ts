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

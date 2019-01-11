import { Vue, Component, Mixins } from "vue-property-decorator";
import { Bar, Line } from "vue-chartjs";

@Component({})
export default class ChartComponent extends Mixins(Bar) {
  public chartData: any = {
    datacollection: {
      labels: ["January", "February"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#f87979",
          data: [40, 20]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  };

  public mounted() {
    this.renderChart(this.chartData.datacollection, this.chartData.options);
  }
}

import { Component, Mixins, Prop, Watch } from "vue-property-decorator";
import { Line, mixins } from "vue-chartjs";
// const { reactiveProp } = mixins;

@Component({})
export default class ChartComponent extends Mixins(Line, mixins.reactiveProp) {
  @Prop() public chartData: any;

  @Watch("chartData") public onChangeChartValue() {
    console.log(this);
  }

  // public datacollection: any = {
  //   labels: ["January", "February"],
  //   datasets: [
  //     {
  //       label: "Data One",
  //       backgroundColor: "#f87979",
  //       data: this.chartData
  //     }
  //   ]
  // };

  public options: any = {
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

  public mounted() {
    console.log(this);
    this.renderChart(this.chartData, this.options);
  }
}

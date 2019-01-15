import { Component, Mixins, Prop, Watch } from "vue-property-decorator";
import { Line, Bar, mixins } from "vue-chartjs";

@Component({})
export default class LineChartComponent extends Mixins(Line, Bar, mixins.reactiveProp) {
  @Prop() public chartData: any;
  @Prop() public chartOptions: any;

  @Watch("chartData") public onChangeChartValue() {
    console.log(this.chartData);
  }

  public mounted() {
    console.log(this);
    this.renderChart(this.chartData, this.chartOptions);
  }
}
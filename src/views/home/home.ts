import { Component, Vue } from "vue-property-decorator";
import clickEventComponent from "@/components/clickEvent/ClickEvent.vue";
import changeEventComponent from "@/components/changeEvent/ChangeEvent.vue";
import vShowComponent from "@/components/v-show/v-show.vue";
import vIfComponent from "@/components/v-if/v-if.vue";
import vForComponent from "@/components/v-for/v-for.vue";
import vModelComponent from "@/components/v-model/v-model.vue";
import emitComponent from "@/components/emit/Emit.vue";
import changeClassComponent from "@/components/changeClass/ChangeClass.vue";
import propComponent from "@/components/prop/Prop.vue";
import refComponent from "@/components/ref/Ref.vue";
import chartComponent from "@/components/chart/Chart.vue";

@Component({
  components: {
    clickEventComponent,
    changeEventComponent,
    vShowComponent,
    vIfComponent,
    vForComponent,
    vModelComponent,
    emitComponent,
    changeClassComponent,
    propComponent,
    refComponent,
    chartComponent
  },
})
export default class Home extends Vue {
  public homeTitle: string = "Vue Demo Sapmle";
  public propValue: string = "インスタンス変数を子Componentに渡す";
  public titleDisplay: boolean = true;
  public refDemoText: string = "";
  public refInputText: string = "propで渡す文字列";
  public tableData: any = [
    {
      name: "suzuki",
      value: 10
    },
    {
      name: "sato",
      value: 20
    }
  ];
  public chartData: any = {};

  public created() {
    this.createChartValue();
  }

  public mounted() {
    const refDemoComponent: any = this.$refs.refDemo;
    this.refDemoText = refDemoComponent.returnText();
  }

  public changeTitleDisplay() {
    this.titleDisplay = !this.titleDisplay;
  }

  public changeRefInputText() {
    const refDemoComponent: any = this.$refs.refDemo;
    refDemoComponent.updateRefText(this.refInputText);
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

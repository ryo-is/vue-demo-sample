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

  // public created() {
  //   const refDemoComponent: refComponent = this.$refs.refDemo as Vue;
  //   console.log(refDemoComponent); // undefined
  // }

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
}

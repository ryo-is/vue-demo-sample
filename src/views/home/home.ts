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
  },
})
export default class Home extends Vue {
  public homeTitle: string = "Vue Demo Sapmle";
  public propValue: string = "インスタンス変数を子Componentに渡す";
  public titleDisplay: boolean = true;

  public changeTitleDisplay() {
    this.titleDisplay = !this.titleDisplay;
  }
}

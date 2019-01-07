import { Component, Vue } from "vue-property-decorator";
import clickEventComponent from "@/components/clickEvent/ClickEvent.vue";
import changeEventComponent from "@/components/changeEvent/ChangeEvent.vue";
import vShowComponent from "@/components/v-show/v-show.vue";
import vIfComponent from "@/components/v-if/v-if.vue";

@Component({
  components: {
    clickEventComponent,
    changeEventComponent,
    vShowComponent,
    vIfComponent,
  },
})
export default class Home extends Vue {
  public homeTitle: string = "Vue Demo Sapmle";
}

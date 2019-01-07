import { Component, Vue } from "vue-property-decorator";
import vShowComponent from "@/components/v-show/v-show.vue";
import vIfComponent from "@/components/v-if/v-if.vue";

@Component({
  components: {
    vShowComponent,
    vIfComponent,
  },
})
export default class Home extends Vue {
  public homeTitle: string = "Vue Demo Sapmle";
}

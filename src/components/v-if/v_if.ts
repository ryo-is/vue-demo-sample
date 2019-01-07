import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class vIfComponent extends Vue {
  public displayFlag: string = "indicate";

  public changeDisplayFlag() {
    if (this.displayFlag === "indicate") {
      this.displayFlag = "hide";
    } else {
      this.displayFlag = "indicate";
    }
  }
}

import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ChangeClassComponent extends Vue {
  public fontColorClass: string = "normal-font-color";

  public changeFontColor(color: string) {
    this.fontColorClass = color + "-font-color";
  }
}

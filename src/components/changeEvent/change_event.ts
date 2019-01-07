import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ChangeEventComponent extends Vue {
  public selectItem: string = "";
  public selectedText: string = "";

  public changeItem() {
    this.selectedText = this.selectItem;
  }
}

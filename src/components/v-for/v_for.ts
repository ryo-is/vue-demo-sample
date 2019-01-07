import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class vForComponent extends Vue {
  public listItems: string[] = ["Apple", "Banana", "Orange"];
}

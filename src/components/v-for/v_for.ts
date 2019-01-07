import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class VForComponent extends Vue {
  public listItems: string[] = ["Apple", "Banana", "Orange"];
}

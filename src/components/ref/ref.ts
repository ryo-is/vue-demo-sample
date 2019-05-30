import { Component, Vue, Prop } from "vue-property-decorator"

@Component({})
export default class RefComponent extends Vue {
  @Prop() public refText: string

  public sampleText: string = "Refのデモです"

  public returnText(): string {
    return this.sampleText
  }

  public updateRefText(newText: string) {
    this.refText = newText
  }
}

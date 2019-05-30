import { Component, Vue, Prop } from "vue-property-decorator"

@Component({})
export default class PropComponent extends Vue {
  @Prop() public propText: string
  @Prop() public propValue: string
}

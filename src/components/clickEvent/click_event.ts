import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class ClickEventComponent extends Vue {
  public countNumber: number = 0

  public addCount() {
    this.countNumber += 1
  }
}

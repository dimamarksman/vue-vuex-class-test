import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter, Action } from 'vuex-class';

@Component({})
export default class App extends Vue {
  @Getter count;
  @Action increment;
  @Action decrement;
}

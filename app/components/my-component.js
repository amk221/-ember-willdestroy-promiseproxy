import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { action } from '@ember/object';

export default class MyComponent extends Component {
  @inject store;

  @action
  setup() {
    this.foo = this.store.createRecord('foo', { name: 'foo 1 ' });

    this.foo
      .get('bars')
      .addObject(this.store.createRecord('bar', { name: 'bar 1' }));

    this.foo
      .get('bars')
      .addObject(this.store.createRecord('bar', { name: 'bar 2' }));
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.foo.bars.filter((bar) => {
      console.log(bar);
      return true;
    });
  }
}

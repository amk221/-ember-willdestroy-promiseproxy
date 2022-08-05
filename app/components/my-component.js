import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { action } from '@ember/object';

export default class MyComponent extends Component {
  @inject store;

  @action
  async setup() {
    const { store } = this;
    const foo = store.createRecord('foo', { name: 'foo 1 ' });

    const bars = await foo.bars;

    bars.addObject(this.store.createRecord('bar', { name: 'bar 1' }));
    bars.addObject(this.store.createRecord('bar', { name: 'bar 2' }));

    this.foo = foo;
  }

  willDestroy() {
    super.willDestroy(...arguments);

    console.log('willDestroy', this.foo.bars.isDestroyed);

    this.foo.bars.filter((bar) => {
      console.log(bar);
      return true;
    });
  }
}

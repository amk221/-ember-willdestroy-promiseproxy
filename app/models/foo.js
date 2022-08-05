import Model from '@ember-data/model';
import { attr, hasMany } from '@ember-data/model';

export default class FooModel extends Model {
  @attr name;
  @hasMany('bar') bars;
}

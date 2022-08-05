import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class BarModel extends Model {
  @attr name;
}

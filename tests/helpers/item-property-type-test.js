import {moduleForComponent , test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item-property-type', 'helper: item-property-type', {
  integration: true
});


test('item property type helper renders', function (assert) {
  this.set('InputValue', '1234');
  this.render(hbs`{{item-property-type inputValue}}`);
  assert.equal(this.$().text().trim(), 'Standalone');
});

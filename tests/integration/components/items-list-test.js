import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile'
import Ember from 'ember';

moduleForComponent('items-list', 'Integration | Component | items list', {
  integration: true
});

let item = Ember.Object.create({
  title: 'test-title',
  author: 'test-author',
  image: 'image.jpg'
});
test('should display items details', function (assert) {
  this.set('itemObj', item);
  this.render(hbs`{{items-list item=itemObj}}`);
  assert.equal(this.$('.item-list-container detail-title').text(), 'test-title', 'title: test-title');
  assert.equal(this.$('.item-list-container detail-author').text(), 'test-author', 'author: test-author');
});

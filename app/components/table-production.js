import Ember from 'ember';

export default Ember.Component.extend({
  product: null,
  tagName: 'table',
  className: 'table',
  sort_by: "default",
  sortedModel: Ember.computed('model', 'sort_by', function () {
    switch (this.get('sort_by')) {
      case "dimension":
        return this.get('model').sortBy('dimension').reverse();
      case"price":
        return this.get('model').sortBy('price').reverse();
      default:
        return this.get('model');
    }
  }),
  productList: Ember.computed('model', function () {
    return this.get('model');
  }),
  actions: {
    sort_data(column) {
      this.set('sort_by', column);
    }
  }
});

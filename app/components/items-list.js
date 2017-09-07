import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  actions: {
    showItems(item) {
      alert(item);
    },
    toggleImageSize() {
      this.toggleProperty('isWide');
    }
  }
});

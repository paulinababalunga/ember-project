import Ember from 'ember';

export default Ember.Component.extend({
  itemsService: Ember.inject.service('items-service'),
  isWide: false,
  displayNoneItem: true,
  className:['detail-author'],
  // classNameBindings: ['item.author::displayNone'],
  item: null, //this comes from outside
  author: null,

  authorVisibility: Ember.computed("author", function() {
    if (this.get("author")) {
      return "";
    }
    return "displayNone";
  }),

  actions: {
    showItems(item) {
      alert(item);
    },
    toggleImageSize() {
      this.toggleProperty('isWide');
    },
    updateTitle: function (items) {
      this.set("title", this.get('title'));
      // let val = Ember.get(items, 'title');
      // console.log(val);
      // this.set(items, 'title', items);
      let val = Ember.get(items, 'title');
      console.log(val);
      // Ember.set(this.get('items').objectAt(items),'title',value)
      // val.save();
    },

    deleteBookItem(itemId) {
      // this.get('itemsService').remove(item);
      // let foundIndex = this.get('item').findIndex((el)=> el.id === itemId);
      // this.get('item').splice(foundIndex, 1);
    }
  }
});

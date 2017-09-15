import Ember from 'ember';

export default Ember.Component.extend({
  itemsService: Ember.inject.service('items-service'),
  isWide: false,
  displayNoneItem: true,
  className:['detail-author'],
  // classNameBindings: ['item.author::displayNone'],
  item: null, //this comes from outside
  author: null,
  price: null,
  isEditing: false,

  authorVisibility: Ember.computed("author", function() {
    if (this.get("author")) {
      return "";
    }
    return "displayNone";
  }),

  priceVisibility: Ember.computed("price", function(){
    if(this.get("price")) {
      return ""
    }
    return "displayNone"
  }),

  actions: {
    showItems(item) {
      alert(item);
    },
    toggleImageSize() {
      this.toggleProperty('isWide');
    },
    updateTitle: function () {
      this.set("item.title", this.get('item.title'));
    },


    deleteBookItem(itemId) {
      //let values  = this.get('items')
      //this.get('itemsService').remove(item);
      // let foundIndex = this.get('item').findIndex((el)=> el.id === itemId);
      // this.get('item').splice(foundIndex, 1);

     let  items = [{name:"Kriss", age: 23}, {name: "Anne", age: 14}];
     items.some(item=>{
       if(item.name === "Anne"){
         items.splice(items.indexOf(item), 1)
       }
     });
      console.log(items)
    }
  }
});

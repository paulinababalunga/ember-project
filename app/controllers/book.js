import Ember from 'ember';

export default Ember.Controller.extend({

  setItems: function () {
    // this.set("items", item);
  }.observes('item').on('init'),

  actions: {
    filterByTitle(param) {
      if(param !==''){
       this.get('store').query('book', {title: param}).then((results)=>{
          return {query: param, results: results};
        });
        // this.set('item')
      }else {
        return this.get('store').findAll('book').then((results)=> {
          return {query:param, results: results};
        });
      }
    }
  },
  title: "List of books",
  // items: Ember.computed('item', function () {
  //   return this.get('item')
  // })
});

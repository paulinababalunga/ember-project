import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByTitle(param) {
      if(param !==''){
        return this.get('store').query('book', {title: param}).then((results)=>{
          return {query: param, results: results};
        });
      }else {
        return this.get('store').findAll('book').then((results)=> {
          return {query:param, results: results};
        });
      }
    }
  },
  title: "List of books"
});

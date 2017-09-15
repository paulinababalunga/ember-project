import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',
  filter: null,

  init(){
    this._super(...arguments);
    this.get('filter')('').then((allResults) => this.set('results', allResults.results))
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let getFilterAction = this.get('filter');
      getFilterAction(filterInputValue).then((resultsObj) => {
        if(resultsObj.query === this.get('value')) {
          this.set('results', resultsObj.results);
        }
      });
    }
  }
});

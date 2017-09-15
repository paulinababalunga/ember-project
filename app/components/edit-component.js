import Ember from 'ember';

export default Ember.Component.extend({
  editing: false,
  actions: {
    save(){
      this.set('editing', true);
    }
  }
});

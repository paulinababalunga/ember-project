import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.modelFor('book').findBy('id', params.id);
  }
});

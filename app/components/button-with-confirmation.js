import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    launchConfirmation() {
      this.set('confirmShown', true);
    },

    submitConfirm() {
      this.get('onConfirm')();
    },
    cancelConfirm() {
      this.set('confirmShown', false);
    }
  }
});

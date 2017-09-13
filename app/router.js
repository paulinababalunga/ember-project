import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('book', function () {
    this.route('edit', {path: 'edit/:book_id'})
  });
  this.route('movie',{path:'/movie'});
  this.route('about');
  this.route('contact');
});

export default Router;

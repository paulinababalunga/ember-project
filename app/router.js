import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('book', function () {
    this.route('edit', {path: '/:id'})
  });
  this.route('movie',{path:'/movie'});
  this.route('about');
  this.route('contact');
  this.route('production');
});

export default Router;

import { test } from 'qunit';
import moduleForAcceptance from 'ember-projects/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | book');

test('visiting /book', function(assert) {
  visit('/book');

  andThen(function() {
    assert.equal(currentURL(), '/book');
  });
});

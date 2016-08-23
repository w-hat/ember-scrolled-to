import Ember from 'ember';
import ScrolledToMixin from 'ember-scrolled-to/mixins/scrolled-to';
import { module, test } from 'qunit';

module('Unit | Mixin | scrolled to');

test('it should work', function(assert) {
  let ScrolledToObject = Ember.Object.extend(ScrolledToMixin);
  let subject = ScrolledToObject.create();
  assert.ok(subject);
});

// TODO Test that scrolledTo is called when a mixed-in component is scrolled to.

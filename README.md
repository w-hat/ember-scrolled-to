# ember-scrolled-to

This addon provides a mixin for calling an arbitrary function a single time
when a component is scrolled to.

## Alternatives

Note that [ember-in-viewport](https://github.com/dockyard/ember-in-viewport) is
a more mature and featureful Ember addon which does roughly the same thing.
Non-Ember alternatives include [scrollin](https://github.com/samccone/scrollin)
and [scrollmonitor](https://github.com/stutrek/scrollMonitor).

## Usage

The callback could be used to lazy-load images of artificially-flavored snacks
or to kick off an animation of an apple being sliced into eight pieces.
The possibilities are endless!

```js
import Ember from 'ember';
import ScrolledTo from 'ember-scrolled-to'

export default Ember.Component.extend(ScrolledTo, {
  scrolledTo() {
    // Your code goes here.  For example:
    this.set('classNames', ['cornucopia']);
  },
});
```

Clearly this addon should have been named `ember-fruit-scroll-up`.

## Installation

* `git clone` this repository
* `npm install`

## Running

* `ember serve`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

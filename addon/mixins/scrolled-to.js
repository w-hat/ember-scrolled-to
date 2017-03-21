import Ember from 'ember';

export default Ember.Mixin.create({
  // TODO Coalesce the scroll event listeners into one.
  // TODO Listen to 'resize' and 'touchmove' events in addition to 'scroll'.
  
  init() {
    this._super(...arguments);
    let self = this;
    let onScroll = function(event) {
      // TODO Unbind onScroll when 'willDestroyElement' is fired instead.
      if (self.get('isDestroyed') || self.get('isDestroying')) {
        Ember.$(window).unbind('scroll', onScroll);
      } else if (self.$) {
        let selfY = self.$().offset().top - Ember.$(window).height();
        let pageY = event.originalEvent.pageY;
        // TODO Add adjustment parameter to fire the callback earlier or later.
        // TODO Test if the component is above the current viewport.
        // TODO Use getBoundingClientRect
        if (pageY > selfY) {
          self.get('scrolledTo').call(self);
          Ember.$(window).unbind('scroll', onScroll);
        }
      }
    };
    Ember.$(window).bind('scroll', onScroll);
  }
});

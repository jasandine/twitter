Twitter.TweetController = Ember.ObjectController.extend({
  isExpanded: false,

  actions: {
    expandTweet: function() {
      this.set('isExpanded', true);
    }
  }
});

Twitter.TweetsController = Ember.Controller.extend({

  actions: {

    createTweet: function() {
      var id = (tweets.length + 1).toString();
      tweets.addObject({
        text: this.newTweet,
        id: id
      });
      this.set('newTweet', '');
    }
  }
});

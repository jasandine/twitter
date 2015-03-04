Twitter.TweetsController = Ember.ArrayController.extend({
  sortAscending: false,
  sortProperties: ['date'],
  itemController: "tweet",

  actions: {

    createTweet: function() {
      var id = (tweets.length + 1).toString();
      tweets.addObject({
        text: this.newTweet,
        id: id,
        date: new Date,
      });

      this.set('newTweet', '');
    }
  }
});

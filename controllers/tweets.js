Twitter.TweetsController = Ember.ArrayController.extend({
  sortAscending: false,
  sortProperties: ['date'],

  actions: {

    createTweet: function() {
      var id = (tweets.length + 1).toString();
      // var date = new Date("YYYY-MM-DD")
      tweets.addObject({
        text: this.newTweet,
        id: id,
        date: new Date
      });

      this.set('newTweet', '');
    }
  }
});

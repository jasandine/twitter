Twitter.TweetController = Ember.ObjectController.extend({
  isExpanded: false,
  arrayController: "tweets",

  actions: {
    expandTweet: function() {
      this.set('isExpanded', true);
    },

    replyToTweet: function() {
      tweets.replies.pushObject({
        text: this.newReply,
        id: id,
        // tweetId: tweet.id
      });
    }
  }
});

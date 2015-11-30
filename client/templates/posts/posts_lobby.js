Template.postsLobby.helpers({
    players: function() {
      return Players.find({lobby: true});
    }
    // choices: function() {
    //   return Choices.find({});
    // }
  });
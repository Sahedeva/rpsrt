Template.postsLobby.rendered = function() {
    Meteor.call('removeActive');
};

Template.postsLobby.helpers({
  players: function() {
    return Players.find({lobby: true});
  },
  isCurrent: function (name) {
  	var currentUserName = Meteor.user().username;
  	return name === currentUserName;
	}
});

Template.postsLobby.events({
	"click .lobby_challengers": function (event) {
		var currentUserName = Meteor.user().username;
		var currentUserId = Meteor.userId();
		var clicked_id = $('.lobby_challengers').attr('id');
		var player = {challenge: 'hidden', accept: 'show', challenger_name: currentUserName, challenger_id: currentUserId};
		var opponent_id = {id: clicked_id}
		Meteor.call('playerLobbyChallengeUpdate', player, opponent_id,function(error, result){
      // display the error to the user and about
      if (error)
        console.log(error)
    });
    var opponent = Players.find(opponent_id).fetch();
    console.log("lobby challenger clicked and opponent clicked something: opponent object: "+opponent);
	},
	"click .game_on": function(event) {
		var click_opponent = $('.yes_no').attr('id');
		var opponent_id = {id: click_opponent};
		Meteor.call('playerGameUpdate', opponent_id, function(error, result){
			if (error)
        console.log(error);
		});
		Router.go('/realtime');
	},
	"click .yes_no": function (event) {
		var selection = $('input[name=yes_no]:checked').val();
		console.log(selection);
		var click_opponent = $('.yes_no').attr('id');
		var opponent_id = {id: click_opponent};		
		if (selection === 'yes') {
			console.log("yes click opponent_id: " + opponent_id);
			Meteor.call('playerActiveUpdate', opponent_id, function(error, result){
      if (error)
        console.log(error);
    	});
    	Router.go('/realtime');
		} else if (selection === 'no') {
		console.log('No click opponent_id '+ opponent_id);
		Meteor.call('playerRejectUpdate', opponent_id,function(error, result){
      if (error)
        console.log(error)
    });
  }
	}
});
if (Meteor.isClient) {
  Template.postsLobby.rendered = function() {
    for (i=0;i<5;i++) {
      var control_audio = "audio_player"+i;
      var audio = document.getElementById(control_audio);
      var control_test = audio.hasAttribute("controls");
      console.log("control_audio: "+control_audio);
      console.log("control_test: "+control_test);
      if (control_test) {
          var start_audio = "#audio_player"+i;
          console.log("start_audio: "+start_audio);
          $(start_audio)[0].play();
      }  
    }
    currentUserId = Meteor.userId();
    console.log("On screen load: "+currentUserId);
    var test = Players.find({'userId': currentUserId}).fetch();
    console.log("On screen load avatar page - Players.find fxn : "+test);
    console.log("On screen load - typeof test: "+ typeof(test));
    console.log("On screen load - test.length: "+ test.length);
    if (test.length==0) {
      console.log("On screen load avatar page - should only get here the first time you select an avatar");
      Meteor.call('initializePlayer');
    }
    console.log("should hit this to make active false");
    Meteor.call('removeActive');
  }
// Template.postsLobby.rendered = function() {
//     Meteor.call('removeActive');
// };

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
}

if (Meteor.isServer) {
  Meteor.methods({
    'initializePlayer': function(){
      var player = {initialize: true};
      Meteor.call('playerInsert', player, function (error, result){
        if (error)
          console.log(error)
      });
    }
  });
}

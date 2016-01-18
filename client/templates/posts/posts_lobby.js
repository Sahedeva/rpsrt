if (Meteor.isClient) {
  Template.postsLobby.rendered = function() {
    $('.container').css('background-image', 'url(/background_images/samurai.jpg');
    for (i=0;i<12;i++) {
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
    console.log("should hit this to make active false");
    Meteor.call('removeActive');
    Tracker.autorun(function(){
      var currentUserId = Meteor.userId();
      console.log(currentUserId);
      var player = Players.find({userId: currentUserId}).fetch();
      var checkActive = player[0]['active'];
      console.log("checkActive"+checkActive);
      if (checkActive == true) {
        console.log("checkActive is true - reroute to human");
        Router.go('/human');
      }
    }); 
  }

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
    	// Router.go('/human');
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

Players = new Mongo.Collection('players');

Meteor.methods({
	playerInsert: function(playerAttributes) {
		check(Meteor.userId(), String);
		check(playerAttributes, Match.Any)
		// check(playerAttributes, {
		// 	user_name: String,
		// 	user_id: String,
		// 	avatar_url: String,
		// 	rock_url: String,
		// 	paper_url: String,
		// 	scissors_url: String,
		// 	win_loss_tie: String,

		// });

		var user = Meteor.user();
		var player = _.extend(playerAttributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date()
		});

		var playerId = Players.insert(player);

		return {
			_id: playerId
		};
	},
	initializeHal: function() {
		// check(Meteor.userId(), String);
		Players.insert({
			author: "Hal-9000",
			avatar_url: "/rps_images/femalejedi.jpg",
			hal: "yes",
			lobby: false,
			win: 0,
			loss: 0,
			tie: 0,
			wlt: "",
			player: "player2",
			rock_class: "rps_show",
			rock_url: "/rps_images/femalerock.jpg",
			paper_class: "rps_show",
			paper_url: "/rps_images/femalepaper.jpg",	
			scissors_class: "rps_show",
			scissors_url: "/rps_images/femalescissors.jpg",
			computer: true
		});
	},
	computerUpdate: function() {
		check(Meteor.userId(), String);
		console.log("hitting computerUpdate");
		var currentUserId = Meteor.userId();
		Players.update({'userId': currentUserId}, {$set: {computer: true, player: 'player1', ready_class: 'countdown_show', countone_class: 'countdown_none', counttwo_class: 'countdown_none', countthree_class: 'countdown_none', go_class: 'countdown_none', win_class: 'countdown_none', lose_class: 'countdown_none', tie_class: 'countdown_none'} });
	},
	removeActive: function() {
		check(Meteor.userId(), String),
		console.log("hitting removeActive");
		var currentUserId = Meteor.userId();
		Players.update({'userId': currentUserId}, {
  $set: {active: false, computer: false} });
	},
	removeLobbyActive: function() {
		check(Meteor.userId(), String),
		console.log("hitting removeLobbyActive");
		var currentUserId = Meteor.userId();
		Players.update({'userId': currentUserId}, {
  $set: {active: false, lobby: false, computer: false} });
	},
	realtimeGameUpdate: function(changes, game_id) {
		check(Meteor.userId(), String);
		check(game_id, Match.Any);
		check(changes, Match.Any);
		console.log("hitting realtimeGameUpdate");
		console.log("Realtime game update meteor call: changes: "+JSON.stringify(changes));
		var id = game_id['id'];
		console.log("id: "+id);
		Players.update(id, {$set: changes});
	},
	playerGameUpdate: function(opponent_id) {
		check(Meteor.userId(), String);
		check(opponent_id, Match.Any);
		var opponentId = opponent_id['id'];
		var currentUserId = Meteor.userId();
		console.log("Active update opponent_id: " + opponentId);
		console.log("Active update currentUserId: " + currentUserId);
		Players.update({'userId': currentUserId}, {
  $set: {active: true, player: "player1", lobby: false, challenge: "show", accept: "hidden", challenger_name: "", challenger_id: ""} });
		// Players.update({'userId': opponentId}, {
  // $set: {active: true, player: "player1", lobby: false, challenge: "show", accept: "hidden", challenger_name: "", challenger_id: ""} });
	},
	playerRejectUpdate: function(opponent_id) {
		check(Meteor.userId(), String);
		check(opponent_id, Match.Any);
		var opponentId = opponent_id['id'];
		var currentUserId = Meteor.userId();
		var challenger_name = Meteor.user().username;
		console.log("Active update opponent_id: " + opponentId);
		console.log("Active update currentUserId: " + currentUserId);
		Players.update({'userId': currentUserId}, {
  $set: {challenge: "show", accept: "hidden", challenger_name: "", challenger_id: ""} });
		Players.update({'userId': opponentId}, {
  $set: {reject: "show", challenger_name: challenger_name} });
	},
	playerActiveUpdate: function(opponent_id) {
		check(Meteor.userId(), String);
		check(opponent_id, Match.Any);
		var opponentId = opponent_id['id'];
		var currentUserId = Meteor.userId();
		var challenger_name = Meteor.user().username;
		console.log("Active update opponent_id: " + opponentId);
		console.log("Active update currentUserId: " + currentUserId);
		Players.update({'userId': currentUserId}, {
  $set: {active: true, player: "player2", lobby: false, challenge: "show", accept: "hidden", challenger_name: "", challenger_id: ""} });
		Players.update({'userId': opponentId}, {
  $set: {game: "show", challenger_name: challenger_name} });
	},
	playerLobbyChallengeUpdate: function(playerAttributes, opponent_id) {
		check(Meteor.userId(), String);
		check(playerAttributes, Match.Any);
		check(opponent_id, Match.Any);
		console.log("Meteor method(challengeUpdate) - server: playerAttributes- " + playerAttributes+ " and opponent_id- " + opponent_id);
		console.log("Opponent_id: " + opponent_id['id']);
		console.log("PlayerAttributes(challenge): " +playerAttributes['challenge']);
		console.log("PlayerAttributes(accept): " +playerAttributes['accept']);
		console.log("PlayerAttributes(challenger_name): " +playerAttributes['challenger_name']);
		console.log("PlayerAttributes(challenger_id): " + playerAttributes['challenger_id']);
		console.log("PlayerAttributes(reject): " + playerAttributes['reject']);
		var opponentId = opponent_id['id'];
		console.log("OpponentID: " + opponentId);
		Players.update(opponentId, {
  $set: playerAttributes});
	},
	playerLobbyUpdate: function(playerAttributes) {
		check(Meteor.userId(), String);
		check(playerAttributes, Match.Any);
		console.log("Avatar player attributes from meteor method - server: " + playerAttributes);
		console.log(playerAttributes['lobby']);
		var currentUserId = Meteor.userId();
		Players.update({'userId': currentUserId}, {
  $set: playerAttributes});
	},
	playerAvatarUpdate: function(playerAttributes) {
		check(Meteor.userId(), String);
		check(playerAttributes, Match.Any);
		console.log("Avatar player attributes from meteor method - server: " + playerAttributes);
		console.log(playerAttributes['avatar_url']);
		var currentUserId = Meteor.userId();
		Players.update({'userId': currentUserId}, {
  $set: playerAttributes});
	},
	playerRockUpdate: function(playerAttributes) {
		check(Meteor.userId(), String);
		check(playerAttributes, Match.Any);
		console.log("Rock player attributes from meteor method - server: " + playerAttributes);
		console.log(playerAttributes['rock_url']);
		var currentUserId = Meteor.userId();
		Players.update({'userId': currentUserId}, {
  $set: playerAttributes});
	},
	playerPaperUpdate: function(playerAttributes) {
		check(Meteor.userId(), String);
		check(playerAttributes, Match.Any);
		console.log("Paper player attributes from meteor method - server: " + playerAttributes);
		console.log(playerAttributes['paper_url']);
		var currentUserId = Meteor.userId();
		Players.update({'userId': currentUserId}, {
  $set: playerAttributes});
	},
	playerScissorsUpdate: function(playerAttributes) {
		check(Meteor.userId(), String);
		check(playerAttributes, Match.Any);
		console.log("Scissors player attributes from meteor method - server: " + playerAttributes);
		console.log(playerAttributes['scissors_url']);
		var currentUserId = Meteor.userId();
		Players.update({'userId': currentUserId}, {
  $set: playerAttributes});
	}
	// computerUpdate: function(computerAttributes) {
	// 	check(Meteor.userId(), Match.Any);
	// 	check(computerAttributes, Match.Any);
	// 	Players.update({'author': "Hal-9000"}, {
 //  $set: computerAttributes});
	// }
});

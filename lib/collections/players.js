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

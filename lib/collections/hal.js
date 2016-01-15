// Hal = new Mongo.Collection('hal');

// Meteor.methods({
// 	initializeHal: function(halAttributes) {
// 		check(halAttributes, Match.Any);
// 		console.log("hitting initializeHal");
// 		var hal = _.extend(halAttributes, {
// 			author: "Hal-9000",
// 			avatar_url: "/rps_images/femalejedi.jpg",
// 			submitted: new Date(),
// 			userId: 42,
// 			hal: "yes",
// 			lobby: false,
// 			win: 0,
// 			loss: 0,
// 			tie: 0,
// 			wlt: "",
// 			player: "player2",
// 			rock_class: "rps_show",
// 			rock_url: "/rps_images/femalerock.jpg",
// 			paper_class: "rps_show",
// 			paper_url: "/rps_images/femalepaper.jpg",	
// 			scissors_class: "rps_show",
// 			scissors_url: "/rps_images/femalescissors.jpg"
// 		});
// 		var halId = Hal.insert(hal);
// 			return {
// 				_id: halId
// 			};
// 	},
// 	halUpdate: function(changes, game_id) {
// 		check(changes, Match.Any);
// 		console.log("hitting halUpdate");
// 		console.log("Hal update meteor call: changes: "+JSON.stringify(changes));
// 		var id = game_id['id'];
// 		console.log("id: "+id);
// 		Hal.update(id, {$set: changes});
// 	}
// });
Meteor.publish('players', function() {
 return Players.find();
});

// Meteor.publish('hal', function() {
// 	return Hal.find();
// });

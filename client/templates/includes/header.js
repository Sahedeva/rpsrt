// if (Meteor.isClient) {
// 	Template.header.rendered = function() {
// 		var currentUserId = Meteor.userId();
// 	  console.log("On header screen load: "+currentUserId);
// 	  console.log("On header screen load typeof(currentUserId): "+typeof(currentUserId));
// 	  if (currentUserId==null) {
// 	  	console.log("Should get here if not signed in!");	
// 	  } else {
// 	  	console.log("Should get here if signed in!");
// 	  // 	var currentUser = Meteor.user();
// 	  // 	console.log("CurrentUser: "+JSON.stringify(currentUser));
// 			// var currentUsername = currentUser.username;
// 			// console.log("On header screen load: "+currentUsername);
// 			console.log("CurrentUserId: "+currentUserId);
// 	  	var test = Players.find({'userId': currentUserId}).fetch();
// 		  console.log("On header screen load avatar page - Players.find fxn : "+test);
// 		  console.log("On header screen load - typeof test: "+ typeof(test));
// 		  console.log("On header screen load - test.length: "+ test.length);
// 		  if (test.length==0) {
// 		    console.log("On header screen - should only get here the first time you sign in");
// 		    Meteor.call('initializePlayer');
// 		  }
// 	  }
//   // console.log("On header screen load currentUserId.length: "+currentUserId.length);
// 	}
// }


// if (Meteor.isServer) {
//   Meteor.methods({
// 		'initializePlayer': function(){
//     var player = {initialize: true};
//     Meteor.call('playerInsert', player, function (error, result){
//       if (error)
//         console.log(error)
//     });
//   	}
//   });
// }
//   
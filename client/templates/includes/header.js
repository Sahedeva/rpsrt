Template.header.rendered = function() {
	var currentUserId = Meteor.userId();
	var currentUser = Meteor.user();
	var currentUsername = currentUser.username;
  console.log("On header screen load: "+currentUserId);
  console.log("On header screen load: "+currentUsername);
  console.log("On header screen load typeof(currentUserId): "+typeof(currentUserId));
  if (currentUserId==null) {
  	console.log("Should get here if not signed in!");
  	
  } else {
  	console.log("Should get here if signed in!");
  	var test = Players.find({'userId': currentUserId}).fetch();
	  console.log("On header screen load avatar page - Players.find fxn : "+test);
	  console.log("On header screen load - typeof test: "+ typeof(test));
	  console.log("On header screen load - test.length: "+ test.length);
	  if (test.length==0) {
	    console.log("On header screen - should only get here the first time you sign in");
	    Meteor.call('initializePlayers');
	  }
  }
  // console.log("On header screen load currentUserId.length: "+currentUserId.length);
}
  
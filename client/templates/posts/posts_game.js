if (Meteor.isClient) {
	Meteor.startup(function(){
		Template.postsGame.events({
			"click #rock": function (event) {
				console.log("you clicked Rock");
				document.getElementById('rock').style.marginTop = '75px';
				document.getElementById('paper').style.display = 'none';
        document.getElementById('scissors').style.visibility = 'hidden';
			},
			"click #paper": function (event) {
				console.log("you clicked Paper");
				document.getElementById('rock').style.visibility = 'hidden';
        document.getElementById('scissors').style.visibility = 'hidden';
			},
			"click #scissors": function (event) {
				console.log("you clicked Scissors");
				document.getElementById('rock').style.visibility = 'hidden';
        document.getElementById('paper').style.display = 'none';
			}
		});
	});
}
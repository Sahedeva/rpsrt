if (Meteor.isClient) {
	Meteor.startup(function(){
		var comp_random = Math.floor(Math.random()*3);
		setTimeout(function(){ 
			document.getElementById('countthree').style.display = 'none';
	    document.getElementById('go').style.display = '';
	  }, 4000);
		setTimeout(function(){ 
			document.getElementById('counttwo').style.display = 'none';
	    document.getElementById('countthree').style.display = '';
		}, 3000);
		setTimeout(function(){
			document.getElementById('countone').style.display = 'none';
	    document.getElementById('counttwo').style.display = '';
		}, 2000);
		setTimeout(function(){ 
			document.getElementById('ready').style.display = 'none';
	    document.getElementById('countone').style.display = '';
		}, 1000);
		Template.postsGame.events({
			"click #rock": function (event) {
				var name = $(".player_name").attr("id");
				console.log("you clicked Rock");
				document.getElementById('rock').style.marginTop = '75px';
				document.getElementById('rock').style.border = '4px solid red';
				document.getElementById('rock').style.padding = '0px';
				document.getElementById('paper').style.display = 'none';
        document.getElementById('scissors').style.visibility = 'hidden';
        console.log(name);
        if (name === "Mike Dang" || comp_random == 1) {
	        console.log("Mike, you lose!");
	        console.log(comp_random);
	        document.getElementById('go').style.display = 'none';
	        document.getElementById('loser').style.display = '';
	        document.getElementById('opp_paper').style.border = '4px solid red';
					document.getElementById('opp_paper').style.padding = '0px';
					document.getElementById('opp_rock').style.visibility = 'hidden';
	        document.getElementById('opp_scissors').style.visibility = 'hidden';
      	} else if (comp_random == 2) {
      		console.log("You Win!");
      		console.log(comp_random);
      		document.getElementById('go').style.display = 'none';
	        document.getElementById('winner').style.display = '';
	        document.getElementById('opp_scissors').style.border = '4px solid red';
					document.getElementById('opp_scissors').style.padding = '0px';
					document.getElementById('opp_rock').style.visibility = 'hidden';
	        document.getElementById('opp_paper').style.display = 'none';

      	} else {
      		console.log("You tied.");
      		console.log(comp_random);
      		document.getElementById('go').style.display = 'none';
	        document.getElementById('tie').style.display = '';
	        document.getElementById('opp_rock').style.marginTop = '75px';
					document.getElementById('opp_rock').style.border = '4px solid red';
					document.getElementById('opp_rock').style.padding = '0px';
					document.getElementById('opp_paper').style.display = 'none';
	        document.getElementById('opp_scissors').style.visibility = 'hidden';
      	}
			},
			"click #paper": function (event) {
				var name = $(".player_name").attr("id");
				console.log("you clicked Paper");
				document.getElementById('paper').style.border = '4px solid red';
				document.getElementById('paper').style.padding = '0px';
				document.getElementById('rock').style.visibility = 'hidden';
        document.getElementById('scissors').style.visibility = 'hidden';
        console.log(name);
        if (name === "Mike Dang" || comp_random == 2) {
	        console.log("Mike, you lose!");
	        console.log(comp_random);
	        document.getElementById('go').style.display = 'none';
	        document.getElementById('loser').style.display = '';
	        document.getElementById('opp_scissors').style.border = '4px solid red';
					document.getElementById('opp_scissors').style.padding = '0px';
					document.getElementById('opp_rock').style.visibility = 'hidden';
	        document.getElementById('opp_paper').style.display = 'none';
	        } else if (comp_random == 0) {
	      		console.log("You Win!");
	      		console.log(comp_random);
	      		document.getElementById('go').style.display = 'none';
		        document.getElementById('winner').style.display = '';
		        document.getElementById('opp_rock').style.marginTop = '75px';
						document.getElementById('opp_rock').style.border = '4px solid red';
						document.getElementById('opp_rock').style.padding = '0px';
						document.getElementById('opp_paper').style.display = 'none';
		        document.getElementById('opp_scissors').style.visibility = 'hidden';	
      		} else {
	      		console.log("You tied.");
	      		console.log(comp_random);
	      		document.getElementById('go').style.display = 'none';
		        document.getElementById('tie').style.display = '';
		        document.getElementById('opp_paper').style.border = '4px solid red';
						document.getElementById('opp_paper').style.padding = '0px';
						document.getElementById('opp_rock').style.visibility = 'hidden';
		        document.getElementById('opp_scissors').style.visibility = 'hidden';
      	}
			},
			"click #scissors": function (event) {
				var name = $(".player_name").attr("id");
				console.log("you clicked Scissors");
				document.getElementById('scissors').style.border = '4px solid red';
				document.getElementById('scissors').style.padding = '0px';
				document.getElementById('rock').style.visibility = 'hidden';
        document.getElementById('paper').style.display = 'none';
        console.log(name);
        if (name === "Mike Dang" || comp_random == 0) {
	        console.log("Mike, you lose!");
	        console.log(comp_random);
	        document.getElementById('go').style.display = 'none';
	        document.getElementById('loser').style.display = '';
	        document.getElementById('opp_rock').style.marginTop = '75px';
					document.getElementById('opp_rock').style.border = '4px solid red';
					document.getElementById('opp_rock').style.padding = '0px';
					document.getElementById('opp_paper').style.display = 'none';
	        document.getElementById('opp_scissors').style.visibility = 'hidden';
	        } else if (comp_random == 1) {
	      		console.log("You Win!");
	      		console.log(comp_random);
	      		document.getElementById('go').style.display = 'none';
		        document.getElementById('winner').style.display = '';
		        document.getElementById('opp_paper').style.border = '4px solid red';
						document.getElementById('opp_paper').style.padding = '0px';
						document.getElementById('opp_rock').style.visibility = 'hidden';
		        document.getElementById('opp_scissors').style.visibility = 'hidden';
		      } else {
	      		console.log("You tied.");
	      		console.log(comp_random);
	      		document.getElementById('go').style.display = 'none';
		        document.getElementById('loser').style.display = '';
		        document.getElementById('opp_scissors').style.border = '4px solid red';
						document.getElementById('opp_scissors').style.padding = '0px';
						document.getElementById('opp_rock').style.visibility = 'hidden';
		        document.getElementById('opp_paper').style.display = 'none';
		      }
			},
			"click #play_again": function (event) {
				location.reload();
			}
		});
	});
}
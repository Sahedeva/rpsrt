if (Meteor.isClient) {
	Template.postsRealtime.helpers({
    players: function() {
      return Players.find({active: true});
    }
    // choices: function() {
    //   return Choices.find({});
    // }
  });

  Template.postsRealtime.events({
    "click #player1rock": function (event) {
      $("#player1rock").css("pointer-events", "none");
      console.log("Player one chose rock");
      var id = $("#player1scissors").attr('alt');
      var game_id = {id: id};
      var changes = {rock_class: 'rps_red', scissors_class: 'rps_hidden', paper_class: 'rps_hidden', choice: 'rock'};
  		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
	      if (error)
	        console.log(error)
	    	});    
      setTimeout(function(){ 
        var choice2 = $("#player2").attr('alt');
        if (choice2 === "paper") {
          var player1loss = parseInt($("#player1loss").val());
          var loss = player1loss += 1;
          console.log("Player two chose paper - you lose");
          var changes = {wlt: 'lose', loss: loss};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        } else if (choice2 === "rock") {
          var player1tie = parseInt($("#player1tie").val());
          var tie = player1tie += 1;
          console.log("Player two chose rock - you tie");
          var changes = {wlt: 'tie', tie: tie};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        } else {
          var player1win = parseInt($("#player1win").val());
          var win = player1win += 1;
          console.log("Player two chose scissors or nothing - you win");
          var changes = {wlt: 'win', win: win};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        }
      }, 5000);
    },
    "click #player1paper": function (event) {
      $("#player1paper").css("pointer-events", "none");
      console.log("Player one chose paper");
      var id = $("#player1scissors").attr('alt');
      var game_id = {id: id};
      var changes =  {rock_class: 'rps_hidden', scissors_class: 'rps_hidden', paper_class: 'rps_red', choice: 'paper'};
  		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
	      if (error)
	        console.log(error)
	    	});    
      setTimeout(function(){ 
        var choice2 = $("#player2").attr('alt');
        if (choice2 === "scissors") {
          var player1loss = parseInt($("#player1loss").val());
          var loss = player1loss += 1;
          console.log("Player two chose scissors - you lose");
          var changes = {wlt: 'lose', loss: loss};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        } else if (choice2 === "paper") {
          var player1tie = parseInt($("#player1tie").val());
          var tie = player1tie += 1;
          console.log("Player two chose paper - you tie");
          var changes = {wlt: 'tie', tie: tie};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        } else {
          var player1win = parseInt($("#player1win").val());
          var win = player1win += 1;
          console.log("Player two chose rock or nothing - you win");
          var changes = {wlt: 'win', win: win};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        }
      }, 5000);
    },
    "click #player1scissors": function (event) {
      $("#player1scissors").css("pointer-events", "none");
      console.log("Player one chose scissors");
      var id = $("#player1scissors").attr('alt');
      var game_id = {id: id};
      var changes = {rock_class: 'rps_hidden', scissors_class: 'rps_red', paper_class: 'rps_hidden', choice: 'scissors'};
      Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
      if (error)
        console.log(error)
    	});    
      setTimeout(function(){ 
        var choice2 = $("#player2").attr('alt');
        if (choice2 === "rock") {
          var player1loss = parseInt($("#player1loss").val());
          var loss = player1loss += 1;         
          console.log("Player two chose rock - you lose");
          var changes = {wlt: 'lose', loss: loss};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        } else if (choice2 === "scissors") {
          var player1tie = parseInt($("#player1tie").val());
          var tie = player1tie += 1;
          console.log("Player two chose scissors - you tie");
          var changes = {wlt: 'tie', tie: tie};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        } else {
          var player1win = parseInt($("#player1win").val());
          var win = player1win += 1;
          console.log("Player two chose paper or nothing - you win");
          var changes = {wlt: 'win', win: win};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        }
      }, 5000);
    },
    "click #player2rock": function (event) {
      console.log("You chose rock");
      $("#player2rock").css("pointer-events", "none");
      var id = $("#player2scissors").attr('alt');
      var game_id = {id: id};    
      var changes = {rock_class: 'rps_red', scissors_class: 'rps_hidden', paper_class: 'rps_hidden', choice: 'rock'};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
      setTimeout(function(){ 
        var choice1 = $("#player1").attr('alt');
        if (choice1 === "paper") {
          var player2loss = parseInt($("#player2loss").val());
          var loss = player2loss += 1;
          console.log("Opponent chose paper - you lose");
          var changes = {wlt: 'lose', loss: loss};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        } else if (choice1 === "rock") {
          var player2tie = parseInt($("#player2tie").val());
          var tie = player2tie += 1;
          console.log("Opponent chose rock - you tie");
          var changes = {wlt: 'tie', tie: tie};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        } else {
          var player2win = parseInt($("#player2win").val());
          var win = player2win += 1;
          console.log("Opponent chose scissors or nothing - you win");
          var changes = {wlt: 'win', win: win};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        }
      }, 5000);
    },
    "click #player2paper": function (event) {
      console.log("Player two chose paper");
      $("#player2paper").css("pointer-events", "none");
      var id = $("#player2scissors").attr('alt');
      var game_id = {id: id};  
      var changes = {rock_class: 'rps_hidden', scissors_class: 'rps_hidden', paper_class: 'rps_red', choice: 'paper'};
  		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
	      if (error)
	        console.log(error)
	    	});    
      setTimeout(function(){ 
        var choice1 = $("#player1").attr('alt');
        if (choice1 === "scissors") {
          var player2loss = parseInt($("#player2loss").val());
          var loss = player2loss += 1;
          console.log("Player one chose scissors - you lose");
          var changes = {wlt: 'lose', loss: loss};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        } else if (choice1 === "paper") {
          var player2tie = parseInt($("#player2tie").val());
          var tie = player2tie += 1;
          console.log("Player one chose paper - you tie");
          var changes = {wlt: 'tie', tie: tie};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        } else {
          var player2win = parseInt($("#player2win").val());
          var win = player2win += 1;
          console.log("Player one chose rock or nothing - you win");
          var changes = {wlt: 'win', win: win};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        }
      }, 5000);
    },
    "click #player2scissors": function (event) {
      console.log("Player two chose scissors");
      $("#player2scissors").css("pointer-events", "none");
      var id = $("#player2scissors").attr('alt');
      var game_id = {id: id};      
      var changes = {rock_class: 'rps_hidden', scissors_class: 'rps_red', paper_class: 'rps_hidden', choice: 'scissors'};
  		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
	      if (error)
	        console.log(error)
	    	});    
      setTimeout(function(){ 
        var choice1 = $("#player1").attr('alt');
        if (choice1 === "rock") {
          var player2loss = parseInt($("#player2loss").val());
          var loss = player2loss += 1;
          console.log("Player one chose rock - you lose");
          var changes = {wlt: 'lose', loss: loss};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        } else if (choice1 === "scissors") {
          var player2tie = parseInt($("#player2tie").val());
          var tie = player2tie += 1;
          console.log("Player one chose scissors - you tie");
          var changes = {wlt: 'tie', tie: tie};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        } else {
          var player2win = parseInt($("#player2win").val());
          var win = player2win += 1;
          console.log("Player one chose paper or nothing - you win");
          var changes = {wlt: 'win', win: win};
      		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
			      if (error)
			        console.log(error)
			    	});    
        }
      }, 5000);
    },
    "click #another_game": function(event) {
      var id1 = $("#player1scissors").attr('alt');
      var game_id1 = {id: id1};
      var id2 = $("#player2scissors").attr('alt');
      var game_id2 = {id: id2};
      $("#player1rock").css("pointer-events", "auto");
      $("#player1paper").css("pointer-events", "auto");
      $("#player1scissors").css("pointer-events", "auto");
      $("#player2rock").css("pointer-events", "auto");
      $("#player2paper").css("pointer-events", "auto");
      $("#player2scissors").css("pointer-events", "auto");
      var changes = {rock_class: 'rps_show', scissors_class: 'rps_show', paper_class: 'rps_show', wlt: '', choice: ''};
  		Meteor.call('realtimeGameUpdate', changes, game_id1, function(error, result){
	      if (error)
	        console.log(error)
	    	});    
      var changes = {rock_class: 'rps_show', scissors_class: 'rps_show', paper_class: 'rps_show', wlt: '', choice: ''};
  		Meteor.call('realtimeGameUpdate', changes, game_id2, function(error, result){
	      if (error)
	        console.log(error)
	    	});    
    }
  });
}

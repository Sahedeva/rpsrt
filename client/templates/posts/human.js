if (Meteor.isClient) {
  function countdown_timer() {
    var id = $("#player1rock").attr('alt');
    var game_id = {id: id};
    var changes = {win_class: 'countdown_none',lose_class: 'countdown_none',tie_class: 'countdown_none',ready_class: 'countdown_show'};
    Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
        if (error)
          console.log(error)
    }); 
    setTimeout(function(){ 
      var changes = {countthree_class: 'countdown_none', go_class: 'countdown_show'};
      console.log('5 seconds should have elapsed');
      console.log('changes: '+JSON.stringify(changes));
      console.log('game_id: '+JSON.stringify(game_id));
      Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
        if (error)
          console.log(error)
        });  
      $("#player1rock").css("pointer-events", "auto");
      $("#player1paper").css("pointer-events", "auto");
      $("#player1scissors").css("pointer-events", "auto");
      setTimeout(function(){
        $("#player1rock").css("pointer-events", "none");
    		$("#player1paper").css("pointer-events", "none");
    		$("#player1scissors").css("pointer-events", "none");
    		var choice1 = $('#player1').attr('alt');
    		var choice2 = $('#player2').attr('alt');  
    		if (choice1 === "rock") {  		 
		      if (choice2 === "paper") {
		        var player1loss = parseInt($("#player1loss").val());
		        var loss = player1loss += 1;
		        console.log("Player two chose paper - you lose");
		        var changes = {wlt: 'lose', loss: loss, go_class: 'countdown_none', lose_class: 'countdown_show', another: 'show'};
		    		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
				      if (error)
				        console.log(error)
				    	});
		      } else if (choice2 === "rock") {
		        var player1tie = parseInt($("#player1tie").val());
		        var tie = player1tie += 1;
		        console.log("Player two chose rock - you tie");
		        var changes = {wlt: 'tie', tie: tie, go_class: 'countdown_none', tie_class: 'countdown_show', another: 'show'};
		    		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
				      if (error)
				        console.log(error)
				    	});
		      } else if (choice2 === "scissors") {
		        var player1win = parseInt($("#player1win").val());
		        var win = player1win += 1;
		        console.log("Player two chose scissors or nothing - you win");
		        var changes = {wlt: 'win', win: win, go_class: 'countdown_none', win_class: 'countdown_show', another: 'show'};
		    		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
				      if (error)
				        console.log(error)
				    	});
		      }
		      // $('#another_game').css('display', 'inline');
		    } else if (choice1 === "paper") {
		      if (choice2 === "scissors") {
		        var player1loss = parseInt($("#player1loss").val());
		        var loss = player1loss += 1;
		        console.log("Player two chose scissors - you lose");
		        var changes = {wlt: 'lose', loss: loss, go_class: 'countdown_none', lose_class: 'countdown_show', another: 'show'};
		    		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
				      if (error)
				        console.log(error)
				    	});
		      } else if (choice2 === "paper") {
		        var player1tie = parseInt($("#player1tie").val());
		        var tie = player1tie += 1;
		        console.log("Player two chose paper - you tie");
		        var changes = {wlt: 'tie', tie: tie, go_class: 'countdown_none', tie_class: 'countdown_show', another: 'show'};
		    		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
				      if (error)
				        console.log(error)
				    	});
		      } else if (choice2 === "rock") {
		        var player1win = parseInt($("#player1win").val());
		        var win = player1win += 1;
		        console.log("Player two chose rock or nothing - you win");
		        var changes = {wlt: 'win', win: win, go_class: 'countdown_none', win_class: 'countdown_show', another: 'show'};
		    		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
				      if (error)
				        console.log(error)
				    	});
		      }
		      // $('#another_game').css('display', 'inline');
		    } else if (choice2 === "scissors") { 
		      if (choice2 === "rock") {
		        var player1loss = parseInt($("#player1loss").val());
		        var loss = player1loss += 1;         
		        console.log("Player two chose rock - you lose");
		        var changes = {wlt: 'lose', loss: loss, go_class: 'countdown_none', lose_class: 'countdown_show', another: 'show'};
		    		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
				      if (error)
				        console.log(error)
				    	}); 
		      } else if (choice2 === "scissors") {
		        var player1tie = parseInt($("#player1tie").val());
		        var tie = player1tie += 1;
		        console.log("Player two chose scissors - you tie");
		        var changes = {wlt: 'tie', tie: tie, go_class: 'countdown_none', tie_class: 'countdown_show', another: 'show'};
		    		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
				      if (error)
				        console.log(error)
				    	}); 
		      } else if (choice2 === "paper") {
		        var player1win = parseInt($("#player1win").val());
		        var win = player1win += 1;
		        console.log("Player two chose paper or nothing - you win");
		        var changes = {wlt: 'win', win: win, go_class: 'countdown_none', win_class: 'countdown_show', another: 'show'};
		    		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
				      if (error)
				        console.log(error)
				    	});
		      }
		      // $('#another_game').css('display', 'inline');
		    } else {
		    	if (choice2 ==="rock") {
		    		console.log("You chose nothing and opponent chose rock - you lose");
		    		var changes = {wlt: 'lose', loss: loss, go_class: 'countdown_none', lose_class: 'countdown_show', another: 'show'};
		    		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
				      if (error)
				        console.log(error)
				    	});
		    		// $('#another_game').css('display', 'inline');
		    	} else if (choice2 ==="paper") {
		    		console.log("You chose nothing and opponent chose paper - you lose");
		    		var changes = {wlt: 'lose', loss: loss, go_class: 'countdown_none', lose_class: 'countdown_show', another: 'show'};
		    		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
				      if (error)
				        console.log(error)
				    	});
				    $('#another_game').css('display', 'inline'); 
		    	} else if (choice2 ==="scissors") {
		    		console.log("You chose nothing and opponent chose scissors - you lose");
		    		var changes = {wlt: 'lose', loss: loss, go_class: 'countdown_none', lose_class: 'countdown_show', another: 'show'};
		    		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
				      if (error)
				        console.log(error)
				    	});
				    // $('#another_game').css('display', 'inline'); 
		    	} else {
		    		console.log("You chose nothing and opponent chose nothing - you tie");
		    		var changes = {wlt: 'tie', tie: tie, go_class: 'countdown_none', tie_class: 'countdown_show', another: 'show'};
		    		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
				      if (error)
				        console.log(error)
				    	});
				    // $('#another_game').css('display', 'inline'); 
		    	}
		    }
		  }, 1000);
    }, 5000);
    setTimeout(function(){ 
      var changes = {counttwo_class: 'countdown_none', countthree_class: 'countdown_show'};
      console.log('4 seconds should have elapsed');
      console.log('changes: '+changes);
      console.log('game_id: '+game_id);
      Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
        if (error)
          console.log(error)
        });   
    }, 4000);
    setTimeout(function(){
      var changes = {countone_class: 'countdown_none', counttwo_class: 'countdown_show'};
      console.log('3 seconds should have elapsed');
      console.log('changes: '+changes);
      console.log('game_id: '+game_id);
      Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
        if (error)
          console.log(error)
        });   
    }, 3000);
    setTimeout(function(){ 
      var changes = {ready_class: 'countdown_none', countone_class: 'countdown_show'};
      console.log('2 seconds should have elapsed');
      console.log('changes: '+changes);
      console.log('game_id: '+game_id);
      Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
        if (error)
          console.log(error)
        });   
    }, 2000);
  };
  
  Template.human.rendered = function() {
    $('.container').css('background-image', 'url(/background_images/battleInHeaven.jpg');
    for (i=0;i<7;i++) {
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
    console.log("should hit this for humanUpdate");
    Meteor.call('humanUpdate');
    $("#player1rock").css("pointer-events", "none");
    $("#player1paper").css("pointer-events", "none");
    $("#player1scissors").css("pointer-events", "none");
    $("#player2rock").css("pointer-events", "none");
    $("#player2paper").css("pointer-events", "none");
    $("#player2scissors").css("pointer-events", "none");
    setTimeout(function(){
    	console.log('waiting 2 seconds to allow for both players to hit game room');
    }, 2000);
    countdown_timer();
  };

  Template.human.events({
    "click #player1rock": function (event) {
      $("#player1rock").css("pointer-events", "none");
      $("#player1paper").css("pointer-events", "none");
      $("#player1scissors").css("pointer-events", "none");
      console.log("Player one chose rock");
      var id = $("#player1rock").attr('alt');
      var game_id = {id: id};
      var changes = {rock_class: 'rps_red rps_rock', scissors_class: 'rps_hidden', paper_class: 'rps_none', choice: 'rock'};
  		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
	      if (error)
	        console.log(error)
	    	});
  	},
    "click #player1paper": function (event) {
      $("#player1paper").css("pointer-events", "none");
      console.log("Player one chose paper");
      var id = $("#player1scissors").attr('alt');
      var game_id = {id: id};
      var changes =  {rock_class: 'rps_hidden', scissors_class: 'rps_hidden', paper_class: 'rps_red', choice: 'paper', clicked: 'yes'};
  		Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
	      if (error)
	        console.log(error)
	    	});
	  },    
    "click #player1scissors": function (event) {
      $("#player1scissors").css("pointer-events", "none");
      console.log("Player one chose scissors");
      var id = $("#player1scissors").attr('alt');
      var game_id = {id: id};
      var changes = {rock_class: 'rps_hidden', scissors_class: 'rps_red', paper_class: 'rps_none', choice: 'scissors', clicked: 'yes'};
      Meteor.call('realtimeGameUpdate', changes, game_id, function(error, result){
      if (error)
        console.log(error)
    	});    
    },
    "click #another_game": function(event) {
    	var oppId = $("player2scissors").attr('alt');
    	var opp_id = {id: oppId};
      $("#player1rock").css("pointer-events", "none");
      $("#player1paper").css("pointer-events", "none");
      $("#player1scissors").css("pointer-events", "none");
      $("#player2rock").css("pointer-events", "none");
      $("#player2paper").css("pointer-events", "none");
      $("#player2scissors").css("pointer-events", "none");
      // $('#another_game').css('display', 'none');
      Meteor.call('humanGameUpdate', opp_id);
	    countdown_timer();    
    }
  });
}
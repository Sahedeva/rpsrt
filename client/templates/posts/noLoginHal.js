if (Meteor.isClient) {
	var comp_choice_array = ['rock','paper','scissors']; 
  Template.noLoginHal.rendered = function() {
    $('.container').css('background-image', 'url(/background_images/battleInHeaven.jpg');
  	$("#goSound")[0].play();
		$("#player1rock").css("pointer-events", "auto");
		$("#player1paper").css("pointer-events", "auto");
		$("#player1scissors").css("pointer-events", "auto");
    for (i=0;i<12;i++) {
      var control_audio = "audio_player"+i;
      var audio = document.getElementById(control_audio);
      var control_test = audio.hasAttribute("controls");
      console.log("control_audio: "+control_audio);
      console.log("control_test: "+control_test);
      if (control_test) {
          var start_audio = "#audio_player"+i;
          console.log("start_audio: "+start_audio);
          $(start_audio)[0].pause();
      }  
    }
  };

  // Tracker.autorun(function(){
  //   if (Meteor.user() == null) {
  //     console.log("Meteor.user() is null");
  //   } else {
  //     console.log("Meteor.user() is not null");
  //     if (Players.findOne({userId: Meteor.user()._id})) {
  //       console.log("On login - should only get here the first time you create a new user");
  //       var player = {initialize: true};
  //       Meteor.call('playerInsert', player, function (error, result){
  //         if (error)
  //           console.log(error)
  //       });
  //     } else {
  //       console.log("logged in user has a player already will check lobby and active");
  //       if (Players.findOne({lobby: true, userId: Meteor.user()._id})) {
  //         console.log('lobby is true - hitting removeLobby');
  //         Meteor.call('removeLobby');
  //       } else {
  //         console.log('lobby is false - no need to take action');
  //       }
  //       if (Players.findOne({active: true, userId: Meteor.user()._id})) {
  //         console.log('active is true - hitting removeLobby');
  //         Meteor.call('removeActive');
  //       } else {
  //         console.log('active is false - no need to take action');
  //       }
  //     }
  //   }
  // }); 

  Template.noLoginHal.events({
  	"click #player1rock": function (event) {
  		function songStart() {
        for (i=0;i<12;i++) {
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
      }
  		$("#player1rock").css("pointer-events", "none");
      $("#player1paper").css("pointer-events", "none");
      $("#player1scissors").css("pointer-events", "none");
      console.log("Player one chose rock");
      $('#player1rock').removeClass('rps_show');
      $('#player1paper').removeClass('rps_show');
      $('#player1scissors').removeClass('rps_show');
      $('#player1rock').addClass('rps_red rps_rock');
      $('#player1paper').addClass('rps_none');
      $('#player1scissors').addClass('rps_hidden');
			// document.getElementById('player1rock').style.marginTop = '110px';
			// document.getElementById('player1rock').style.border = '4px solid red';
			// document.getElementById('player1rock').style.padding = '0px';
			// document.getElementById('player1paper').style.display = 'none';
   //    document.getElementById('player1scissors').style.visibility = 'hidden';
      var comp_random = Math.floor(Math.random()*3);
	    var choice2 = comp_choice_array[comp_random];   
      if (choice2 === "paper") {
        var player1loss = parseInt($("#player1loss").val());
        var loss = player1loss += 1;
        $("#player1loss").val(loss);
        $("#ploss").html(loss);
        var player2win = parseInt($("#player2win").val());
        var hal_win = player2win += 1; 
        $("#player2win").val(hal_win);
        $("#cwin").html(hal_win);
        console.log("Hal chose paper - you lose");
        $('#player2rock').removeClass('rps_show');
	      $('#player2paper').removeClass('rps_show');
	      $('#player2scissors').removeClass('rps_show');
        $('#player2rock').addClass('rps_hidden');
	      $('#player2paper').addClass('rps_red');
	      $('#player2scissors').addClass('rps_hidden');
	      $('#go').removeClass('countdown_show');
      	$('#loser').removeClass('countdown_none');
	      $('#go').addClass('countdown_none');
	      $('#loser').addClass('countdown_show');
    //     document.getElementById('go').style.display = 'none';
    //     document.getElementById('loser').style.display = '';
    //     document.getElementById('player2paper').style.border = '4px solid red';
				// document.getElementById('player2paper').style.padding = '0px';
				// document.getElementById('player2rock').style.visibility = 'hidden';
    //     document.getElementById('player2scissors').style.visibility = 'hidden';
        $('#paperRockSound')[0].play();
        setTimeout(function(){
          $('#loserSound')[0].play();
          setTimeout(function(){
            songStart();
            $('#another_game').css('display', 'inline');
          },2000);
        },2000);
      } else if (choice2 === "rock") {
      	var player1tie = parseInt($("#player1tie").val());
        var tie = player1tie += 1;
        $("#player1tie").val(tie);
        $("#ptie").html(tie);
        var player2tie = parseInt($("#player2tie").val());
        var hal_tie = player2tie += 1; 
        $("#player2tie").val(hal_tie);
        $("#ctie").html(hal_tie);
        console.log("Hal chose rock - you tie");
        $('#player2rock').removeClass('rps_show');
	      $('#player2paper').removeClass('rps_show');
	      $('#player2scissors').removeClass('rps_show');
        $('#player2rock').addClass('rps_red rps_rock');
	      $('#player2paper').addClass('rps_none');
	      $('#player2scissors').addClass('rps_hidden');
	      $('#go').removeClass('countdown_show');
      	$('#tie').removeClass('countdown_none');
	      $('#go').addClass('countdown_none');
	      $('#tie').addClass('countdown_show');
    //     document.getElementById('go').style.display = 'none';
    //     document.getElementById('tie').style.display = '';
    //     document.getElementById('player2rock').style.marginTop = '110px';
				// document.getElementById('player2rock').style.border = '4px solid red';
				// document.getElementById('player2rock').style.padding = '0px';
				// document.getElementById('player2paper').style.display = 'none';
	   //    document.getElementById('player2scissors').style.visibility = 'hidden';
        $('#tieSound')[0].play();
        setTimeout(function(){
          songStart();
          $('#another_game').css('display', 'inline');
        },2000);
      } else {   
        var player1win = parseInt($("#player1win").val());
        var win = player1win += 1;
        $("#player1win").val(win);
        $("#pwin").html(win);
        var player2loss = parseInt($("#player2loss").val());
        var hal_loss = player2loss += 1; 
        $("#player2loss").val(hal_loss);
        $("#closs").html(hal_loss);
        console.log("Hal chose scissors - you win");
        $('#player2rock').removeClass('rps_show');
	      $('#player2paper').removeClass('rps_show');
	      $('#player2scissors').removeClass('rps_show');
        $('#player2rock').addClass('rps_hidden');
	      $('#player2paper').addClass('rps_none');
	      $('#player2scissors').addClass('rps_red');
	      $('#go').removeClass('countdown_show');
      	$('#winner').removeClass('countdown_none');
	      $('#go').addClass('countdown_none');
	      $('#winner').addClass('countdown_show');
        setTimeout(function(){
          $('#rockScissorsSound')[0].play();
          setTimeout(function(){
            $('#winnerSound')[0].play();
            setTimeout(function(){
              songStart();
              $('#another_game').css('display', 'inline');
            },2000);
          },2200);
        },500); 
      }     
    },
		"click #player1paper": function (event) {
			function songStart() {
        for (i=0;i<12;i++) {
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
      }
  		$("#player1rock").css("pointer-events", "none");
      $("#player1paper").css("pointer-events", "none");
      $("#player1scissors").css("pointer-events", "none");
      console.log("Player one chose paper");
      $('#player1rock').removeClass('rps_show');
      $('#player1paper').removeClass('rps_show');
      $('#player1scissors').removeClass('rps_show');
      $('#player1rock').addClass('rps_hidden');
      $('#player1paper').addClass('rps_red');
      $('#player1scissors').addClass('rps_hidden');
      var comp_random = Math.floor(Math.random()*3);
	    var choice2 = comp_choice_array[comp_random];   
      if (choice2 === "paper") {
        var player1tie = parseInt($("#player1tie").val());
        var tie = player1tie += 1;
        $("#player1tie").val(tie);
        $("#ptie").html(tie);
        var player2tie = parseInt($("#player2tie").val());
        var hal_tie = player2tie += 1; 
        $("#player2tie").val(hal_tie);
        $("#ctie").html(hal_tie);
        console.log("Hal chose paper - you tie");
        $('#player2rock').removeClass('rps_show');
	      $('#player2paper').removeClass('rps_show');
	      $('#player2scissors').removeClass('rps_show');
        $('#player2rock').addClass('rps_hidden');
	      $('#player2paper').addClass('rps_red');
	      $('#player2scissors').addClass('rps_hidden');
	      $('#go').removeClass('countdown_show');
      	$('#tie').removeClass('countdown_none');
	      $('#go').addClass('countdown_none');
	      $('#tie').addClass('countdown_show');
    //     document.getElementById('go').style.display = 'none';
    //     document.getElementById('loser').style.display = '';
    //     document.getElementById('player2paper').style.border = '4px solid red';
				// document.getElementById('player2paper').style.padding = '0px';
				// document.getElementById('player2rock').style.visibility = 'hidden';
    //     document.getElementById('player2scissors').style.visibility = 'hidden';
        $('#tieSound')[0].play();
        setTimeout(function(){
          songStart();
          $('#another_game').css('display', 'inline');
        },2000);
      } else if (choice2 === "rock") {
      	var player1win = parseInt($("#player1win").val());
        var win = player1win += 1;
        $("#player1win").val(win);
        $("#pwin").html(win);
        var player2loss = parseInt($("#player2loss").val());
        var hal_loss = player2loss += 1; 
        $("#player2loss").val(hal_loss);
        $("#closs").html(hal_loss);
        console.log("Hal chose rock - you win");
        $('#player2rock').removeClass('rps_show');
	      $('#player2paper').removeClass('rps_show');
	      $('#player2scissors').removeClass('rps_show');
        $('#player2rock').addClass('rps_red rps_rock');
	      $('#player2paper').addClass('rps_none');
	      $('#player2scissors').addClass('rps_hidden');
	      $('#go').removeClass('countdown_show');
      	$('#winner').removeClass('countdown_none');
	      $('#go').addClass('countdown_none');
	      $('#winner').addClass('countdown_show');
    //     document.getElementById('go').style.display = 'none';
    //     document.getElementById('tie').style.display = '';
    //     document.getElementById('player2rock').style.marginTop = '110px';
				// document.getElementById('player2rock').style.border = '4px solid red';
				// document.getElementById('player2rock').style.padding = '0px';
				// document.getElementById('player2paper').style.display = 'none';
	   //    document.getElementById('player2scissors').style.visibility = 'hidden';
        $('#paperRockSound')[0].play();
        setTimeout(function(){
          $('#winnerSound')[0].play();
          setTimeout(function(){
            songStart();
            $('#another_game').css('display', 'inline');
          },2000);
        },2000);
      } else {   
        var player1loss = parseInt($("#player1loss").val());
        var loss = player1loss += 1;
        $("#player1loss").val(loss);
        $("#ploss").html(loss);
        var player2win = parseInt($("#player2win").val());
        var hal_win = player2win += 1; 
        $("#player2win").val(hal_win);
        $("#cwin").html(hal_win);
        console.log("Hal chose scissors - you lose");
        $('#player2rock').removeClass('rps_show');
	      $('#player2paper').removeClass('rps_show');
	      $('#player2scissors').removeClass('rps_show');
        $('#player2rock').addClass('rps_hidden');
	      $('#player2paper').addClass('rps_none');
	      $('#player2scissors').addClass('rps_red');
	      $('#go').removeClass('countdown_show');
      	$('#loser').removeClass('countdown_none');
	      $('#go').addClass('countdown_none');
	      $('#loser').addClass('countdown_show');
        $('#scissorsPaperSound')[0].play();
        setTimeout(function(){
          $('#loserSound')[0].play();
          setTimeout(function(){
            songStart();
            $('#another_game').css('display', 'inline');
          },2000);
        },2200);
      }     
    },
    "click #player1scissors": function (event) {
			function songStart() {
        for (i=0;i<12;i++) {
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
      }
  		$("#player1rock").css("pointer-events", "none");
      $("#player1paper").css("pointer-events", "none");
      $("#player1scissors").css("pointer-events", "none");
      console.log("Player one chose scissors");
      $('#player1rock').removeClass('rps_show');
      $('#player1paper').removeClass('rps_show');
      $('#player1scissors').removeClass('rps_show');
      $('#player1rock').addClass('rps_hidden');
      $('#player1paper').addClass('rps_none');
      $('#player1scissors').addClass('rps_red');
      var comp_random = Math.floor(Math.random()*3);
	    var choice2 = comp_choice_array[comp_random];   
      if (choice2 === "paper") {
      	var player1win = parseInt($("#player1win").val());
        var win = player1win += 1;
        $("#player1win").val(win);
        $("#pwin").html(win);
        var player2loss = parseInt($("#player2loss").val());
        var hal_loss = player2loss += 1; 
        $("#player2loss").val(hal_loss);
        $("#closs").html(hal_loss);
        console.log("Hal chose paper - you win");
        $('#player2rock').removeClass('rps_show');
	      $('#player2paper').removeClass('rps_show');
	      $('#player2scissors').removeClass('rps_show');
        $('#player2rock').addClass('rps_hidden');
	      $('#player2paper').addClass('rps_red');
	      $('#player2scissors').addClass('rps_hidden');
	      $('#go').removeClass('countdown_show');
      	$('#winner').removeClass('countdown_none');
	      $('#go').addClass('countdown_none');
	      $('#winner').addClass('countdown_show');
    //     document.getElementById('go').style.display = 'none';
    //     document.getElementById('loser').style.display = '';
    //     document.getElementById('player2paper').style.border = '4px solid red';
				// document.getElementById('player2paper').style.padding = '0px';
				// document.getElementById('player2rock').style.visibility = 'hidden';
    //     document.getElementById('player2scissors').style.visibility = 'hidden';
        $('#scissorsPaperSound')[0].play();
        setTimeout(function(){
          $('#winnerSound')[0].play();
          setTimeout(function(){
            songStart();
            $('#another_game').css('display', 'inline');
          },2000);
        },2000); 
      } else if (choice2 === "rock") {
      	var player1loss = parseInt($("#player1loss").val());
        var loss = player1loss += 1;
        $("#player1loss").val(loss);
        $("#ploss").html(loss);
        var player2win = parseInt($("#player2win").val());
        var hal_win = player2win += 1; 
        $("#player2win").val(hal_win);
        $("#cwin").html(hal_win);
        console.log("Hal chose rock - you lose");
        $('#player2rock').removeClass('rps_show');
	      $('#player2paper').removeClass('rps_show');
	      $('#player2scissors').removeClass('rps_show');
        $('#player2rock').addClass('rps_red rps_rock');
	      $('#player2paper').addClass('rps_none');
	      $('#player2scissors').addClass('rps_hidden');
	      $('#go').removeClass('countdown_show');
      	$('#loser').removeClass('countdown_none');
	      $('#go').addClass('countdown_none');
	      $('#loser').addClass('countdown_show');
    //     document.getElementById('go').style.display = 'none';
    //     document.getElementById('tie').style.display = '';
    //     document.getElementById('player2rock').style.marginTop = '110px';
				// document.getElementById('player2rock').style.border = '4px solid red';
				// document.getElementById('player2rock').style.padding = '0px';
				// document.getElementById('player2paper').style.display = 'none';
	   //    document.getElementById('player2scissors').style.visibility = 'hidden';
        $('#rockScissorsSound')[0].play();
        setTimeout(function(){
          $('#loserSound')[0].play();
          setTimeout(function(){
            songStart();
            $('#another_game').css('display', 'inline');
          },2000);
        },2200);
      } else {
      	var player1tie = parseInt($("#player1tie").val());
        var tie = player1tie += 1;
        $("#player1tie").val(tie);
        $("#ptie").html(tie);
        var player2tie = parseInt($("#player2tie").val());
        var hal_tie = player2tie += 1; 
        $("#player2tie").val(hal_tie);
        $("#ctie").html(hal_tie);
        console.log("Hal chose scissors - you tie");
        $('#player2rock').removeClass('rps_show');
	      $('#player2paper').removeClass('rps_show');
	      $('#player2scissors').removeClass('rps_show');
        $('#player2rock').addClass('rps_hidden');
	      $('#player2paper').addClass('rps_none');
	      $('#player2scissors').addClass('rps_red');
	      $('#go').removeClass('countdown_show');
      	$('#tie').removeClass('countdown_none');
	      $('#go').addClass('countdown_none');
	      $('#tie').addClass('countdown_show');
        $('#tieSound')[0].play();
        setTimeout(function(){
          songStart();
          $('#another_game').css('display', 'inline');
        },2000);
      }     
    },
    "click #another_game": function(event) {
      for (i=0;i<12;i++) {
        var control_audio = "audio_player"+i;
        var audio = document.getElementById(control_audio);
        var control_test = audio.hasAttribute("controls");
        console.log("control_audio: "+control_audio);
        console.log("control_test: "+control_test);
        if (control_test) {
            var start_audio = "#audio_player"+i;
            console.log("start_audio: "+start_audio);
            $(start_audio)[0].pause();
        }  
      }
      $("#player1rock").css("pointer-events", "auto");
      $("#player1paper").css("pointer-events", "auto");
      $("#player1scissors").css("pointer-events", "auto");
      $('#another_game').css('display', 'none');
      var computer_avatar = Math.floor(Math.random()*20); 
		  var computer_rps = Math.floor(Math.random()*6);
		  var avatar_array = ["/rps_images/catjedi1.jpg","/rps_images/cat-warrior.jpg","/rps_images/cat-wizard.jpg","/rps_images/cat-healer.jpg","/rps_images/dog-jedi.jpg","/rps_images/dogwarrior.jpg","/rps_images/dog-wizard.jpg","/rps_images/dog-healer.jpeg","/rps_images/pickthisone.jpg","/rps_images/malewarrior.jpg","/rps_images/male-wizard.jpg","/rps_images/male-healer.jpg","/rps_images/femalejedi.jpg","/rps_images/femalewarrior.jpg","/rps_images/female-wizard.jpg","/rps_images/femalehealer.jpg","/rps_images/pattern1.jpg","/rps_images/pattern2.jpg","/rps_images/pattern3.jpg","/rps_images/pattern4.jpg"];
		  var rock_array = ["/rps_images/malerock.jpg","/rps_images/femalerock.jpg","/rps_images/catrock.JPG","/rps_images/dogrock.jpg","/rps_images/objectrock1.jpg","/rps_images/objectrock2.jpg"];
		  var paper_array = ["/rps_images/malepaper.jpg","/rps_images/femalepaper.jpg","/rps_images/catpaper.jpg","/rps_images/dogpaper.jpg","/rps_images/objectpaper1.jpg","/rps_images/objectpaper2.jpg"];
		  var scissors_array = ["/rps_images/malescissors.jpg","/rps_images/femalescissors.jpg","/rps_images/catscissors.jpg","/rps_images/dogscissors.jpg","/rps_images/objectscissors1.jpg","/rps_images/objectscissors2.jpg"];
      $("#player2").attr("src", avatar_array[computer_avatar]);
      $("#player2rock").attr("src", rock_array[computer_rps]);
      $("#player2paper").attr("src", paper_array[computer_rps]);
      $("#player2scissors").attr("src", scissors_array[computer_rps]);

      $('#go').removeClass('countdown_none');
      $('#winner').removeClass('countdown_show');
      $('#loser').removeClass('countdown_show');
      $('#tie').removeClass('countdown_show');
      $('#go').addClass('countdown_show');
      $('#winner').addClass('countdown_none');
      $('#loser').addClass('countdown_none');
      $('#tie').addClass('countdown_none');

      $('#player1rock').removeClass('rps_red rps_rock rps_none rps_hidden');
      $('#player2rock').removeClass('rps_red rps_rock rps_none rps_hidden');
      $('#player1paper').removeClass('rps_none rps_hidden rps_red');
      $('#player2paper').removeClass('rps_none rps_hidden rps_red');
      $('#player1scissors').removeClass('rps_none rps_hidden rps_red');
      $('#player2scissors').removeClass('rps_none rps_hidden rps_red');
      $('#player1rock').addClass('rps_show');
      $('#player1paper').addClass('rps_show');
      $('#player1scissors').addClass('rps_show');
      $('#player2rock').addClass('rps_show');
      $('#player2paper').addClass('rps_show');
      $('#player2scissors').addClass('rps_show');
      $('#goSound')[0].play(); 
    }
  });
}
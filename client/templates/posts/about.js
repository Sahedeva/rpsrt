Template.about.rendered = function() {
  $('.container').css('background-image', 'url(/background_images/samurai.jpg');
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

Tracker.autorun(function(){
  setTimeout(function(){
    var currentUserId = Meteor.userId();
    console.log(currentUserId);
    if (currentUserId == null) {
      console.log("currentUserId is null");
    } else {
      setTimeout(function(){
        console.log("currentUserId is not null");
        var countPlayer = Players.find({userId: currentUserId}).count();
        console.log("countPlayers: "+countPlayer);
        if (countPlayer === 0) {
          console.log("On login - should only get here the first time you create a new user");
          var player = {initialize: true};
          Meteor.call('playerInsert', player, function (error, result){
            if (error)
              console.log(error)
          });
        } else {
          console.log("logged in user has a player already - will call removeLobbyActive");
          Meteor.call('removeLobbyActive');
        }
      },500);
    }
  },500);
});  
  
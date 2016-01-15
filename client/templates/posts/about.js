Template.about.rendered = function() {
  $('.container').css('background-image', 'url(/background_images/samurai.jpg');
  for (i=0;i<5;i++) {
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
  var currentUserId = Meteor.userId();
  console.log(currentUserId);
  if (currentUserId == null) {
    console.log("currentUserId is null");
  } else {
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
    }
  }
});  
  // Tracker.autorun(function(){
  //   var countPlayers = 1;
  //   var countPlayers = Players.find().count();
  //   console.log("countPlayers: "+countPlayers);
  //   var halCount = 1;
  //   var halCount = Hal.find().count();
  //   console.log("typeof(halCount): "+typeof(halCount));
  //   console.log("halCount: "+halCount);
  //   if (halCount === 0) {
  //     console.log("Should only hit once - to generate Hal document");
  //     var halAttributes = {initialize: true};
  //     Meteor.call('initializeHal', halAttributes);
  //   } 
  //   if(Meteor.userId()){
  //   	if (halCount === 0) {
  //     console.log("Should only hit once - to generate Hal document");
  //     var halAttributes = {initialize: true};
  //     Meteor.call('initializeHal', halAttributes);
  //   	} 
  //     var countPlayer = 1;
  //     var countPlayer = Players.find({userId: Meteor.userId()}).count();
  //     console.log("On login - countPlayer: "+countPlayer);
  //     if (countPlayer === 0) {
  //       console.log("On login - should only get here the first time you create a new user");
  //       Meteor.call('initializePlayer');
  //     }
  //   }
  // });

Template.about.rendered = function() {
  $('.container').css('background-image', 'url(/background_images/samurai.jpg');
  for (i=0;i<12;i++) {
    var control_audio = "audio_player"+i;
    var audio = document.getElementById(control_audio);
    var control_test = audio.hasAttribute("controls");
    // console.log("control_audio: "+control_audio);
    // console.log("control_test: "+control_test);
    if (control_test) {
        var start_audio = "#audio_player"+i;
        console.log("start_audio: "+start_audio);
        $(start_audio)[0].play();
    }  
  }
  if (Meteor.user() == null) {
    console.log("Meteor.user() is null");
  } else {
    console.log("Meteor.user() is not null");
    if (Players.findOne({userId: Meteor.user()._id})) {
      console.log("logged in user has a player already will check lobby and active");
      if (Players.findOne({lobby: true, userId: Meteor.user()._id})) {
        console.log('lobby is true - hitting removeLobby');
        Meteor.call('removeLobby');
      } else {
        console.log('lobby is false - no need to take action');
      }
      if (Players.findOne({human: true, userId: Meteor.user()._id})) {
        console.log('human is true - hitting removeHuman');
        Meteor.call('removeHuman');
      } else {
        console.log('human is false - no need to take action');
      }
    }
  }
}

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
  
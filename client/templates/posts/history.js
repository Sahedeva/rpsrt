var songNum = -1;
var stop_audio ="";
Template.history.rendered = function() {
  $('.container').css('background-image', 'url(/background_images/samurai.jpg');
  for (i=0;i<5;i++) {
    var control_audio = "audio_player"+i;
    var audio = document.getElementById(control_audio);
    var control_test = audio.hasAttribute("controls");
    console.log("control_audio: "+control_audio);
    console.log("control_test: "+control_test);
    if (control_test) {
        var j = i;
      	songNum=j;
        stop_audio = "#audio_player"+j;
        console.log("stop_audio: "+stop_audio);
      	$(stop_audio)[0].pause();
    }  
	}
  var currentUserId = Meteor.userId();
  console.log(currentUserId);
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

Template.history.events({
  "ended .my_audio": function(event){
  	// var start_audio = "#audio_player"+songNum;
   //  console.log("stop_audio: "+stop_audio);
  	$(stop_audio)[0].play();
  	// $(c_audio).attr("controls","controls");
  }
});
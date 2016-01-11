var songNum = -1;
var stop_audio ="";
Template.history.rendered = function() {
  var test = Players.find({'hal': 'yes'}).fetch();
  console.log("On screen load - Players.find fxn : "+test);
  console.log("On screen load - typeof test: "+ typeof(test));
  console.log("On screen load - test.length: "+ test.length);
  if (test.length==0) {
    console.log("On screen load - should only get here the first time the program loads");
    Meteor.call('initializeHal');
  }
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
}

Template.history.events({
  "ended .my_audio": function(event){
  	// var start_audio = "#audio_player"+songNum;
   //  console.log("stop_audio: "+stop_audio);
  	$(stop_audio)[0].play();
  	// $(c_audio).attr("controls","controls");
  }
});
Template.footer.events({
    "ended .my_audio": function(event){
      var audio = document.getElementById("audio_player0");
      if (audio.hasAttribute("controls")) {
        audio.removeAttribute("controls");
      }  
      audio = document.getElementById("audio_player1");
      if (audio.hasAttribute("controls")) {
        audio.removeAttribute("controls");
      }  
      audio = document.getElementById("audio_player2");
      if (audio.hasAttribute("controls")) {
        audio.removeAttribute("controls");
      }  
      audio = document.getElementById("audio_player3");
      if (audio.hasAttribute("controls")) {
        audio.removeAttribute("controls");
      }  
      audio = document.getElementById("audio_player4");
      if (audio.hasAttribute("controls")) {
        audio.removeAttribute("controls");
      }  
      var randNum = Math.floor(Math.random()*5);
      var display_audio = 'audio_player'+randNum;
      console.log(display_audio);
      var audio = document.getElementById(display_audio);
      audio.setAttribute("controls","controls")   
      var next_audio = "#audio_player"+randNum;
      $(next_audio)[0].play();
    }
});
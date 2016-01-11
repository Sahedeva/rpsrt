User = new Mongo.Collection("user");

if (Meteor.isClient) {
  var choice1 = "";
  Template.newUser.rendered = function() {
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
    currentUserId = Meteor.userId();
    console.log("On screen load: "+currentUserId);
    var test = Players.find({'userId': currentUserId}).fetch();
    console.log("On screen load - Players.find fxn : "+test);
    console.log("On screen load - typeof test: "+ typeof(test));
    console.log("On screen load - test.length: "+ test.length);
    if (test.length==0) {
      console.log("On screen load - should only get here the first time you select an avatar");
      Meteor.call('initializePlayer');
    }
    console.log("should hit this to make active and lobby false");
    Meteor.call('removeActiveLobbyFxn');
  }
  var currentUserId = Meteor.userId();
  Template.newUser.events({
    // first choice of avatar
    "click .first_choice": function(event){
      choice1 = event.currentTarget.id;
      document.getElementById('first_choice_div').style.display = 'none';
      document.getElementById('first_choice_title').style.display = 'none';
      console.log(choice1);
      if (choice1 === "abstract") {
        console.log("element choices");
        document.getElementById('element_choice_div').style.display = '';
        document.getElementById('element_choice_title').style.display = '';
      
      } else if (choice1 === "custom") {
        console.log("input avatar url");
        document.getElementById('custom_avatar').style.display = '';
        document.getElementById('custom_title').style.display = '';
      } else {
        console.log("class choices")
        document.getElementById('class_choice_div').style.display = '';
        document.getElementById('class_choice_title').style.display = '';
      }
    },

    "click .second_choice": function(event){
      var choice2 = event.currentTarget.id;
      document.getElementById('element_choice_div').style.display = 'none';
      document.getElementById('element_choice_title').style.display = 'none';
      document.getElementById('class_choice_div').style.display = 'none';
      document.getElementById('class_choice_title').style.display = 'none';
      console.log(choice2);
      if (choice2 === "jedi") {
        console.log("jedi");
        if (choice1 === "female") {
        console.log("Female Jedi choice");
        Meteor.call('modifyUsersAvatar', '/rps_images/femalejedi.jpg');
        $("#avatar_text").html("Female Jedi");
        document.getElementById('player_name').style.display = ''; 
        $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/femalejedi.jpg">');
        } else if (choice1 === "male"){
          console.log("Male Jedi choice");
          Meteor.call('modifyUsersAvatar', '/rps_images/pickthisone.jpg');
          $("#avatar_text").html("Male Jedi");
          document.getElementById('player_name').style.display = ''; 
          $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/pickthisone.jpg">');
        } else if (choice1 === "cat"){
          console.log("Cat Jedi choice");
          Meteor.call('modifyUsersAvatar', '/rps_images/catjedi1.jpg');
          $("#avatar_text").html("Cat Jedi");
          document.getElementById('player_name').style.display = ''; 
          $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/catjedi1.jpg">');
        } else if (choice1 === "dog"){
          console.log("Dog Jedi choice");
          Meteor.call('modifyUsersAvatar', '/rps_images/dog-jedi.jpg');
          $("#avatar_text").html("Dog Jedi");
          document.getElementById('player_name').style.display = ''; 
          $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/dog-jedi.jpg">');
        } 
      } else if (choice2 === "warrior") {
        console.log("warrior");
        if (choice1 === "female") {
        console.log("Female Warrior choice");
        Meteor.call('modifyUsersAvatar', '/rps_images/femalewarrior.jpg');
        $("#avatar_text").html("Female Warrior");
        document.getElementById('player_name').style.display = ''; 
        $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/femalewarrior.jpg">');
        } else if (choice1 === "male"){
          console.log("Male Warrior choice");
          Meteor.call('modifyUsersAvatar', '/rps_images/malewarrior.jpg');
          $("#avatar_text").html("Male Warrior");
          document.getElementById('player_name').style.display = ''; 
          $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/malewarrior.jpg">');
        } else if (choice1 === "cat"){
          console.log("Cat Warrior choice");
          Meteor.call('modifyUsersAvatar', '/rps_images/cat-warrior.jpg');
          $("#avatar_text").html("Cat Warrior");
          document.getElementById('player_name').style.display = ''; 
          $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/cat-warrior.jpg">');
        } else if (choice1 === "dog"){
          console.log("Dog Warrior choice");
          Meteor.call('modifyUsersAvatar', '/rps_images/dogwarrior.jpg');
          $("#avatar_text").html("Dog Warrior");
          document.getElementById('player_name').style.display = ''; 
          $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/dogwarrior.jpg">');
        } 
      } else if (choice2 === "wizard") {
        console.log("wizard");
        if (choice1 === "female") {
        console.log("Female Wizard choice");
        Meteor.call('modifyUsersAvatar', '/rps_images/female-wizard.jpg');
        $("#avatar_text").html("Female Wizard");
        document.getElementById('player_name').style.display = ''; 
        $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/female-wizard.jpg">');
        } else if (choice1 === "male"){
          console.log("Male Wizard choice");
          Meteor.call('modifyUsersAvatar', '/rps_images/male-wizard.jpg');
          $("#avatar_text").html("Male Wizard");
          document.getElementById('player_name').style.display = ''; 
          $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/male-wizard.jpg">');
        } else if (choice1 === "cat"){
          console.log("Cat Wizard choice");
          Meteor.call('modifyUsersAvatar', '/rps_images/cat-wizard.jpg');
          $("#avatar_text").html("Cat Wizard");
          document.getElementById('player_name').style.display = ''; 
          $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/cat-wizard.jpg">');
        } else if (choice1 === "dog"){
          console.log("Dog Wizard choice");
          Meteor.call('modifyUsersAvatar', '/rps_images/dog-wizard.jpg');
          $("#avatar_text").html("Dog Wizard");
          document.getElementById('player_name').style.display = ''; 
          $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/dog-wizard.jpg">');
        } 
      } else if (choice2 === "healer") {
        console.log("healer");
        if (choice1 === "female") {
        console.log("Female Healer choice");
        Meteor.call('modifyUsersAvatar', '/rps_images/femalehealer.jpg');
        $("#avatar_text").html("Female Healer");
        document.getElementById('player_name').style.display = ''; 
        $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/femalehealer.jpg">');
        } else if (choice1 === "male"){
          console.log("Male Healer choice");
          Meteor.call('modifyUsersAvatar', '/rps_images/male-healer.jpg');
          $("#avatar_text").html("Male Healer");
          document.getElementById('player_name').style.display = ''; 
          $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/male-healer.jpg">');
        } else if (choice1 === "cat"){
          console.log("Cat Healer choice");
          Meteor.call('modifyUsersAvatar', '/rps_images/cat-healer.jpg');
          $("#avatar_text").html("Cat Healer");
          document.getElementById('player_name').style.display = ''; 
          $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/cat-healer.jpg">');
        } else if (choice1 === "dog"){
          console.log("Dog Healer choice");
          Meteor.call('modifyUsersAvatar', '/rps_images/dog-healer.jpg');
          $("#avatar_text").html("Dog Healer");
          document.getElementById('player_name').style.display = ''; 
          $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/dog-healer.jpg">');
        } 
      } else if (choice2 === "earth") {
        console.log("earth");
        Meteor.call('modifyUsersAvatar', '/rps_images/pattern1.jpg');
        $("#avatar_text").html("Earth");
        document.getElementById('player_name').style.display = ''; 
        $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/pattern1.jpg">');
      } else if (choice2 === "wind") {
        console.log("wind");
        Meteor.call('modifyUsersAvatar', '/rps_images/pattern2.jpg');
        $("#avatar_text").html("Wind");
        document.getElementById('player_name').style.display = ''; 
        $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/patternw.jpg">');
      } else if (choice2 === "fire") {
        console.log("fire");
        Meteor.call('modifyUsersAvatar', '/rps_images/pattern3.jpg');
        $("#avatar_text").html("Fire");
        document.getElementById('player_name').style.display = ''; 
        $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/pattern3.jpg">');
      } else if (choice2 === "water") {
        console.log("water");
        Meteor.call('modifyUsersAvatar', '/rps_images/pattern4.jpg');
        $("#avatar_text").html("Water");
        document.getElementById('player_name').style.display = ''; 
        $("#avatar_placeholder").append('<img id="chosen_avatar" src="/rps_images/pattern4.jpg">');
      }else {
        console.log("class choices")
        document.getElementById('class_choice_div').style.display = '';
        document.getElementById('class_choice_title').style.display = '';
      }
      document.getElementById('rps_choice_div').style.display = '';
      document.getElementById('rps_title').style.display = '';
    },

    "click .rps_choice": function(event){
      var rpsChoice = event.currentTarget.id;
      document.getElementById('rps_choice_div').style.display = 'none';
      document.getElementById('rps_title').style.display = 'none';
      console.log(rpsChoice);
      if (rpsChoice === "female") {
        console.log("Female RPS choice");
        $("#rock_placeholder").append('<img class="rps_image" src="/rps_images/femalerock.jpg">');
        $("#paper_placeholder").append('<img class="rps_image" src="/rps_images/femalepaper.jpg">');
        $("#scissors_placeholder").append('<img class="rps_image" src="/rps_images/femalescissors.jpg">');
        var choice1 = "/rps_images/femalerock.jpg"
        var choice2 = "/rps_images/femalepaper.jpg"
        var choice3 = "/rps_images/femalescissors.jpg"
        Meteor.call('modifyUsersRock', choice1);
        Meteor.call('modifyUsersPaper', choice2);
        Meteor.call('modifyUsersScissors', choice3);
        document.getElementById('rock_image').style.display = '';
        document.getElementById('paper_image').style.display = '';
        document.getElementById('scissors_image').style.display = '';     
      } else if (rpsChoice === "male") {
        console.log("Male RPS choice");
        $("#rock_placeholder").append('<img class="rps_image" src="/rps_images/malerock.jpg">');
        $("#paper_placeholder").append('<img class="rps_image" src="/rps_images/malepaper.jpg">');
        $("#scissors_placeholder").append('<img class="rps_image" src="/rps_images/malescissors.jpg">');
        var choice1 = "/rps_images/malerock.jpg"
        var choice2 = "/rps_images/malepaper.jpg"
        var choice3 = "/rps_images/malescissors.jpg"
        Meteor.call('modifyUsersRock', choice1);
        Meteor.call('modifyUsersPaper', choice2);
        Meteor.call('modifyUsersScissors', choice3);
        document.getElementById('rock_image').style.display = '';
        document.getElementById('paper_image').style.display = '';
        document.getElementById('scissors_image').style.display = '';
      } else if (rpsChoice === "cat") {
        console.log("Cat RPS choice");
        $("#rock_placeholder").append('<img class="rps_image" src="/rps_images/catrock.JPG">');
        $("#paper_placeholder").append('<img class="rps_image" src="/rps_images/catpaper.jpg">');
        $("#scissors_placeholder").append('<img class="rps_image" src="/rps_images/catscissors.jpg">');
        var choice1 = "/rps_images/catrock.JPG"
        var choice2 = "/rps_images/catpaper.jpg"
        var choice3 = "/rps_images/catscissors.jpg"
        Meteor.call('modifyUsersRock', choice1);
        Meteor.call('modifyUsersPaper', choice2);
        Meteor.call('modifyUsersScissors', choice3);
        document.getElementById('rock_image').style.display = '';
        document.getElementById('paper_image').style.display = '';
        document.getElementById('scissors_image').style.display = '';
      } else if (rpsChoice === "dog") {
        console.log("Dog RPS choice");
        $("#rock_placeholder").append('<img class="rps_image" src="/rps_images/dogrock.jpg">');
        $("#paper_placeholder").append('<img class="rps_image" src="/rps_images/dogpaper.jpg">');
        $("#scissors_placeholder").append('<img class="rps_image" src="/rps_images/dogscissors.jpg">');
        var choice1 = "/rps_images/dogrock.jpg"
        var choice2 = "/rps_images/dogpaper.jpg"
        var choice3 = "/rps_images/dogscissors.jpg"
        Meteor.call('modifyUsersRock', choice1);
        Meteor.call('modifyUsersPaper', choice2);
        Meteor.call('modifyUsersScissors', choice3);
        document.getElementById('rock_image').style.display = '';
        document.getElementById('paper_image').style.display = '';
        document.getElementById('scissors_image').style.display = '';
      } else if (rpsChoice === "modern") {
        console.log("Modern RPS choice");
        $("#rock_placeholder").append('<img class="rps_image" src="/rps_images/objectrock1.jpg">');
        $("#paper_placeholder").append('<img class="rps_image" src="/rps_images/objectpaper1.jpg">');
        $("#scissors_placeholder").append('<img class="rps_image" src="/rps_images/objectscissors1.jpg">');
        var choice1 = "/rps_images/objectrock1.jpg"
        var choice2 = "/rps_images/objectpaper1.jpg"
        var choice3 = "/rps_images/objectscissors1.jpg"
        Meteor.call('modifyUsersRock', choice1);
        Meteor.call('modifyUsersPaper', choice2);
        Meteor.call('modifyUsersScissors', choice3);
        document.getElementById('rock_image').style.display = '';
        document.getElementById('paper_image').style.display = '';
        document.getElementById('scissors_image').style.display = '';
      } else if (rpsChoice === "ancient") {
        console.log("Ancient RPS choice");
        $("#rock_placeholder").append('<img class="rps_image" src="/rps_images/objectrock2.jpg">');
        $("#paper_placeholder").append('<img class="rps_image" src="/rps_images/objectpaper2.jpg">');
        $("#scissors_placeholder").append('<img class="rps_image" src="/rps_images/objectscissors2.jpg">');
        var choice1 = "/rps_images/objectrock2.jpg"
        var choice2 = "/rps_images/objectpaper2.jpg"
        var choice3 = "/rps_images/objectscissors2.jpg"
        Meteor.call('modifyUsersRock', choice1);
        Meteor.call('modifyUsersPaper', choice2);
        Meteor.call('modifyUsersScissors', choice3);
        document.getElementById('rock_image').style.display = '';
        document.getElementById('paper_image').style.display = '';
        document.getElementById('scissors_image').style.display = '';
      } else if (rpsChoice === "custom") {
        console.log("Custom RPS choice");
        document.getElementById('custom_rock').style.display = '';
        document.getElementById('custom_paper').style.display = '';
        document.getElementById('custom_scissors').style.display = '';
      }
    },

    // "change #avatar": function (event) {
    //   var dropSelect = document.getElementById("avatar");
    //   var choice1 = dropSelect.value;
    //   console.log(choice1);
    //   if (choice1 === "") {
    //     document.getElementById("choose_avatar").label = "Choose an avatar from list below";
    //   } else if (choice1 === "cat") {
    //     console.log("Cat choices");
    //     document.getElementById('cat_avatar').style.display = '';
    //     document.getElementById('avatar').style.display = 'none';
    //   } else if (choice1 === "dog") {
    //     console.log("Dog choices");
    //     document.getElementById('dog_avatar').style.display = '';
    //     document.getElementById('avatar').style.display = 'none';
    //   } else if (choice1 === "human") {
    //     console.log("Human choices");
    //     document.getElementById('mf_avatar').style.display = '';
    //     document.getElementById('avatar').style.display = 'none';
    //   } else if (choice1 === "abstract") {
    //     console.log("Abstract choices");
    //     document.getElementById('abstract_avatar').style.display = '';
    //     document.getElementById('avatar').style.display = 'none';
    //   } else {
    //     console.log("Custom choice");
    //     document.getElementById('custom_avatar').style.display = '';
    //     document.getElementById('avatar').style.display = 'none';
    //   }
    // },

    //male female avatar selector
    // "change #mf_avatar": function (event) {
    //   var dropSelect = document.getElementById("mf_avatar");
    //   var choice1 = dropSelect.value;
    //   console.log(choice1);
    //   if (choice1 === "") {
    //     document.getElementById("choose_mf_avatar").label = "Choose a sex from list below";
    //   } else if (choice1 === "male") {
    //     console.log("Male choice");
    //     document.getElementById('male_avatar').style.display = '';
    //     document.getElementById('mf_avatar').style.display = 'none';    
    //   } else {
    //     console.log("Female choice");
    //     document.getElementById('female_avatar').style.display = '';
    //     document.getElementById('mf_avatar').style.display = 'none';   
    //   } 
    // },

    //cat avatar selector
    // "change #cat_avatar": function (event) {
    //   var dropSelect = document.getElementById("cat_avatar");
    //   var choice1 = dropSelect.value;
    //   console.log(choice1);
    //   if (choice1 === "") {
    //     document.getElementById("choose_cat_avatar").label = "Choose an avatar from list below";
    //   } else if (choice1 === "jedi") {
    //     console.log("Cat Jedi choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/catjedi1.jpg');
    //     document.getElementById('cat_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/catjedi1.jpg">');
    //   } else if (choice1 === "warrior") {
    //     console.log("Cat Warrior choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/cat-warrior.jpg');
    //     document.getElementById('cat_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/cat-warrior.jpg">');
    //   } else if (choice1 === "wizard") {
    //     console.log("Cat Wizard choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/cat-wizard.jpg');
    //     document.getElementById('cat_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/cat-wizard.jpg">');
    //   } else {
    //     console.log("Cat Healer choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/cat-healer.jpg');
    //     document.getElementById('cat_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/cat-healer.jpg">');
    //   } 
    // },

    //dog avatar selector
    // "change #dog_avatar": function (event) {
    //   var dropSelect = document.getElementById("dog_avatar");
    //   var choice1 = dropSelect.value;
    //   console.log(choice1);
    //   if (choice1 === "") {
    //     document.getElementById("choose_dog_avatar").label = "Choose an avatar from list below";
    //   } else if (choice1 === "jedi") {
    //     console.log("Dog Jedi choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/dog-jedi.jpg');
    //     document.getElementById('dog_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/dog-jedi.jpg">');
    //   } else if (choice1 === "warrior") {
    //     console.log("Dog Warrior choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/dog-warrior.jpg');
    //     document.getElementById('dog_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/dogwarrior.jpg">');
    //   } else if (choice1 === "wizard") {
    //     console.log("Dog Wizard choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/dog-wizard.jpg');
    //     document.getElementById('dog_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/dog-wizard.jpg">');
    //   } else {
    //     console.log("Dog Healer choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/dog-healer.jpeg');
    //     document.getElementById('dog_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/doghealer1.jpg">');
    //   } 
    // },

    //male avatar selector
    // "change #male_avatar": function (event) {
    //   var dropSelect = document.getElementById("male_avatar");
    //   var choice1 = dropSelect.value;
    //   console.log(choice1);
    //   if (choice1 === "") {
    //     document.getElementById("choose_male_avatar").label = "Choose an avatar from list below";
    //   } else if (choice1 === "jedi") {
    //     console.log("Male Jedi choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/pickthisone.jpg');
    //     document.getElementById('male_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/pickthisone.jpg">');
    //   } else if (choice1 === "warrior") {
    //     console.log("Male Warrior choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/malewarrior.jpg');
    //     document.getElementById('male_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/malewarrior.jpg">');
    //   } else if (choice1 === "wizard") {
    //     console.log("Male Wizard choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/male-wizard.jpg');
    //     document.getElementById('male_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/male-wizard.jpg">');
    //   } else {
    //     console.log("Male Healer choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/male-healer.jpg');
    //     document.getElementById('male_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/male-healer.jpg">');
    //   } 
    // },

    //female avatar selector
    // "change #female_avatar": function (event) {
    //   var dropSelect = document.getElementById("female_avatar");
    //   var choice1 = dropSelect.value;
    //   console.log(choice1);
    //   if (choice1 === "") {
    //     document.getElementById("choose_female_avatar").label = "Choose an avatar from list below";
    //   } else if (choice1 === "jedi") {
    //     console.log("Female Jedi choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/femalejedi.jpg');
    //     $("#avatar_text").html("Female Jedi");
    //     document.getElementById('player_name').style.display = ''; 
    //     document.getElementById('female_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/femalejedi.jpg">');
    //   } else if (choice1 === "warrior") {
    //     console.log("Female Warrior choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/femalewarrior.jpg');
    //     $("#avatar_text").html("Female Warrior");
    //     document.getElementById('player_name').style.display = ''; 
    //     document.getElementById('female_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/femalewarrior.jpg">');
    //   } else if (choice1 === "wizard") {
    //     console.log("Female Wizard choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/female-wizard.jpg');
    //     $("#avatar_text").html("Female Wizard");
    //     document.getElementById('player_name').style.display = ''; 
    //     document.getElementById('female_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/female-wizard.jpg">');
    //   } else {
    //     console.log("Female Healer choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/femalehealer.jpg');
    //     $("#avatar_text").html("Female Healer");
    //     document.getElementById('player_name').style.display = ''; 
    //     document.getElementById('female_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/femalehealer.jpg">');
    //   } 
    // },

    //abstract avatar selector
    // "change #abstract_avatar": function (event) {
    //   var dropSelect = document.getElementById("abstract_avatar");
    //   var choice1 = dropSelect.value;
    //   console.log(choice1);
    //   if (choice1 === "") {
    //     document.getElementById("choose_abstract_avatar").label = "Choose an avatar from list below";
    //   } else if (choice1 === "pat1") {
    //     console.log("Pattern 1 choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/pattern1.jpg');
    //     document.getElementById('abstract_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/pattern1.jpg">');
    //   } else if (choice1 === "pat2") {
    //     console.log("Pattern 2 choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/pattern2.jpg');
    //     document.getElementById('abstract_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/pattern2.jpg">');
    //   } else if (choice1 === "pat3") {
    //     console.log("Pattern 3 choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/pattern3.jpg');
    //     document.getElementById('abstract_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/pattern3.jpg">');
    //   } else {
    //     console.log("Pattern 4 choice");
    //     Meteor.call('modifyUsersAvatar', '/rps_images/pattern4.jpg');
    //     document.getElementById('abstract_avatar').style.display = 'none'; 
    //     $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/pattern4.jpg">');
    //   } 
    // },

    //custom avatar selector
    "submit #custom_avatar_form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      var dropSelect = document.getElementById("custom_avatar");
      var choice1 = dropSelect.value;
      // var choice = {avatar_url: choice1};
      Meteor.call('sendLogMessage');
      Meteor.call('modifyUsersAvatar', choice1);
      document.getElementById('custom_avatar').style.display = 'none';
      var image_entry = '<img id="chosen_avatar" src="'+choice1+'">'
      $("#avatar_placeholder").append(image_entry);
    },

    //rps image selector
    "change #rps_images": function (event) {
      var dropSelect = document.getElementById("rps_images");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_rps_images").label = "Choose an RPS image set from list below";
      } else if (choice1 === "cat") {
        console.log("Cat RPS images");
        // $("#rps_placeholder").append('<img class="rps_image" src="/rps_images/catrock.JPG"><img class="rps_image" src="/rps_images/catpaper.jpg"><img class="rps_image" src="/rps_images/catscissors.jpg"><br><img class="rps_image reverser" src="/rps_images/catrock.JPG"><img class="rps_image reverser" src="/rps_images/catpaper.jpg"><img class="rps_image reverser" src="/rps_images/catscissors.jpg">');
        $("#rock_placeholder").append('<img class="rps_image" src="/rps_images/catrock.JPG">');
        $("#paper_placeholder").append('<img class="rps_image" src="/rps_images/catpaper.jpg">');
        $("#scissors_placeholder").append('<img class="rps_image" src="/rps_images/catscissors.jpg">');
        var choice1 = "/rps_images/catrock.JPG"
        var choice2 = "/rps_images/catpaper.jpg"
        var choice3 = "/rps_images/catscissors.jpg"
        Meteor.call('modifyUsersRock', choice1);
        Meteor.call('modifyUsersPaper', choice2);
        Meteor.call('modifyUsersScissors', choice3);
        document.getElementById('rock_image').style.display = '';
        document.getElementById('paper_image').style.display = '';
        document.getElementById('scissors_image').style.display = '';
        document.getElementById('rps_images').style.display = 'none';
      } else if (choice1 === "dog") {
        console.log("Dog RPS images");
        // $("#rps_placeholder").append('<img class="rps_image" src="/rps_images/dogrock.jpg"><img class="rps_image" src="/rps_images/dogpaper.jpg"><img class="rps_image" src="/rps_images/dogscissors.jpg"><br><img class="rps_image reverser" src="/rps_images/dogrock.jpg"><img class="rps_image reverser" src="/rps_images/dogpaper.jpg"><img class="rps_image reverser" src="/rps_images/dogscissors.jpg">');
        $("#rock_placeholder").append('<img class="rps_image" src="/rps_images/dogrock.jpg">');
        $("#paper_placeholder").append('<img class="rps_image" src="/rps_images/dogpaper.jpg">');
        $("#scissors_placeholder").append('<img class="rps_image" src="/rps_images/dogscissors.jpg">');
        var choice1 = "/rps_images/dogrock.jpg"
        var choice2 = "/rps_images/dogpaper.jpg"
        var choice3 = "/rps_images/dogscissors.jpg"
        Meteor.call('modifyUsersRock', choice1);
        Meteor.call('modifyUsersPaper', choice2);
        Meteor.call('modifyUsersScissors', choice3);
        document.getElementById('rock_image').style.display = '';
        document.getElementById('paper_image').style.display = '';
        document.getElementById('scissors_image').style.display = '';
        document.getElementById('rps_images').style.display = 'none';
      } else if (choice1 === "human") {
        console.log("Human choices");
        document.getElementById('mf_rps_images').style.display = '';
        document.getElementById('rps_images').style.display = 'none';
      } else if (choice1 === "objects") {
        console.log("Actual object choices");
        document.getElementById('objects_choices').style.display = '';
        document.getElementById('rps_images').style.display = 'none';
      } else {
        console.log("Custom RPS images");
        document.getElementById('custom_rock').style.display = '';
        document.getElementById('custom_paper').style.display = '';
        document.getElementById('custom_scissors').style.display = '';
        document.getElementById('rps_images').style.display = 'none';
      }
    },

    //custom rock selector
    "submit #custom_rock_form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      console.log("custom rock");
      var rockSelect = document.getElementById("custom_rock");
      var choice1 = rockSelect.value;
      var rock_image = '<img class="rps_image" src="'+choice1+'">';
      $("#rock_placeholder").append(rock_image);
      Meteor.call('modifyUsersRock', choice1);
      document.getElementById('rock_image').style.display = '';
      document.getElementById('custom_rock').style.display = 'none';
    },

    //custom paper selector
    "submit #custom_paper_form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      console.log("custom paper");
      var paperSelect = document.getElementById("custom_paper");
      var choice2 = paperSelect.value;
      var paper_image = '<img class="rps_image" src="'+choice2+'">';
      $("#paper_placeholder").append(paper_image);
      Meteor.call('modifyUsersPaper', choice2);
      document.getElementById('paper_image').style.display = '';
      document.getElementById('custom_paper').style.display = 'none';
    },

    //custom scissor selector
    "submit #custom_scissors_form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      console.log("custom scissors");
      var scissorsSelect = document.getElementById("custom_scissors");
      var choice3 = scissorsSelect.value;
      var scissor_image = '<img class="rps_image" src="'+choice3+'">';
      $("#scissors_placeholder").append(scissor_image);
      Meteor.call('modifyUsersScissors', choice3);
      document.getElementById('scissors_image').style.display = '';
      document.getElementById('custom_scissors').style.display = 'none';
    },

    //rps object selector
    "change #objects_choices": function (event) {
      var dropSelect = document.getElementById("objects_choices");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_objects_choices").label = "Choose object RPS images from list below";
      } else if (choice1 === "pat1") {
        console.log("Pattern 1 choice");
        // $("#rps_placeholder").append('<img class="rps_image" src="/rps_images/objectrock1left.jpg"><img class="rps_image" src="/rps_images/objectpaper1.jpg"><img class="rps_image" src="/rps_images/objectscissors1left.jpg"><br><img class="rps_image" src="/rps_images/objectrock1right.jpg"><img class="rps_image reverser" src="/rps_images/objectpaper1.jpg"><img class="rps_image" src="/rps_images/objectscissors1right.jpg">');
        $("#rock_placeholder").append('<img class="rps_image" src="/rps_images/objectrock1.jpg">');
        $("#paper_placeholder").append('<img class="rps_image" src="/rps_images/objectpaper1.jpg">');
        $("#scissors_placeholder").append('<img class="rps_image" src="/rps_images/objectscissors1.jpg">');
        var choice1 = "/rps_images/objectrock1.jpg"
        var choice2 = "/rps_images/objectpaper1.jpg"
        var choice3 = "/rps_images/objectscissors1.jpg"
        Meteor.call('modifyUsersRock', choice1);
        Meteor.call('modifyUsersPaper', choice2);
        Meteor.call('modifyUsersScissors', choice3);
        document.getElementById('rock_image').style.display = '';
        document.getElementById('paper_image').style.display = '';
        document.getElementById('scissors_image').style.display = '';
        document.getElementById('objects_choices').style.display = 'none';
      } else {
        console.log("Pattern 2 choice");
        // $("#rps_placeholder").append('<img class="rps_image" src="/rps_images/objectrock2left.jpg"><img class="rps_image" src="/rps_images/objectpaper2left.jpg"><img class="rps_image" src="/rps_images/objectscissors2left.jpg"><br><img class="rps_image" src="/rps_images/objectrock2right.jpg"><img class="rps_image" src="/rps_images/objectpaper2right.jpg"><img class="rps_image" src="/rps_images/objectscissors2right.jpg">');
        $("#rock_placeholder").append('<img class="rps_image" src="/rps_images/objectrock2.jpg">');
        $("#paper_placeholder").append('<img class="rps_image" src="/rps_images/objectpaper2.jpg">');
        $("#scissors_placeholder").append('<img class="rps_image" src="/rps_images/objectscissors2.jpg">');
        var choice1 = "/rps_images/objectrock2.jpg"
        var choice2 = "/rps_images/objectpaper2.jpg"
        var choice3 = "/rps_images/objectscissors2.jpg"
        Meteor.call('modifyUsersRock', choice1);
        Meteor.call('modifyUsersPaper', choice2);
        Meteor.call('modifyUsersScissors', choice3);
        document.getElementById('rock_image').style.display = '';
        document.getElementById('paper_image').style.display = '';
        document.getElementById('scissors_image').style.display = '';
        document.getElementById('objects_choices').style.display = 'none';
      } 
    },

    //rps male and female selector
    "change #mf_rps_images": function (event) {
      var dropSelect = document.getElementById("mf_rps_images");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_mf_rps_images").label = "Choose a sex from list below";
      } else if (choice1 === "male") {
        console.log("Male choice");
        // $("#rps_placeholder").append('<img class="rps_image" src="/rps_images/malerock.jpg"><img class="rps_image" src="/rps_images/malepaper.jpg"><img class="rps_image" src="/rps_images/malescissors.jpg">');

        $("#rock_placeholder").append('<img class="rps_image" src="/rps_images/malerock.jpg">');
        $("#paper_placeholder").append('<img class="rps_image" src="/rps_images/malepaper.jpg">');
        $("#scissors_placeholder").append('<img class="rps_image" src="/rps_images/malescissors.jpg">');
        var choice1 = "/rps_images/malerock.jpg"
        var choice2 = "/rps_images/malepaper.jpg"
        var choice3 = "/rps_images/malescissors.jpg"
        Meteor.call('modifyUsersRock', choice1);
        Meteor.call('modifyUsersPaper', choice2);
        Meteor.call('modifyUsersScissors', choice3);
        document.getElementById('rock_image').style.display = '';
        document.getElementById('paper_image').style.display = '';
        document.getElementById('scissors_image').style.display = '';
        document.getElementById('mf_rps_images').style.display = 'none';    
      } else {
        console.log("Female choice");
        $("#rock_placeholder").append('<img class="rps_image" src="/rps_images/femalerock.jpg">');
        $("#paper_placeholder").append('<img class="rps_image" src="/rps_images/femalepaper.jpg">');
        $("#scissors_placeholder").append('<img class="rps_image" src="/rps_images/femalescissors.jpg">');
        var choice1 = "/rps_images/femalerock.jpg"
        var choice2 = "/rps_images/femalepaper.jpg"
        var choice3 = "/rps_images/femalescissors.jpg"
        Meteor.call('modifyUsersRock', choice1);
        Meteor.call('modifyUsersPaper', choice2);
        Meteor.call('modifyUsersScissors', choice3);
        document.getElementById('rock_image').style.display = '';
        document.getElementById('paper_image').style.display = '';
        document.getElementById('scissors_image').style.display = '';
        document.getElementById('mf_rps_images').style.display = 'none';    
      } 
    }
  });
}

// "submit form": function(event) {
//     e.preventDefault();

//     var post = {
//       url: $(e.target).find('[name=url]').val(),
//       title: $(e.target).find('[name=title]').val()
//     };

//     Meteor.call('postInsert', post, function(error, result){
//       // display the error to the user and about
//       if (error)
//         return alert(error.reason);

//       // show this result but route anyway
//       if (result.postExists)
//         alert('This link has already been posted');

//       Router.go('postPage', {_id: result._id});
//     });
//   }
// var currentUserId = Meteor.userId();
    // "submit .new-user": function (event) {
      // Prevent default browser form submit
      // event.preventDefault();
      // var e = document.getElementById("cat");
      // var avatar = e.value;
      // console.log(avatar);
      // Get value from form element
      // var user_name = event.target.user_name.value;
      // console.log (user_name);
      // var password = event.target.password.value;
      // console.log(password);
      // var email = event.target.email.value;
      // console.log(email);

 
 
      // Insert a task into the collection
      // User.insert({
      //   avatar: avatar,
      //   user_name: user_name,
      //   password: password,
      //   email: email,
      //   rps_images: rps_images,
      //   createdAt: new Date() // current time
      // });
 
      // Clear form
    //   event.target.text.value = "";
    // }

    if (Meteor.isServer) {
      Meteor.methods({
        'sendLogMessage': function(){
          console.log("Hello world");
        },
        'initializePlayer': function(){
          var player = {initialize: true};
          Meteor.call('playerInsert', player, function (error, result){
            if (error)
              console.log(error)
          });
        },
        'modifyUsersAvatar': function(avatar_url){
          check(avatar_url, Match.Any);
          var currentUserId = Meteor.userId();
          console.log(currentUserId+" " +avatar_url);
          var player = {avatar_url: avatar_url, win: 0, loss: 0, tie: 0, choice: '', name: '', active: false, wlt: ['']};
          console.log(player);

          Meteor.call('playerAvatarUpdate', player, function(error, result){
            // display the error to the user and about
            if (error)
              console.log(error)
          });
          // users.update(currentUserId, {avatar_url: avatar_url});
        },
        'modifyUsersRock': function(rock_url){
          check(rock_url, Match.Any);
          var currentUserId = Meteor.userId();
          console.log(currentUserId+" " +rock_url);
          var player = {rock_url: rock_url};
          console.log(player);

          Meteor.call('playerRockUpdate', player, function(error, result){
            // display the error to the user and about
            if (error)
              console.log(error)
          });
          // users.update(currentUserId, {avatar_url: avatar_url});
        },
        'modifyUsersPaper': function(paper_url){
          check(paper_url, Match.Any);
          var currentUserId = Meteor.userId();
          console.log(currentUserId+" " +paper_url);
          var player = {paper_url: paper_url};
          console.log(player);

          Meteor.call('playerPaperUpdate', player, function(error, result){
            // display the error to the user and about
            if (error)
              console.log(error)
          });
          // users.update(currentUserId, {avatar_url: avatar_url});
        },
        'modifyUsersScissors': function(scissors_url){
          check(scissors_url, Match.Any);
          var currentUserId = Meteor.userId();
          console.log(currentUserId+" " +scissors_url);
          var player = {scissors_url: scissors_url};
          console.log(player);

          Meteor.call('playerScissorsUpdate', player, function(error, result){
            // display the error to the user and about
            if (error)
              console.log(error)
          });
          // users.update(currentUserId, {avatar_url: avatar_url});
        },
        'removeActiveLobbyFxn': function() {
          Meteor.call('removeLobbyActive', function(error, result){
            // display the error to the user and about
            if (error)
              console.log(error)
          });
        }
        // 'modifyUsersRock': function(avatar_url)
      });
    }

User = new Mongo.Collection("user");
// if (Meteor.isServer) {
//   Meteor.publish('user', function() {
//     return User.find({
//       $or: [
//         { private: {$ne: true} },
//         { owner: this.userID }
//         ]
//     });
//   });
// }

if (Meteor.isClient) {
  // This code only runs on the client
  // Meteor.subscribe('user');
  // Meteor.startup(function(){
  //   document.getElementById("avatar").selectedIndex = "-1";
  // });
  var currentUserId = Meteor.userId();
  Template.newUser.events({
    // first choice of avatar
    "change #avatar": function (event) {
      var dropSelect = document.getElementById("avatar");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_avatar").label = "Choose an avatar from list below";
      } else if (choice1 === "cat") {
        console.log("Cat choices");
        document.getElementById('cat_avatar').style.display = '';
        document.getElementById('avatar').style.display = 'none';
      } else if (choice1 === "dog") {
        console.log("Dog choices");
        document.getElementById('dog_avatar').style.display = '';
        document.getElementById('avatar').style.display = 'none';
      } else if (choice1 === "human") {
        console.log("Human choices");
        document.getElementById('mf_avatar').style.display = '';
        document.getElementById('avatar').style.display = 'none';
      } else if (choice1 === "abstract") {
        console.log("Abstract choices");
        document.getElementById('abstract_avatar').style.display = '';
        document.getElementById('avatar').style.display = 'none';
      } else {
        console.log("Custom choice");
        document.getElementById('custom_avatar').style.display = '';
        document.getElementById('avatar').style.display = 'none';
      }
    },

    //male female avatar selector
    "change #mf_avatar": function (event) {
      var dropSelect = document.getElementById("mf_avatar");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_mf_avatar").label = "Choose a sex from list below";
      } else if (choice1 === "male") {
        console.log("Male choice");
        document.getElementById('male_avatar').style.display = '';
        document.getElementById('mf_avatar').style.display = 'none';    
      } else {
        console.log("Female choice");
        document.getElementById('female_avatar').style.display = '';
        document.getElementById('mf_avatar').style.display = 'none';   
      } 
    },

    //cat avatar selector
    "change #cat_avatar": function (event) {
      var dropSelect = document.getElementById("cat_avatar");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_cat_avatar").label = "Choose an avatar from list below";
      } else if (choice1 === "jedi") {
        console.log("Cat Jedi choice");
        document.getElementById('cat_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/catjedi1.jpg">');
      } else if (choice1 === "warrior") {
        console.log("Cat Warrior choice");
        document.getElementById('cat_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/cat-warrior.jpg">');
      } else if (choice1 === "wizard") {
        console.log("Cat Wizard choice");
        document.getElementById('cat_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/cat-wizard.jpg">');
      } else {
        console.log("Cat Healer choice");
        document.getElementById('cat_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/cat-healer.jpg">');
      } 
    },

    //dog avatar selector
    "change #dog_avatar": function (event) {
      var dropSelect = document.getElementById("dog_avatar");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_dog_avatar").label = "Choose an avatar from list below";
      } else if (choice1 === "jedi") {
        console.log("Dog Jedi choice");
        document.getElementById('dog_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/dog-jedi.jpg">');
      } else if (choice1 === "warrior") {
        console.log("Dog Warrior choice");
        document.getElementById('dog_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/dog-warrior.jpg">');
      } else if (choice1 === "wizard") {
        console.log("Dog Wizard choice");
        document.getElementById('dog_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/dog-wizard.jpg">');
      } else {
        console.log("Dog Healer choice");
        document.getElementById('dog_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/doghealer1.jpg">');
      } 
    },

    //male avatar selector
    "change #male_avatar": function (event) {
      var dropSelect = document.getElementById("male_avatar");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_male_avatar").label = "Choose an avatar from list below";
      } else if (choice1 === "jedi") {
        console.log("Male Jedi choice");
        document.getElementById('male_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/pickthisone.jpg">');
      } else if (choice1 === "warrior") {
        console.log("Male Warrior choice");
        document.getElementById('male_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/malewarrior.jpg">');
      } else if (choice1 === "wizard") {
        console.log("Male Wizard choice");
        document.getElementById('male_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/male-wizard.jpg">');
      } else {
        console.log("Male Healer choice");
        document.getElementById('male_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/male-healer.jpg">');
      } 
    },

    //female avatar selector
    "change #female_avatar": function (event) {
      var dropSelect = document.getElementById("female_avatar");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_female_avatar").label = "Choose an avatar from list below";
      } else if (choice1 === "jedi") {
        console.log("Female Jedi choice");
        document.getElementById('female_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/femalejedi.jpg">');
      } else if (choice1 === "warrior") {
        console.log("Female Warrior choice");
        document.getElementById('female_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/femalewarrior.jpg">');
      } else if (choice1 === "wizard") {
        console.log("Female Wizard choice");
        document.getElementById('female_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/female-wizard.jpg">');
      } else {
        console.log("Female Healer choice");
        document.getElementById('female_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/femalehealer.jpg">');
      } 
    },

    //abstract avatar selector
    "change #abstract_avatar": function (event) {
      var dropSelect = document.getElementById("abstract_avatar");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_abstract_avatar").label = "Choose an avatar from list below";
      } else if (choice1 === "pat1") {
        console.log("Pattern 1 choice");
        document.getElementById('abstract_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/pattern1.jpg">');
      } else if (choice1 === "pat2") {
        console.log("Pattern 2 choice");
        document.getElementById('abstract_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/pattern2.jpg">');
      } else if (choice1 === "pat3") {
        console.log("Pattern 3 choice");
        document.getElementById('abstract_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/pattern3.jpg">');
      } else {
        console.log("Pattern 4 choice");
        document.getElementById('abstract_avatar').style.display = 'none'; 
        $("#avatar_placeholder").append('<img id="avatar_image" src="/rps_images/pattern4.jpg">');
      } 
    },

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
      var image_entry = '<img id="avatar_image" src="'+choice1+'">'
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
        $("#rps_placeholder").append('<img class="rps_image" src="/rps_images/catrock.JPG"><img class="rps_image" src="/rps_images/catpaper.jpg"><img class="rps_image" src="/rps_images/catscissors.jpg"><br><img class="rps_image reverser" src="/rps_images/catrock.JPG"><img class="rps_image reverser" src="/rps_images/catpaper.jpg"><img class="rps_image reverser" src="/rps_images/catscissors.jpg">');
        document.getElementById('cat_rps_images').style.display = '';
        document.getElementById('rps_images').style.display = 'none';
      } else if (choice1 === "dog") {
        console.log("Dog RPS images");
        $("#rps_placeholder").append('<img class="rps_image" src="/rps_images/dogrock.jpg"><img class="rps_image" src="/rps_images/dogpaper.jpg"><img class="rps_image" src="/rps_images/dogscissors.jpg"><br><img class="rps_image reverser" src="/rps_images/dogrock.jpg"><img class="rps_image reverser" src="/rps_images/dogpaper.jpg"><img class="rps_image reverser" src="/rps_images/dogscissors.jpg">');
        document.getElementById('dog_rps_images').style.display = '';
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
      var image_entry1 = '<img class="rps_image" src="'+choice1+'">';
      var image_entryr1 = '<img class="reverser rps_image" src="'+choice1+'">';
      var rock_image = image_entry1 + "<br>" + image_entryr1
      $("#rock_placeholder").append(rock_image);
      document.getElementById('object1_rps_images').style.display = '';
      document.getElementById('custom_rock').style.display = 'none';
    },

    //custom paper selector
    "submit #custom_paper_form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      console.log("custom paper");
      var paperSelect = document.getElementById("custom_paper");
      var choice2 = paperSelect.value;
      var image_entry2 = '<img class="rps_image" src="'+choice2+'">';
      var image_entryr2 = '<img class="reverser rps_image" src="'+choice2+'">';
      var paper_image = image_entry2 + "<br>" + image_entryr2;
      $("#paper_placeholder").append(paper_image);
      document.getElementById('object1_rps_images').style.display = '';
      document.getElementById('custom_paper').style.display = 'none';
    },

    //custom scissor selector
    "submit #custom_scissors_form": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      console.log("custom scissors");
      var scissorsSelect = document.getElementById("custom_scissors");
      var choice3 = scissorsSelect.value;
      var image_entry3 = '<img class="rps_image" src="'+choice3+'">';
      var image_entryr3 = '<img class="reverser rps_image" src="'+choice3+'">';
      var scissor_image = image_entry3 + "<br>" + image_entryr3;
      $("#scissor_placeholder").append(scissor_image);
      document.getElementById('object1_rps_images').style.display = '';
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
        $("#rps_placeholder").append('<img class="rps_image" src="/rps_images/objectrock1left.jpg"><img class="rps_image" src="/rps_images/objectpaper1.jpg"><img class="rps_image" src="/rps_images/objectscissors1left.jpg"><br><img class="rps_image" src="/rps_images/objectrock1right.jpg"><img class="rps_image reverser" src="/rps_images/objectpaper1.jpg"><img class="rps_image" src="/rps_images/objectscissors1right.jpg">');
        document.getElementById('object1_rps_images').style.display = '';
        document.getElementById('objects_choices').style.display = 'none';
      } else {
        console.log("Pattern 2 choice");
        $("#rps_placeholder").append('<img class="rps_image" src="/rps_images/objectrock2left.jpg"><img class="rps_image" src="/rps_images/objectpaper2left.jpg"><img class="rps_image" src="/rps_images/objectscissors2left.jpg"><br><img class="rps_image" src="/rps_images/objectrock2right.jpg"><img class="rps_image" src="/rps_images/objectpaper2right.jpg"><img class="rps_image" src="/rps_images/objectscissors2right.jpg">');
        document.getElementById('object2_rps_images').style.display = '';
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
        $("#rps_placeholder").append('<img class="rps_image" src="/rps_images/malerock1left.jpg"><img class="rps_image" src="/rps_images/malepaper1left.jpg"><img class="rps_image" src="/rps_images/malescissors1left.jpg"><br><img class="rps_image" src="/rps_images/malerock1right.jpg"><img class="rps_image" src="/rps_images/malepaper1right.jpg"><img class="rps_image" src="/rps_images/malescissors1right.jpg">');
        document.getElementById('male_rps_images').style.display = '';
        document.getElementById('mf_rps_images').style.display = 'none';    
      } else {
        console.log("Female choice");
        $("#rps_placeholder").append('<img class="rps_image" src="/rps_images/femalerock1left.jpg"><img class="rps_image" src="/rps_images/femalepaper1left.jpg"><img class="rps_image" src="/rps_images/femalescissors1left.jpg"><br><img class="rps_image" src="/rps_images/femalerock1right.jpg"><img class="rps_image" src="/rps_images/femalepaper1right.jpg"><img class="rps_image" src="/rps_images/femalescissors1right.jpg">');
        document.getElementById('female_rps_images').style.display = '';
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
        'modifyUsersAvatar': function(avatar_url){
          check(avatar_url, Match.Any);
          var currentUserId = Meteor.userId();
          console.log(currentUserId+" " +avatar_url);
          Meteor.users.update({_id: currentUserId},
                       {$set:{avatar_url: avatar_url}})
          // users.update(currentUserId, {avatar_url: avatar_url});
        }
      });
    }


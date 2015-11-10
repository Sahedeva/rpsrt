Tasks = new Mongo.Collection("tasks");
User = new Mongo.Collection("user");
Avatars = new Mongo.Collection("avatars");
Rps_images = new Mongo.Collection("rps_images");
 
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
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });
 
  Template.body.events({
    "submit .new-task": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var text = event.target.text.value;
 
      // Insert a task into the collection
      Tasks.insert({
        text: text,
        createdAt: new Date() // current time
      });
 
      // Clear form
      event.target.text.value = "";
    }
  });

  

  Template.body.events({
    
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

    "submit .new-user": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      var e = document.getElementById("cat");
      var avatar = e.value;
      console.log(avatar);
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
      event.target.text.value = "";
    }
  });

  Template.task.events({
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Tasks.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    "click .delete": function () {
      Tasks.remove(this._id);
    }
  });
}

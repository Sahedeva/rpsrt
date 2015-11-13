Router.configure({
 layoutTemplate: 'layout',
 loadingTemplate: 'loading',
 notFoundTemplate: 'notFound',
 waitOn: function() { return Meteor.subscribe('players'); }
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
 name: 'postPage',
 data: function() { return Posts.findOne(this.params._id); }
});
Router.route('/submit', {name: 'postSubmit'});


Router.route('/game', {
	name: 'posts_game',
	data: function(){
        var currentUserId = Meteor.userId();
        console.log(currentUserId);
        // var computer = Players.findOne({author: "Hal-9000"});
        // console.log(computer);
        // var computer_avatar = 0;
        // var rand_array = [0];
        // var count = 0;
        // var computer_avatar = computer['computer_avatar'];
        // var rand_array = computer['rand_array'];
        // var count = computer['count'];
      //   var repeat= true;
	    	// while (repeat)
	    	// {
	    	// console.log("computer_avatar prior to randomizer(1st step of while): "+computer_avatar);
	      var computer_avatar = Math.floor(Math.random()*20); 
	     //  console.log("random number generated(1st step of while): " + computer_avatar);
	     //  console.log("random array (1st step of while): " + rand_array);
	     //  for(var i=0; i<=count; i++)
	     //  {
	     //    if (rand_array[i] == computer_avatar)
	     //    {
	     //      repeat=true;
	     //      break;
	     //    }
	     //    else 
	     //      repeat=false;
	     //  }
	     //  if(repeat)
	     //    continue;
	    	// }
	    	// rand_array[count]=computer_avatar;
	    	// count++;
	    	// if (rand_array.length == 20){
	    	// 	console.log("rand array prior to getting zeroed out: " + rand_array);
	     //  	rand_array = [];
	     //  	count=0;
	    	// }
	    	// console.log("This is after check if iterated through entire array of avatars");
	    	// console.log("Current computer avatar after randomizer: " + computer_avatar);
      //   var comp = {computer_avatar: computer_avatar, rand_array: rand_array, count: count};
      //   Meteor.call('computerUpdate', comp, function(error, result){
      //     if (error)
      //       console.log(error)
      //   });
        var computer_rps = Math.floor(Math.random()*6);
        var avatar_array = ["/rps_images/catjedi1.jpg","/rps_images/cat-warrior.jpg","/rps_images/cat-wizard.jpg","/rps_images/cat-healer.jpg","/rps_images/dog-jedi.jpg","/rps_images/dog-warrior.jpg","/rps_images/dog-wizard.jpg","/rps_images/doghealer1.jpg","/rps_images/pickthisone.jpg","/rps_images/malewarrior.jpg","/rps_images/male-wizard.jpg","/rps_images/male-healer.jpg","/rps_images/femalejedi.jpg","/rps_images/femalewarrior.jpg","/rps_images/female-wizard.jpg","/rps_images/femalehealer.jpg","/rps_images/pattern1.jpg","/rps_images/pattern2.jpg","/rps_images/pattern3.jpg","/rps_images/pattern4.jpg"];
        var rock_array = ["/rps_images/malerock1right.jpg","/rps_images/femalerock1right.jpg","/rps_images/catrock.JPG","/rps_images/dogrock.jpg","/rps_images/objectrock1right.jpg","/rps_images/objectrock2right.jpg"];
        var paper_array = ["/rps_images/malepaper1right.jpg","/rps_images/femalepaper1right.jpg","/rps_images/catpaper.jpg","/rps_images/dogpaper.jpg","/rps_images/objectpaper1.jpg","/rps_images/objectpaper2right.jpg"];
        var scissors_array = ["/rps_images/malescissors1right.jpg","/rps_images/femalescissors1right.jpg","/rps_images/catscissors.jpg","/rps_images/dogscissors.jpg","/rps_images/objectscissors1right.jpg","/rps_images/objectscissors2right.jpg"];
        var loser = "http://recruitingdaily.com/wp-content/uploads/sites/6/2014/08/HelloLoserPX1.jpg";
        var winner = "http://www.reunionsmag.com/images/computer-winner1.jpg";
        var tie = "http://cdn.meme.am/instances/57849610.jpg";
        var opponent_avatar = avatar_array[computer_avatar];
        var opponent_rock = rock_array[computer_rps];
        var opponent_paper = paper_array[computer_rps];
        var opponent_scissors = scissors_array[computer_rps];
				var player = Players.findOne({userId: currentUserId});
				console.log(player);
				return {
					player: player,
					opponent_avatar: opponent_avatar,
					opponent_rock: opponent_rock,
					opponent_paper: opponent_paper,
					opponent_scissors: opponent_scissors,
					opponent_name: "Hal-9000",
					countthree: "/rps_images/counttothree.png",
					countone: "https://marcojohnsonblog.files.wordpress.com/2014/10/count-sesame-street.jpg",
					counttwo: "https://muppetmindset.files.wordpress.com/2009/12/count-bats.png",
					ready: "http://img14.deviantart.net/8841/i/2012/348/5/c/spongebob__are_you_ready__bubbles_by_catz537-d5o1ap0.png",
					go: "http://2.bp.blogspot.com/-FfOLA82EikQ/VKd1dhH_eFI/AAAAAAAAGn4/6WIjRzgHaTU/s1600/go.png",
					loser: loser,
					winner: winner,
					tie: tie
				};
			}
});
Router.route('/new', {name: 'new_user'});


var requireLogin = function() {
 if (! Meteor.user()) {
 if (Meteor.loggingIn()) {
 this.render(this.loadingTemplate);
 } else {
 this.render('accessDenied');
 }
 } else {
 this.next();
 }
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
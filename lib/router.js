Router.configure({
 layoutTemplate: 'layout',
 loadingTemplate: 'loading',
 notFoundTemplate: 'notFound',
 waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
 name: 'postPage',
 data: function() { return Posts.findOne(this.params._id); }
});
Router.route('/submit', {name: 'postSubmit'});
Router.route('/game', {
	name: 'posts_game',
	data: {
		player_avatar: "/rps_images/female-wizard.jpg",
		player_rock: "/rps_images/femalerock1left.jpg",
		player_paper: "/rps_images/femalepaper1left.jpg",
		player_scissors: "/rps_images/femalescissors1left.jpg",
		countdown: "/rps_images/counttothree.png",
		opponent_avatar: "/rps_images/pickthisone.jpg",
		opponent_rock: "/rps_images/malerock1right.jpg",
		opponent_paper: "/rps_images/malepaper1right.jpg",
		opponent_scissors: "/rps_images/malescissors1right.jpg",
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
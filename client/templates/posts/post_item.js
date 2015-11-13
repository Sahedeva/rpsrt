Template.postItem.helpers({
 domain: function() {
 var a = document.createElement('a');
 a.href = this.url;
 return a.hostname;
 }
});




// Meteor.subscribe("messages");
// 	Template.messages.helpers({
// 		messages: function() {
// 			return Messages.find();
// 		}
// 	});

// <template name="messages">
// 	<ul>
// 		{{#each messages}}
// 			{{> message}}
// 		{{/each}}
// 	</ul>
// </template>

// <template name="message">
// 	<li>
// 		{{message}}
// 	</li>
// </template>

module.exports = {
	name: 'warhorn', 
	description: 'Warhorn!',
	execute(message, args, fbConnector) {
		
		FB.init({
			appId      : fbToken,
			status     : true,
			xfbml      : true,
			version    : 'v3.2' // or v2.6, v2.5, v2.4, v2.3
		  });

		  FB.login(function () {
			  FB.api(`/${fbGroupId}/feed`, 'post', 
			  {message: 'Hello, world!'});}, 
			  {scope: 'publish_actions, user_groups'}
			);

	},
};
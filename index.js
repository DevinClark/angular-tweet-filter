angular.module('twitterFilters', ['ngSanitize'])
	.filter('linkUsername', function() {
		return function(text) {
			return '<a href="http://twitter.com/' + text.slice(1) + '">' + text + '</a>';
		};
	})
	.filter('linkHashtag', function() {
		return function(text) {
			return '<a href="http://twitter.com/search/%23' + text.slice(1) + '">' + text + '</a>';
		};
	})
	.filter('tweet', function() {
		return function(text) {
            var urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
			var twitterUserRegex = /@([a-zA-Z0-9_]{1,20})/g;
			var twitterHashTagRegex = /\B#([a-z,A-Z,á,é,í,ó,ú,â,ê,ô,ã,õ,ç,Á,É,Í,Ó,Ú,Â,Ê,Ô,Ã,Õ,Ç,ü,ñ,Ü,Ñ]+)/g;

			text = text.replace(urlRegex,"<a href='$&' target='_blank'>$&</a>");
			text = text.replace(twitterUserRegex,"<a href='http://www.twitter.com/$1' target='_blank'>@$1</a>");
			text = text.replace(twitterHashTagRegex,"<a href='http://twitter.com/search/%23$1' target='_blank'>#$1</a>");

			return text;
		};
	});

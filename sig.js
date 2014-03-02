var imageSaver = require('./saveImage.js');
var config = require('./config.js');

var Twit = require('twit')
var fs = require('fs');

var twitter_config = config.get('twitter');
var T = new Twit(twitter_config);


T.get('statuses/user_timeline', { screen_name: 'aswintyv', count: 5 }, function(err, reply) {
	for(var i = 0; i< reply.length; i++){
		console.log(reply[i].text);
		imageSaver.save(reply[i].text, "aswintyv",i);
	}
	fs.writeFileSync('user_images/aswintyv/data.json', JSON.stringify(reply));
	
 
})



//imageSaver.save("hello world", 1232,1);

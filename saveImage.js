
exports.save = function(str, uid, id){
	
	var Canvas = require('canvas')
	  , canvas = new Canvas(400,30)
	  , ctx = canvas.getContext('2d')
	,Image = Canvas.Image;
	 var fs = require('fs');

	
	
	ctx.font = "12px Proxima Nova";
	var strings = wordwrap(str, 60);

	if(strings.length == 1){
		ctx.fillText(strings[0],34,19);
	}
	else{
		ctx.fillText(strings[0],34,14);
	if(strings.length == 3) strings[1] += '...';
		ctx.fillText(strings[1],34,28);
	}
	
	var base_image = new Image;
	base_image.src = 'img/twitter1.png';
	ctx.drawImage(base_image, 0, 2);
	if(!fs.existsSync('user_images/'+uid)){		
		fs.mkdirSync('user_images/'+uid);
	}
	fs.writeFile('user_images/'+uid+'/'+id+'.png', canvas.toBuffer(), function (err) {
		if(err) console.log(err);
	});

	
	function wordwrap( str, width, brk, cut ) {
		brk = brk || '\n';
		width = width || 75;
		cut = cut || false;
		if (!str) { return str; }
		var regex = '.{1,' +width+ '}(\\s|$)' + (cut ? '|.{' +width+ '}|.+$' : '|\\S+?(\\s|$)');
		return str.match( RegExp(regex, 'g') );
	}

}





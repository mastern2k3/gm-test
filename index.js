
// choco install GraphicsMagick
// set PATH=%PATH%;"C:\Program Files\GraphicsMagick-1.3.20-Q8"

var fs = require('fs');
var gm = require('gm'); // .subClass({ imageMagick: true }); // for heroku
var path = require('path');
var express = require('express');

var app = express();

app.get('/512cube.png', function (req, res, next) {

	gm(path.join(__dirname, '512cube.png'))
		.stroke('#003366' , 5)
		.fill('transparent')
		.drawPolyline([0, 0], [150, 100], [200, 250], [350, 300], [400, 450], [500, 500])
        .stream(function streamOut (err, stdout, stderr) {
			
            if (err) return next(err);
			
            res.writeHead(200, { 'Content-Type': 'image/png' }); 
			
            stdout.pipe(res);

            stdout.on('error', next);
    	});
});

app.listen(3000);

console.log("Listening on port 3000");

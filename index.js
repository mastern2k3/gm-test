
// choco install GraphicsMagick
// set PATH=%PATH%;"C:\Program Files\GraphicsMagick-1.3.20-Q8"

var fs = require('fs');
var gm = require('gm');

// resize and remove EXIF profile data
gm('C:\\Users\\nitzan.z\\Projects\\gm-test\\512cube.png')
	.stroke('#003366' , 5)
	.fill('transparent')
	.drawPolyline([0, 0], [450, 400], [500, 500])
	.write('C:\\Users\\nitzan.z\\Projects\\gm-test\\512cube-result.png', function (err) {
		
		if (!err) console.log('done');
		else console.log(err);
	});
	
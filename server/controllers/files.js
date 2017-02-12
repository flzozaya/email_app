console.log('files controller');

var mongoose = require('mongoose');
var Campaign = mongoose.model('Campaign');

var fs = require('fs');

module.exports =  {  

	create: function(req, res){
		// console.log(req.file);
		var fileName = req.file.filename;

	    var html = fs.readFileSync(__dirname+'/../../uploads/' + fileName, 'utf8');
	    fs.unlink(__dirname+'/../../uploads/' + fileName);

		res.status(200).send(html);
	}
}
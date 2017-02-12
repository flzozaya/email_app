/**
 * Created by peachteaboba on 1/22/17.
 */
console.log('server routes');


// Require the controllers
var campaigns = require('./../controllers/campaigns.js');
var files = require('./../controllers/files.js');

var multer = require('multer');
var upload = multer({ dest: __dirname + '/../../uploads/' });

// Define the routes
module.exports = function(app) {

    // User routes ===================================================
    app.get('/campaigns', campaigns.read);

    app.post('/campaigns', campaigns.create);

    app.get('/list/:id', campaigns.delete);

    app.post('/uploads', upload.single('file'), files.create);

    app.get('/campaigns/:id', campaigns.getCampaignById);


};

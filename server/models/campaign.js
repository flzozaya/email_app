/**
 * Created by peachteaboba on 1/22/17.
 */

console.log('campaign model');


// Require Mongoose
var mongoose = require('mongoose');

// Create the user schema
var CampaignSchema = new mongoose.Schema({
    name: String,
    dep_date_time: Date,
    timezone: String,
    html_artwork_upld: String,
    from_line: String,
    subject_line: String,
    mailing_list: String
}, {timestamps: true});

mongoose.model('Campaign', CampaignSchema); // We are setting this Schema in our Models as 'Customers'

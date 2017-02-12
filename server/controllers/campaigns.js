/**
 * Created by peachteaboba on 1/22/17.
 */
console.log('campaigns controller');

// Require Mongoose
var mongoose = require('mongoose');


// Require the model and save it in a variable
var Campaign = mongoose.model('Campaign');

const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'flzozaya@gmail.com',
        pass: 'Lorenzo207'
    }
});


module.exports =  {  

    create: function(req, res) {

            // setup email data with unicode symbols
            let mailOptions = {
                from: req.body.from_line + ' <flzozaya@gmail.com>', // sender address
                to: req.body.mailing_list, // list of receivers
                subject: req.body.subject_line, // Subject line
                html: req.body.html_artwork_upld // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    return console.log(error);
                }
                console.log('Message %s sent: %s', info.messageId, info.response);
            });


            var newCampaign = new Campaign({
                                        name: req.body.name, 
                                        dep_date_time: req.body.dep_date_time,
                                        timezone: req.body.timezone,
                                        html_artwork_upld: req.body.html_artwork_upld,  //htmlHandler(req.file.filename),
                                        from_line: req.body.from_line,
                                        subject_line: req.body.subject_line,
                                        mailing_list: req.body.mailing_list
                                    }); 
            newCampaign.save(function(err) {
                 if(err) {
                    console.log(err);
                    res.status(500).send(err);
                } else {
                    res.status(200).send();
                }
            });
    },
    read: function(req, res){
        Campaign.find({}, function(err, campaigns){
            if(err) {
                res.status(500).send(err);
            } else {
                res.json(campaigns);
            }
        });
    },

    delete: function(req, res){
        Campaign.remove({_id: req.params.id}, function(err, data){
            if(err) {
                res.status(500).send(err);
            } else {
                res.json(data);
            }

        });
    },


    getCampaignById: function(req, res){
        Campaign.find({_id: req.params.id}, function(err, campaign){
            if(err) {
                res.status(500).send(err);
            } else {
                res.json(campaign);
            }
        });


    }
}

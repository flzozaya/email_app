/**
 * Created by andyf on 1/22/17.
 */

app.factory('campaignFactory', ['$http', function ($http, multipartForm) {
    var factory = {};
    
    factory.getAllCampaigns = function(){
           return $http.get('/campaigns');
        }

    factory.sendCampaign = function(newCampaign, callback){
    	$http.post('/campaigns', newCampaign);
    }

    factory.delete = function(id, callback){
    	console.log(id);
    	$http.get('/list/' + id).success(function(res){
           callback();
    	});
    }

    factory.getCampaignById = function(id){
           return $http.get('/campaigns/'+ id);
        }
    return factory;
}]);

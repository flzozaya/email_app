/**
 * Created by andyf on 1/22/17.
 */

app.controller('new_campaign', ['$scope', 'campaignFactory', 'Upload', '$timeout', '$location', '$sce', function($scope, campaignFactory, Upload, $timeout, $location, $sce){
    $scope.campaigns = [];
    $scope.newCampaign = {
    	dep_date_time : new Date(),
    	timezone: 'America/New_York'
    };
	
	$scope.sendCampaign = function(){
		campaignFactory.sendCampaign($scope.newCampaign);
        $scope.newCampaign = {};
      	$location.url('/confirmation');
	}

	$scope.editorOptions = {
        lineWrapping : true,
        lineNumbers: true,
        mode: 'xml',
        // indentMore
        // placeholder: "Enter code"
    };


    $scope.uploadList = function(file, errFiles) {
    	uploadFiles(file, errFiles).then(function (response) {
                $timeout(function () {
                    $scope.newCampaign.mailing_list = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.ListerrorMsg = response.status + ': ' + response.data;
            }
            // , function (evt) {
            //     file.progress = Math.min(100, parseInt(100.0 * 
            //                              evt.loaded / evt.total));
            // }
            );

    }


     $scope.uploadHtml = function(file, errFiles) {
    	uploadFiles(file, errFiles).then(function (response) {
                $timeout(function () {
                    
                    $scope.newCampaign.html_artwork_upld = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.HtmlerrorMsg = response.status + ': ' + response.data;
            }
            // , function (evt) {
            //     file.progress = Math.min(100, parseInt(100.0 * 
            //                              evt.loaded / evt.total));
            // }
            );
    }



 	function uploadFiles(file, errFiles) {
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];

        if (file) {
            file.upload = Upload.upload({
                url: '/uploads',
                data: {file: file}
            });

            return file.upload;
        }   
    }






/* ============================================================== */
/* ================ Date Picker Settings ======================== */
/* ============================================================== */

		$scope.dateOptions = {
	    showWeeks: false,
	    startingDay: 0
  	};

}]);


app.controller('campaign_list', ['$scope', 'campaignFactory', function($scope, campaignFactory){
    $scope.campaigns = [];

    var all = function(){
    	campaignFactory.getAllCampaigns().then(function(data){
              $scope.campaigns = data.data;
        });
	}
	all();

    $scope.delete = function(id){
    	campaignFactory.delete(id, all);
    }

    $scope.show = function(id){
    	campaignFactory.show(id);
    }

}]);

app.controller('edit_campaign', ['$scope', 'campaignFactory', '$location', '$routeParams', function($scope, campaignFactory, $location, $routeParams){

		campaignFactory.getCampaignById($routeParams.id).then(function(campaign){

			$scope.newCampaign = campaign.data[0];
		}); 





}]);





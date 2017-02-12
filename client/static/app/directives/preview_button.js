angular.module('app').component('previewCampaignModal', {

	templateUrl: 'app/directives/preview_button.html', 
	transclude: true,
	controller : ['$sce', previewCampaignModalController],
	bindings : {
		html: '<',
		from: '<',
		subject: '<',
		modalId: '@',
		label: '@'
	}
});

function previewCampaignModalController($sce){
	this.$onChanges = function(changes){

		if(changes.html && changes.html.currentValue){
            this.iframeUrl = $sce.trustAsResourceUrl('data:text/html;charset=utf-8,' + encodeURIComponent(changes.html.currentValue));
		}
	} 

}
var FJApp = FJApp || new Marionette.Application();

FJApp.module('FJAppMainModule', function(module, App, Backbone, Marionette, $, _){
	module.MainAppLayoutView = Marionette.LayoutView.extend({
		tagname: "div",
		classname: "mainAppLayoutView",
		template: "#template-MainAppLayoutView",
		regions: {
			contentRegion: "#MainContentRegion"
		},
		initialize: function(){
			this.initRouter();
			App.addRegions({
				contentRegion: "#MainContentRegion",
			});	
		},
		onRender: function(){
			
		},
		initRouter: function(){
			var self = this;
			var appRouterHandler = {
				'': 'onMainPageRoute',
				'home': 'onMainPageRoute',
				'computerstuff': 'onCSRoute',
				'frankstuff': 'onFrankRoute',
				'musicreviews': 'onMusicRoute',
				'*notFound': 'onNotFoundRoute'
			};
			var appRouterController = {
				onMainPageRoute: function() {
					self.onMainPageNavigated();
				},
				onCSRoute: function() {
					self.onCSNavigated();
				},
				onFrankRoute: function() {
					self.onFrankNavigated();
				},
				onMusicRoute: function() {
					self.onMusicNavigated();
				},
				onNotFoundRoute: function() {
					console.log('ya screw up son');
				},
			};
			var MyRouter = Marionette.AppRouter.extend({});
			App.appRouter = new MyRouter({
				appRoutes: appRouterHandler,
				controller: appRouterController
			});
		},
		// onShow: function(){

		// },
		onMainPageNavigated: function() {
			var mainPageLayoutView = new MainPageLayoutView();
			this.contentRegion.show(mainPageLayoutView);
		},
		onCSNavigated: function() {
			var csLayoutView = new CSLayoutView();
			this.contentRegion.show(csLayoutView);
		},
		onFrankNavigated: function() {
			var frankLayoutView = new FrankLayoutView();
			this.contentRegion.show(frankLayoutView);
		},
		onMusicNavigated: function() {
			var musicLayoutView = new MusicLayoutView();
			this.contentRegion.show(musicLayoutView);
		},
	});
});
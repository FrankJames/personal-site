var FJApp = FJApp || new Marionette.Application();

var WritingLayoutView = Marionette.LayoutView.extend({
	template: "#template-WritingLayout",

	onShow: function() {
		twttr.widgets.load()
	}
});
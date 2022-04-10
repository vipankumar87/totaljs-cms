exports.install = function() {
	ROUTE('/*', function() {
		this.CMSpage();
	});
};

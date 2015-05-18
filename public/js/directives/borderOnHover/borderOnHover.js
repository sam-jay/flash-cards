app.directive('borderOnHover', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			element.on('mouseenter', function () {
				element.css({"border-width":"2px", "border-style": "solid"});
			});
			element.on('mouseleave', function () {
				element.css({"border-width":"1px", "border-style": "solid"});
			});
		}
	};
});
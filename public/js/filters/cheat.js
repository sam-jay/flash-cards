app.filter('cheat', function() {
	return function (answers) {
		if (!answers)
			return;
		var result = [];
		for (var i=0; i<answers.length; i++) {
			if (answers[i].correct)
				result.push(answers[i]);
		}
		return result;
	};
});
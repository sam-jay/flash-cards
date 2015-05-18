app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	
	$scope.categories = [
		'MongoDB',
		'Express',
		'Angular',
		'Node',
		'Reset'
	];

	$scope.loading = false;

	$scope.getCategoryCards = function (category) {
		$scope.loading = true;
		if (!$scope.$$phase) {
			$scope.$apply();
		}

		if (category === 'Reset') {
			$scope.currentCategory = null;
			category = null;
		} else {
			$scope.currentCategory = category;
		}
		
		FlashCardsFactory.getFlashCards(category).then(function (flashCards) {
			$scope.loading = false;
			if (!$scope.$$phase) {
				$scope.$apply();
			}
			$scope.flashCards = flashCards;
		});
	};

	FlashCardsFactory.getFlashCards().then(function (flashCards) {
		$scope.flashCards = flashCards;
	});

});
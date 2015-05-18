app.factory('FlashCardsFactory', function ($http) {
    return {
        getFlashCards: function (category) {
            return $http.get('/cards', category ? { params: { category: category } } : {}).then(function (response) {
                return response.data;
            });
        }
    };
});
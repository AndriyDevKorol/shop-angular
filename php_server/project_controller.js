angular.module('projectMao', [])

.controller('fraseManager', function ($http) {
    var FM = this;
	FM.text = "";
	FM.history = [];

    FM.save = function() {
		if (FM.text !== "") {
			$http
			.post('/api/api.php', {'command': 'save', 'data': FM.text})
			.success(function (res) {
				alert(res['msg']);
			});
			FM.history.push(FM.text);
			FM.text = "";
		}
    };

	FM.loadList = function() {
		$http
		.post('/api/api.php', {'command': 'loadList'})
		.success(function (res) {
			FM.history = res;
		});
	}

	FM.loadList();
});

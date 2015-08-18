myApp.run(function($httpBackend){
    var rules = [{rulename: 'Must be 5 characters'}, 
        {rulename: 'Must not be used elsewhere'},
        {rulename: 'Must be named corey'}];

    //returns the current list of rules
    $httpBackend.whenGET('/rules').respond(rules);

    // adds a new rule to the rules array
    $httpBackend.whenPOST('/rules').respond(function(method, url, data){
    	var rule = angular.fromJson(data);
    	console.log(data)
    	rules.push(rule);
    	return [200, rules]
    });

    $httpBackend.whenGET(/^\/templates\//).passThrough();
});
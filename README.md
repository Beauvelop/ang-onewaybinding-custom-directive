# simple-OneWayBound-custom-directive

in the dir it takes the value in, but doesn't perform a two-way binding operation.

$scope.variable --> in index.html remains what it was defined as in the controller.

$scope.variable --> in the dir's html is as it is declared in the scope object in the custom directive.

Try not to screw with this too much--You're gonna hurt yourself.

**It is suggested to default to one-way binding when using custom directives.

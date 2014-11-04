define(function ( require ) {
	var isReady = false, foobar;
	
	// note the inline require within our module definition
	require(['foo', 'bar'], function (foo, bar) {
		isReady = true;
		foobar = foo() + bar();
	});

	// we can still return a module
	return {
		isReady: isReady,
		foobar: foobar
	};
});
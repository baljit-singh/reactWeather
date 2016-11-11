function addPromise(a,b){
	return new Promise(function(resolve, reject) {
		if(typeof a === 'number' && typeof b === 'number'){
			resolve(a+b);
		}else{
			reject('A and B need to be numbers');
		}
	});
}

addPromise(3,16).then(function (sum) {
	console.log('Promise success', sum);
}, function(err){
	console.log('error', err);
});

addPromise(15,'singh').then(function (sum) {
	console.log('Promise success', sum);
}, function(err){
	console.log('error', err);
});
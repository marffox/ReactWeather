'use strict';

function getTempPromise (location) {
	return new Promise(function (resolve, reject){
		setTimeout(function () {
			resolve(79);
			reject('City not found');
		}, 2000);
	});
}

getTempPromise('Barcelona').then(function (temp) {
	console.log('promise success ', temp);
}, function (err) {
	console.log('promise error ', err);
});


//Challenge Area

function addPromise (a, b) {
	return new Promise(function (resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else {
			reject('A & B need to be numbers');
		}
	});
}

addPromise(7, 3).then(function (sum) {
	console.log('success', sum);
}, function (err) {
	console.log('error', err);
});

addPromise('rafa', 3).then(function (sum) {//la parte de success puede ser la que queramos
	console.log('Esto no deberia aparecer');
}, function (err) {//err es una palabra reservada
	console.log('Esto deberia aparecer como error:', err);
});
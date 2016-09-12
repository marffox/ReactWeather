var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function(name) {
// 	console.log('forEach', name);
// });

// names.forEach((name) => {
// 	console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!!';
// console.log(returnMe('Andrew'));

// var person = {
// 	name: 'Andrew',
// 	greet: function() {
// 		var self = this;
// 		names.forEach(function(name) {
// 			console.log(self.name + ' says hi to ' + name)
// 		});
// 	}
// }
// person.greet();

//ES lo mismo que esto (no necesitamos hacer el binding con this)

// var person = {
// 	name: 'Andrew',
// 	greet: function() {
// 		names.forEach((name) => {
// 			console.log(this.name + ' says hi to ' + name)
// 		});
// 	}
// }
// person.greet();

//CHALLENGE AREA

function add(a, b) {
	return a + b;
}

var addStatement = (a, b) => {
	return a + b;
}

var addExpression = (a, b) => a + b; //lo que esta en la misma linea no necesita poner return

console.log(addStatement(2, 5));
console.log(addExpression(3, 7));


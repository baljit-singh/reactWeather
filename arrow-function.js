// var names = ['baljit', 'mishra', 'paul', 'raj'];

// names.forEach(function(name){
// 	console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Baljit'));

// var person = {
// 	name : 'Baljit',
// 	greet : function(){
// 		names.forEach((name) => {
// 			console.log(this.name +' says hi to ' + name);
// 		});
// 	}
// };

// person.greet();

// function add(a,b){
// 	return a + b;
// }

// var addStatement = (a,b) => {
// 	return a + b;
// }
// console.log(addStatement(4, 7));

var addExpression = (a,b) => a+b;

console.log(addExpression(2,8));
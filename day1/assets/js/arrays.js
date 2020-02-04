


var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

var title= "";
var i;
for (var i=0; i<cars.length; i++) {
	title = cars[i];
	console.log(title);
}

for (var i=cars.length-1; i>=0; i--) {
	title = cars[i];
	console.log(title);
}

//cars.pop();
//cars.push('BMW');
//cars.sort();
//console.log(cars);
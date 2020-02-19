//1 1-den n-e qeder ededleri massive yigmaq

var sum = 0;
/// Tek olmani yoxlayan
function is_Odd(i) {
	if(i%2==1)
	{
		return true;
	}
	else
	{
		return false;
	} 
}
// Cut olmasini yoxlayan
function is_Even(i) {
	if(i%2==0)
	{
		return true;
	}
	else
	{
		return false;
	} 
}


function generateValues() {
	var myArray = [];
	for (var i = 1; i <=100; i++) {
		myArray.push(i);
	}
	return myArray;
}


function oddNumber() {
	var array = generateValues();
	var odd   = [];
	for (var i = 0; i < array.length ; i++) {
		if(is_Odd(array[i]))
		{
			odd.push(array[i]);
		}
	}
	return odd;	
}


function evenNumber() {
	var array = generateValues();
	var even   = [];
	for (var i = 0; i < array.length ; i++) {
		if(is_Even(array[i]))
		{
			even.push(array[i]);
		}
	}
	return even;
}

function sumNumber() {
	var array = generateValues();
	var sum = 0;
	for (var i =0 ; i<array.length; i++) {
		sum+=array[i];
		//sum = sum+array[i];
	}
	return sum;
}

console.log(oddNumber());
console.log(evenNumber());
console.log(sumNumber());





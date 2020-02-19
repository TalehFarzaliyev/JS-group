//bolenleri tapan funksiya
function is_divisor(a,b) {
	if(a%b==0){
		return true;
	}
	else{
		return false;
	}
}
//sade murekkebliyi teyin eden funksiya
function is_prime(counter)
{
	if(counter<=2)
	{
		console.log('bu eded sadedir!');
	}
	else
	{
		console.log('bu eded murekkebdir!');
		console.log(divisors);
	}
}

var n = prompt("Ededi daxil edin!");
var counter = 0;
var divisors = [];
for (var i = 1; i <= n; i++) {
	if(is_divisor(n,i))
	{
		divisors.push(i);
		counter++;
	}
}

is_prime(counter);
console.log(counter);
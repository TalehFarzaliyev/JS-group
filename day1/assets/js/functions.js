var url = 'https://facebook.com';

function swap_numbers(p1, p2, url)
{
	p1 = p1+p2; 
	p2 = p1-p2; 
	p1 = p1-p2;
	console.log(url);
	return 'First value is '+p1+' Second value is'+p2; 
}

console.log(url);
var len = prompt();
var myarr= [];
for(var i =0; i<len; i++)
{
	myarr[i] = prompt();
}
myarr = myarr.sort();
console.log(myarr);
console.log(myarr[0]);
console.log(myarr[len-1]);
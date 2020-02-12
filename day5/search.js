let arr=[];
let day=prompt("Ayin uzunlugunu daxil edin!");
for (var i=1;i<=day;i++){
    arr.push(i);
};

console.log(arr)

//7
function binarySearch(arr,birthday){
    let start = 0;
    let end   = arr.length-1; //31-1->30
    let step  = 0;
    
    while(start<=end)
    {
        let mid = Math.floor((start+end)/2); //15
        step++;
        if(arr[mid]==birthday)
        {
            return step;
        }
        else if(arr[mid]<birthday){
            start=mid+1;
        }
        else{

            end = mid-1;
        }
    }

    return step
}
console.log(binarySearch(arr,21))
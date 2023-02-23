 let arr=[1,2,3,4,6]
n=arr.length;

function sum(arr,n)
{
if(arr.n==0)
{
    return arr[0];
}
else
{
    return arr[n]+sum(arr[n-1],n--);
}
}
let addition=sum(arr,arr.length-1);
console.log(addition);
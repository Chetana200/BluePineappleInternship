 let arr=[1,2,3,4,6]
n=arr.length;

function sum(arr,n)
{
if(n==0)
{
    return arr[0];
}
else
{
    return arr[n]+sum(arr,--n);
}
}
let addition=sum(arr,arr.length-1);
console.log(addition);

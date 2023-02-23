
class Stack {

	
	constructor()
	{
		this.stack = [];
	}

}    
push(element)
{
	
	this.stack.push(element);
}


pop()
{
	
	if (this.stack.length == 0)
		return "Underflow";
	return this.stack.pop();
}


peek()
{
	return this.stack[this.stack.length - 1];
}

isEmpty()
{
	
	return this.stack.length == 0;
}
// printStack function
printStack()
{
	var str = "";
	for (var i = 0; i < this.stack.length; i++)
		str += this.stack[i] + " ";
	return str;
}


search(element)
{
    for(i=0;i<this.stack.length;i++)
    {
        if(this.stack[i]==element)
        {
            return i;
        }
    }
    
}

var s1 = new Stack();


console.log(s1.isEmpty());
console.log(s1.pop());

s1.push(10);
s1.push(20);
s1.push(30);


console.log(s1.printStack());

console.log(s1.pop());

console.log(s1.printStack());
console.log(s1.peek());
console.log(s1.printStack());
console.log(s1.search(10));

	


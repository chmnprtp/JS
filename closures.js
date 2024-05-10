function x()
{
    var a = 31;
    function y()
    {
        console.log(a);
    }
    return y;
}

var z = x();
console.log(z);
z();



/* 1.  Function bundled with its lexical environment is known as a closure. 
2.  Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its   not just that function alone it returns but the entire closure and that's where it becomes interesting.
 */
/* 
Uses of Closures
- Model Design Pattern
-Currying
-Functions like once
-Memoize
-Maintaining state in async world
-setTimeout
-Iteration
-and many more */
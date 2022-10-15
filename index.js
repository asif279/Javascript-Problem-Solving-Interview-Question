//factorial using for loops and while loop using javascript
/*function factorial(n){
    

    // for(var i=1;i<=n;i++){
    //      factorial =factorial *i;
    var i=1;
    var factorial=1;
    while(i<=n){
        factorial =factorial *i;
        i++
    }
    return factorial;
    }
  

var result = factorial(15); 


console.log(result);

//factorial using recursive way
function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }

}
var result = factorial(5);
console.log(result);

// Fibonaci Series
function fibonacci(n){
    var fibo=[0,1];
    for(var i =2;i<=n;i++){
       fibo[i]= fibo[i-1] + fibo[i-2];
    }
    return fibo;
  
}
var result = fibonacci(10);
console.log(result);


//Fibonacci Element in a Recursive Way
function fibonacci(n){

if(n== 0 ){
 return 0;
}
if(n == 1){
    return 1;
}

else{
    return fibonacci(n-1)+fibonacci(n-2);
}
 
}
var result = fibonacci(10);
 console.log(result);
 
// Fibonacci series in a recursive way
function fibonacci(n){
  if(n==0){
    return [0];
  }
  else if(n == 1){
    return [0,1];
  }
  else {
    var fibo = fibonacci(n-1);
    var nextElement = fibo[n-1] + fibo[n-2];
    fibo.push(nextElement);
    return fibo;
  }
}
var result = fibonacci(10);
 console.log(result);
 
 //Check whether a number is a Prime Number or not
 

function isPrime(n){

    for(var i=2;i<n;i++){
        if(n%2==0){
            return 'Not a Prime Number';
        }
    }
    return 'Your Number is a Prime Number';

}
var result =isPrime(13);
 console.log(result);
*/


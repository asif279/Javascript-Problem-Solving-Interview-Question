//Swap variable
/*function swapVariable(num1,num2){
    //5,7
   
   //wuth Temporary variable
    /* var temp = num1;//5
    num1= num2;// b=5
    num2= temp;*/
    /*
    //swap without temp
    num1= num1 +num2;
    num2 =num1-num2;
    num1= num1-num2;

    */
   /*
   Destructing Javascript Method
   [num1,num2] =[num2,num1];
   */
/*

    return [num1 ,num2
    ];
}
var result = swapVariable(5,7);
 console.log(result);
 
 // destructing
*/
// Find max of two values
/*function FindMax(num1,num2){

    if(num1>num2){
        return num1;
    }
    else if(num1<num2){
        return num2;
    }
    else{
        return 'Number is Equal';
    }
}

var result = FindMax(5,5);
console.log(result);*/
//Find max of three values
/*function FindMax(num1,num2,num3){

    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num1<num2 && num3<num2){
        return num2;
    }
    else if(num1<num3 && num2<num3){
        return num3;
    }
    else{
        return 'Number is Equal';
    }
}

var result = FindMax(4,4,7);
console.log(result);*/


//Find the largest element of an array


// JavaScript program to find
// maximum in arr[] of size n

         /* function largest(array) {
        
      var maximum = array[0];

            for (var i = 1; i < array.length; i++) {
                if (array[i] > maximum){
                    maximum = array[i];


                }
                    
            }
            
        return maximum;
    }

        var arra = largest([10, 324, 45, 90]);
        console.log("Largest in given array is " , arra);*/



//Sum of all numbers in an array

/*function SumOfArray(arra){

    var sum =0;
     for (var i = 0; i < arra.length; i++){
      var element = arra[i];
      sum = sum + element;
    }
    return sum;

}
 var result = SumOfArray([ 10,324, 45, 90]);
console.log("sum = ",result);*/

//Remove duplicate item from an array

/*function getUnique(a){
    var uniqueArray = [];
    
    for(i=0; i < a.length; i++){
        if(uniqueArray.indexOf(a[i]) === -1) {
            uniqueArray.push(a[i]);
        }
    }
    return uniqueArray;
}

var names =getUnique(["John", "Peter", "Clark", "Harry", "John", "Alice"]) ;

console.log(names); */

//Word Count of String

/*function CountWordString(word){

    var count = 0;
    for(var i=0;i<word.length;i++){
        var char = word[i];
        if(char == " " && word[i-1] != " "){
            count++
        }

    }

count++
return count;
}

var result =  CountWordString("I will kill you my dear Love Fuck You babe");
console.log(result);*/



//Reverse a string
/*function ReverseString(str){

    var reverse ="";
    for(var i=0;i<str.length;i++){
        var char =str[i];
        reverse = char + reverse;

    }
    return reverse;

}
var result =  ReverseString("I want to be a professional web developer");
console.log(result.toUpperCase());*/


//Travelling in a Jungle and counting wild animals
function ZooanimalCount (depth) {
    var animal = 0;
    if(depth <= 10){
        animal = depth * 50; 
    }
    else if(depth <= 20){
       var  mile = depth - 10;
        var firstPart = 10 * 50;
        var secondPart = mile * 100;
        animal = firstPart + secondPart;
    }
    else{
       var mile = depth - 20;
        var firstPart = 10 * 50;
        var secondPart = 10 * 100;
        var finalPart = mile * 200;
        animal = firstPart + secondPart + finalPart;
    }
    return animal;
}
var animall = ZooanimalCount(10);
console.log(animall);
        
    




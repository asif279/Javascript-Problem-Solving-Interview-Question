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

function getUnique(a){
    var uniqueArray = [];
    
    for(i=0; i < a.length; i++){
        if(uniqueArray.indexOf(a[i]) === -1) {
            uniqueArray.push(a[i]);
        }
    }
    return uniqueArray;
}

var names =getUnique(["John", "Peter", "Clark", "Harry", "John", "Alice"]) ;

console.log(names); 


        
    




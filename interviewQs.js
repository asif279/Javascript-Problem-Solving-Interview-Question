//Swap variable
function swapVariable(num1,num2){
    //5,7
    var temp = num1;//5
    num1= num2;// b=5
    num2= temp;

    return [num1 ,num2
    ];
}
var result = swapVariable(5,7);
 console.log(result);
 //swap without temp
 // destructing

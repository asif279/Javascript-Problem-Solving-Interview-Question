 //kiloMeterToMeter
    function kiloMeterToMeter(meter){
  
        var km = 1000* meter;

        return km;
    }
    var result = kiloMeterToMeter(50.5);
    console.log(result);

    //budgetCalculator
    function budgetCalculator(watch,phone,laptop){

        //50,100,500
        watch = watch *50;
        phone = phone *100;
        laptop= laptop *500;

         var total = watch +phone+laptop;

         return total;


    }
    var result = budgetCalculator(5,10,2);
    console.log(result);

     //hotelCost
    function hotelCost(Day){

        if(Day<=10){

            return Day *100;
        }
 else if(Day<=20){
    var  Rest20 = Day - 10;
   return (10*100) + (Rest20*80);


 }
 else if(Day<100){
    var  Rest2 = Day - 20;

    return (10*100) + (10*80) + (Rest2*50);
 }

    }
    var result =hotelCost(32);
    console.log(result);


    //megaFriend
    function megaFriend(friend){

        var leh = 0;
        var longest;

        for (var i = 0; i < friend.length; i++){

            if(friend[i].length>leh){
                var leh = friend[i].length;
                longest =friend[i];
            }
        }
        return longest;
    }
    var result = megaFriend(["AsifMahmud","Joh","JemsBond"]);
    console.log(result);


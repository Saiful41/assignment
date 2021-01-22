

//kilomitarTometers

function kilometerToMeter(km){
    var metres = km*1000;

    if(km >= 0){
        return metres;
    } 
    else{
        
        return "Eror"
    }
}

//budgetCalculator

function budgetCalculator(watch,phone,laptop){
    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    var totalCost = watchCost + phoneCost + laptopCost;
    if(watch >=0 && phone >= 0 && laptop >= 0){
        return totalCost;
    }
    else{
        return "Error";
    }
}
 
//hotelCost

function hotelCost(day){
    var taka = 0;
    if(day <= 10){
        taka = day * 100;
    }
    else if(day <= 20){
        firstTenDay = 10 * 100;
        var remain = day - 10;
        var secondTenDay = remain * 80;
        taka = firstTenDay + secondTenDay;
    }
    else{
        firstTenDay = 10 *100;
        secondTenDay = 10 * 80;
        remain = day - 20;
        var lastTenMore = remain * 50;
        taka = firstTenDay + secondTenDay + lastTenMore;
    }
    if(day >= 0){
        return taka;
    }
    else{
        return "Error";
    }
    
}


//margeFriend

 function margeFriend(n){
     var largeName = frndNames[0].length;
     for(var i = 0; i < frndNames.length; i++){
        var element = frndNames[i];
         if(element.length > largeName){
             largeName = element;
         }
     }
     return largeName;
 }
 var frndNames = ['koklomuddin','solo','solomuddinkhan','teramia'];
 var bigName =margeFriend(frndNames);
console.log(bigName);
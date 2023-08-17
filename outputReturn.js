function payMilk(bootle){

    var milkBootle = bootle * 3;
    console.log("your Milk" + milkBootle);

}

payMilk(18);

function payMilk(bootle, cost){
    

    console.log("U have Milk " + allMilk(bootle, cost));

    return returnMilk(bootle, cost);
    
}

function allMilk (starMilk, costMilk){
    
    var allBootle= Math.floor(starMilk * costMilk);

    return allBootle;
}

function returnMilk (starMilk, costMilk){
    var changeMilk = starMilk % costMilk;
    return changeMilk;
}


payMilk(9, 1.5)
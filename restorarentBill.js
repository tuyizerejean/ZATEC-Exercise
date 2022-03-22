
function restaurentBill( customerName,dishName){
    const dishes={
        price:10,
        ingredient:"eggs",
        serving:500
    }
    let billPrice=dishes.price*dishes.serving
    // console.log("Bill price is equal:",billPrice)
    let taxValue
    if(billPrice<=100)
    {
     taxValue=(billPrice*15)/100
    }
    else{
         taxValue=(billPrice*20)/100 
    }
    let tortalBill=billPrice+taxValue;
    let waitTip= (tortalBill*10)/100 
    console.log(`Thank you Mr/Mrs ${customerName} for dinning with us!. Your bill is as follows:
    Tortal Price:RWF${tortalBill}(Incl Tax of${taxValue} ) and you have tipped the waiter RWF ${waitTip}`)
}
restaurentBill("Pulman Marcus","Butter chicken")
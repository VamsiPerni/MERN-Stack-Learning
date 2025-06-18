console.log("Hello from part-2");

// 

// let juice = 50;
// let gstOnJuice = 0.1;
// let fries = 70;
// let gstOnFood = 0.05;

// let juiceBillAmount = (juice+juice*gstOnJuice);
// let friesBillAmount = (fries+fries*gstOnFood);

// const finalBill = juiceBillAmount + friesBillAmount;
// console.log("FinalBill :",finalBill);

// -----------------------------------------------------------------------

// Examples for function :- 

// let age = 21;
// console.log("START",age);

// function calculateJuiceBillAmount()
// {
//     let juice = 50;
//     let gstOnJuice = 0.1;
//     let juiceBillAmount = (juice+juice*gstOnJuice);
   
//     console.log(juiceBillAmount);
// }
// console.log("MID")
// calculateJuiceBillAmount();
// console.log("END");


// function calculateFoodBillAmount()
// {
//     let fries = 70;
//     let gstOnFood = 0.05;
//     let friesBillAmount = (fries+fries*gstOnFood);

//     console.log(friesBillAmount);
// }
// calculateFoodBillAmount();

// -----------------------------------------------------------------------

// Example for the parameters and Arguments :- 

// 
function calculateJuiceBillAmount(juice) // parameters
{
    let gstOnJuice = 0.1;
    let juiceBillAmount = (juice+juice*gstOnJuice);
   
    console.log(juiceBillAmount);
}
calculateJuiceBillAmount(50);

// 
function calculateBillAmount(bill,gst) // parameters
{
    let billAmount = (bill+bill*gst);
    console.log(billAmount);
}
calculateBillAmount(60,0.1);

// returning the value from the function
function calculateBillAmount(bill,gst) // parameters
{
    let billAmount = (bill+bill*gst);
    return billAmount;
}

let res1 = calculateBillAmount(60,0.1);
printBill("Mango Juice",res1);

const res2 = calculateBillAmount(50,0.2);
printBill("Apple Juice",res2);

const res3 = calculateBillAmount(40,0.01);
printBill("Lemon Juice",res3);

function printBill(name,amount)
{
    console.log("Your bill for",name+" is Rs.",amount);
}

// We have declared the function in Rs before but someone has re-written the function with the dolor and i need bill amount in Rs but it is giving in $ then it is a error , so beacuse of these kind of erros we will not use the function keyword , instead of that we will use another keyword
function printBill(name,amount)
{
    console.log("Your bill for",name+" is $",amount);
}

// -----------------------------------------------------------------------

//2.Function Assignmnet (named Function)

const printBill = function printBillcsdcs(name,amount)
{
    console.log("Your bill for",name+" is $",amount);
}

// practise this and HTML module ()


//3.Function Assignment (Anonymous Function)








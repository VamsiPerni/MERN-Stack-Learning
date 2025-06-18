// -------------------------------------------------------------------------

// 3.Third type functions ->  Function Assignment(Anonymous Funtion)
// const printBill = function (price,)
// {
//     console.log("Rs.",price);
// }

// 4.Fourth type of function (Arrow Funtion)

// const printBill = (finalPrice) => {
//     console.log("Rs.",finalPrice);
// }

// -->> Example Question :-
// that will take base amount food , clothes , drinks and console the final amount

const printBill = (finalPrice) => {
  console.log("Rs.", finalPrice);
};

const calculateBillAmountForFood = (price) => {
  return price * 1.05;
};

const calculateBillAmountForClothes = (price) => {
  return price * 1.8;
};
const calculateBillAmountForDrinks = (price) => {
  return price * 0.5;
};

const calculatingBill = (food, clothes, drinks) => {
  const foodAmount = calculateBillAmountForFood(food);
  const clothesAmount = calculateBillAmountForClothes(clothes);
  const drinksAmount = calculateBillAmountForDrinks(drinks);

  const finalAmount = foodAmount + clothesAmount + drinksAmount;
  printBill(finalAmount);
};
calculatingBill(80, 120, 60);

// -->> Call back function

// Higher Order Function -->
// The function which accepts another functon as a parameter OR return a fucntion
// the function which is able to accept the arguments into the funstion wil be known as Higher Order Function

const printBillForFood = (txt) => {
  console.log("total amount for food is", txt);
};
const printBillForFoodAndDrinks = (txt) => {
  console.log("total amount for food  and drinksis", txt);
};
const printBillForAll = (txt) => {
  console.log("total amount for all is", txt);
};

const finalBillAmount = (food, cloths, drinks, printer) => {
  //HoF
  const foodAmount = calculateBillAmountForFood(food);
  const clothsAmount = calculateBillAmountForCloths(cloths);
  const drinksAmount = calculateBillAmountForDrinks(drinks);

  const finalAmount = foodAmount + clothsAmount + drinksAmount;

  printer(finalAmount);
};

finalBillAmount(100, 400, 100, printBillForAll); // printBillForAll is a callback
finalBillAmount(100, 0, 100, printBillForFoodAndDrinks); // printBillForFoodAndDrinks is a callback
finalBillAmount(100, 0, 0, printBillForFood); // printBillForFood is a callback

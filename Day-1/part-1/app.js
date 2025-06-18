window.console.log("Hello from JS!")

// let , const OR var(is got old)

// let age = 30;
// const year = 2025;
// var block = 33;
// // const name = "Vamsi Perni";
// console.log(age,year,block);

// ------------------------------------------------------------------------

// -->>     var function                        let                        const
    // access before initialization             --                          --
    // re-declaration                           --                          --
    // re-assignment                         re-assignment                  --

// console.log(block);
// console.log(age);

// // super-power of var 
// var age = 21;   // declaration & Initialization
// console.log(age);

// var age = 22; //re-declaration
// console.log(age);

// ------------------------------------------------------------------------

// -->> let function

// how does the program executes ?
// Memory allocation -> Execution

    // Example :- 

    // let age = 21; (Memory Allocation)
    // console.log("START",age);

    // function calculateJuiceBillAmount() (Memory Allocation)
    // {
    //     let juice = 50;
    //     let gstOnJuice = 0.1;
    //     let juiceBillAmount = (juice+juice*gstOnJuice);
    
    //     console.log(juiceBillAmount);
    // }
    // console.log("MID")
    // calculateJuiceBillAmount();
    // console.log("END");




// we cannot re-declare and we cannot access bofore the declaration in let from var

// console.log(age); // TDZ(temporal dead zone)
// let age = 22; // declaration & initialization

// console.log(age);


// ------------------------------------------------------------------------


// console.log(age); // TDZ(temporal dead zone)
// let age = 22; // declaration & initialization
// console.log(age);

// age = 23;   // re-declaration
// console.log(age);

// ------------------------------------------------------------------------

// Operators in Java Script 

// + can do arithmetic addition and string concatenation
console.log(1+1);
console.log('1'+1);
console.log(1+'1');
console.log('1'+'1');

// - can do arithmetic subtraction
console.log(1-1);
console.log('a'-1);
console.log(1-'a');
console.log('1'-'a');
 
// * can do arithmetic multiplication
console.log(1*1);
console.log('a'*1);
console.log(1*'a');
console.log('a'*'1');

// / can do arithmetic division
console.log(1/1);
console.log('a'/1);
console.log(1/'a');
console.log('1'/'a');


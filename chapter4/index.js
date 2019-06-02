/*
*   Example 1 - variable declaration
*/

// var a;

// console.log(a); //undefined

// // console.log(b); //ReferenceError: b is not defined

// let c;

// console.log(c); //undefined

// const d;  //Uncaught SyntaxError: Missing initializer in const declaration

/*
*   Example 2 - var
*/

// //declaration
// var a;

// console.log(a);
// //assignment
// a = "I am learning";
// console.log(a);

// // re-assignment
// a = "learning java script";
// console.log(a);

/*
*   Example 2 -let 
*/

//declaration
// let a;

// console.log(a);
// //assignment
// a = "I am learning";
// console.log(a);

// // re-assignment
// a = "learning java script";
// console.log(a);

/*
* Example 4 - Const
*/

// const a = 2;
// console.log(a);
//  a =3; //Assignment to constant variable.
// const a = 3; //Identifier 'a' has already been declared


// /*
// *   Challenge 1 
//     dexlare a variable "myObject"
//     and assign a value {}
//     Note: it will not be reassigned
// */

// const myObject = {};

// console.log(myObject);

// myObject = {}; //TypeError: Assignment to constant variable.

/*
* challenge 2

    Declare x and assign value 10
    Declare y and assign value true
    Declare my object which has three key value pairs
    {a: 10, b: true, __proto__: object}

    Declare another variable anotherObject
    {
        a:20,
        b:true,
        c:{a: 10, b: true, __proto__}
        __proto__
    }
*/
    // let x = 10;
    // const y = true;
    // const myObject={};
    // myObject.a = x;
    // myObject.b = y;

    // console.log(myObject);

    // x = x +10;
    // let anotherObject = {};
    // anotherObject.newA = x;
    // anotherObject.newB = y;
    // anotherObject.c = myObject;

    // console.log(anotherObject);

/*  
    11
*/

var jai;

jai = null; // type object

console.log(typeof(jai));

jai = 15;
console.log(typeof(jai));
jai = true;
console.log(typeof(jai));

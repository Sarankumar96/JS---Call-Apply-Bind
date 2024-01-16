// Call : When we use a method again and again in objects and instead of writing the method name again and again we use Call method, as JavaScript follows DRY (Don not repeat yourself )approach.

// let person1 = {
//     firstName: 'saran',
//     lastName: 'kumar',
//     age: 25,
//     printDetails: function () {
//         console.log(`Hi i am ${this.firstName} ${this.lastName} and i am ${this.age} years old`);
//     }

// }
// person1.printDetails();

// let person2 = {
//     firstName: 'Satish',
//     lastName: 'Premi',
//     age: 55,
    // printDetails: function () {
    //     console.log(`Hi i am ${this.firstName} ${this.lastName} and i am ${this.age} years old`);

    // }
// };

// let person3 = {
//     firstName : 'Saran',
//     lastName : 'Premi',
//     age:26
// }

// person1.printDetails.call(person2);   // Syntax to use call method -> name fo the object.methodname.call(name of the object for which we want to run that method )
// person1.printDetails.call(person3);

// let person4 = {
//     firstName : 'Saran',
//     lastName : 'Saran',
//     age:26,
// }

// person1.printDetails.call(person4);

// using call method with multiple parameters and arguments

// let person1 = {
    //     firstName : 'saran',
    //     lastName : 'kumar',
    //     age : 26
    
    // }
    
    // let person2 = {
    //     firstName :'satish',
    //     lastName :'premi',
    //     age : 55
    // }
    
    // let printDetails = function (){
    //     console.log(`My name is ${this.firstName} ${this.lastName} and my age is ${this.age}`);
    // }
    
    // printDetails.call(person2); 
    // printDetails.call(person1);
    
    // using parameter and argument
    
    let person1 ={
        firstName :'Saran',
        lastName : 'Kumar',
        age : 26,
    }
    
    let person2 ={
        firstName : 'Satish',
        lastName : 'kumar',
        age : 55
    }
    
    let printDetails = function(city, state){     // defining the parameter here
        console.log(`My name is ${this.firstName} ${this.lastName}, my age is ${this.age} and i am from ${city}, ${state}` );
    }
    
    printDetails.call(person1, 'Rajpura','Punjab');    // passing the argument 




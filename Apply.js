// Apply - In apply we use a function in objects 

// / let person1 = {
//         firstName : 'saran',
//         lastName : 'kumar',
//         age : 26
    
//     }
    
//     let person2 = {
//         firstName :'satish',
//         lastName :'premi',
//         age : 55
//     }
    
//     let printDetails = function (){
//         console.log(`My name is ${this.firstName} ${this.lastName} and my age is ${this.age}`);
//     }
    
//     printDetails.call(person2); 
//     printDetails.call(person1);
    
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
    
    let printDetails = function(city, state, country){     // defining the parameter here
        console.log(`My name is ${this.firstName} ${this.lastName}, my age is ${this.age} and i am from ${city}, ${state}, ${country}` );
    }
    
    // printDetails.call(person1, 'Rajpura','Punjab');    // passing the argument 
    // printDetails.apply(person1,['rajpura','punjab']);

    // when we put arguments in an array the that is known as apply method 


    // Bind Method 
    let myFun = printDetails.bind(person1, 'Rajpura', 'Punjab', 'India'); // storing function in a variable named myFun

    console.log(myFun);
    myFun();
     
    // This works same as call method but one added advantage of using bind method is that ot stores the function in a varibale and we can call it when we want.

    
//asynchronous function is a function that does not block the 
// execution of other code while it is running.

function fun1(){
    setTimeout(() => {
      console.log("Function 1 executed");
    }, 100);
}   

  function fun2(){
    console.log("Function 2 executed");
  }
fun1();
fun2();

///Error Handling in Asynchronous Functions is done using try-catch blocks
//try is used to wrap the code that may throw an error,
//and catch is used to handle the error if it occurs.
//catch block will only execute if an error is thrown in the try block.
//FINALLY block is used to execute code after try and catch, regardless of the outcome.

try{
    setTimeout(() => {
        console.log("This is inside try block");
    }, 1000);
}
catch(error){ //whats is error here? 
// answer: error is an object that contains information about the error that occurred. 
    
    console.error("Error caught:", error);
}   
finally{
    console.log("Execution Always done .");
}   

//give error code here
console.log("This will run regardless of the error above.");

const hello2 = "Hello, World!"; // Define the variable
    console.log(hello2);

//The above code will not catch errors that occur inside the setTimeout callback,
//because the callback runs asynchronously after the try block has completed.   
//To handle errors in asynchronous code, you need to use error handling
// mechanisms specific to the asynchronous operation, such as Promises or async/await.



//Example using Promises with error handling
/*function asyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // Random success or failure   
            if (success) {
                resolve("Operation succeeded");
            } else {
                reject("Operation failed");
            }
        }, 1000);
    });
}
asyncOperation()
    .then(result => {
        console.log(result);
    }
    )
    .catch(error => {
        console.error("Error caught in Promise:", error);
    });*/

  

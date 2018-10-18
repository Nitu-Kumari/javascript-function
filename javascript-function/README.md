# Function
function is a reusable block of code.

How to function creation?
function greet() {
  console.log("Hello, World!");
}

# Question
Time to write your own function. Write a function that is called "sayMyName". Inside, write a console.log() statement that says "My name is Ada", but use your own name.
Ans
function sayMyName(){
    console.log("nitu");
}
sayMyName();


# Question
Recall your sayMyName function from before. It should say "My name is Ada", but with your name. It can currently only say your name though. Let's upgrade it to allow it to say anyone's name, and let's have it return instead of logging.

Add a parameter to your function to allow it to use anyone's name
Use string concatenation to append the name to the string "My name is ".
return the new string.

ANS   
function sayMyName(){
    return "My name is"+ name
}
sayMyName("nitu");


# Question
We're going to write a function that takes multiple parameters. One for your name, and one for your title.

Write a function called formalGreeting that takes two parameters.
The first parameter should be a string, name
The next parameter should be a string, title
return a string that is formatted like so: "My name is Rear Admiral Grace Hopper"
ANS

function formalGreeting(name,title){
    return "My name is"+title+name
}
formalGreeting("Grace Hopper","Rear Admiral");

# The keyword arguments
following behavior:
the keyword arguments exists only inside of a function
the keyword arguments is array-like, which means it has some functionality of an array, such as length, but not others (such as .join).


# Question
What if you want your exponent to be 0? Rewrite the function so that it can take 0 as an exponent.

function power(base, exponent) {
  var exponent = exponent || 0;
  var result = 1;
  for (var count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
console.log(result);




// the loops- they are used to repeat actions multiple times- loops will only be executed once the condition is true
// while (condition){
//       loop body
// }

let i = 0;
while(i<3){
    alert(i);
    i++;
}
alert('the loop has ended')

// While Loop
let i = 5;
while (i) {
  alert(i);
  i--;
}
alert("the loop has ended");

// Do While Loop- the condition check can be moved below the loop body, using the do-while loop, this is the only difference between while and fo while loop
// do while loop will execute the code on time even if the condition is false, because the do while loop will execute the code first before checking the condition

let i = 3;
do{
    alert(i);
    i--;
} while(i>3);
alert('loop has ended')

let i = 0;
do{
    alert(i);
    i++;
} while(i<3);
alert('loop has ended')

// for loop- this is the most important type of loop that is used in any programming language, and known as the most complex
for (begin; condition; increment/decrement){
    ...
}

for (let i=0; i<3; i++){
    alert(i)
}
alert('loops has ended')

// shortening the for loop- when shortening the for loop, the semi colon needs to be included for the compiler to understand the code
let i = 0;
for (; i<3; i++){
    alert(i)
}
alert('loops has ended')

// using the break keyword- the break is used to stop the loop and output the loop body once the condition has been met.
let sum = 0;
while (true){
    let value= +prompt('enter a number', '')
    if(!value) break;
    sum += value;
}
alert('sum' + sum);

// using the continue keyword- this is used to continue the loop until the final condition in met e.g
for(let i=0; i<10; i++){
    if(i%2 == 0) continue;
    alert(i)
}
alert('the loop has now ended')
 
//the break or continue keyword should not be applied to a ternary operator

for (let i=0; i<3; i++){
    for(let j=0; j<3; j++){
    let input = prompt(`value at coords (${i}, ${j})`, '')
    }
} alert('Done here')

// label, is used to break out a loop condition when cancelled
labelName: for (...){...}
outer: for (let i=0; i<3; i++){
    for(let j=0; j<3; j++){
    let input = prompt(`value at coords (${i}, ${j})`, '')
    if(!input) break outer;
    }
} alert('Done here')
//in cases where we have a nested loop, the label break is used to terminate the parent loop operation given the example above by using a label name to call out the break

// loop examples- find the prime number without function

const number = parseInt(prompt("enter a positive No > 1:"));
let isPrime = true;

if (number === 1){
    alert('1 is neither a prime nor a composition no')
}
else if(number>1){
    for(let i=2; i<number; i++){
        if(number%i==0){
            isPrime=false;
            break;
        }
    }
    if (isPrime){
        alert('The number is a prime No')
    } else {
        alert('The Number is not a prime No')
    }
}
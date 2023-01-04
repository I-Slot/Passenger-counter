







// alert("connected")
// document.getElementById("count-el").innerHTML = 10;

// Variables

// let firstBatch = 5;
// let secondBatch = 7;

// let count = firstBatch + secondBatch;

//Reassigning 
// let count = 5;
// count = 3;

// // count +1
// count = count + 1;
// intialize the count as 0
let count = 0;
// listen for clicks on the increment button
function increment() {
    count += 1;
    document.getElementById("count-el").innerHTML = count
    
}
increment()

let saveEl = document.getElementById("save-el");
function save() {
    let countDash = count + " - ";
    // saveEl.innerHTML = saveEl.innerHTML  +  countDash;
    saveEl.textContent += countDash
    document.getElementById("count-el").innerHTML = 0
    count = 0
}

save()

// increment the count variable when the button is clicked
// console.log(increment())
// change the count-el in the HTML to reflect the new count
// document.getElementById("count-el").innerHTML = 
// increment()


// console.log(count)


// console.log(count);

// 1. Create a variable, myAge, and set its value to your age
// let myAge = 20;
// 2. Log the myAge variable to the console
// console.log(myAge);

//Mathematical Operators (+, - * /)


// 1. Create two variables, myAge and humanDogRatio

// let myAge = 30;
// let humanDogRatio = 7;
// // 2. Multiply the two together and store the result in myDogAge 
// let myDogAge = myAge * humanDogRatio;
// 3. Log myDogAge to the console
// console.log(myDogAge)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.

// let bonusPoints = 50;
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// // Decrease it down to 25, and then finally increase it to 70
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber;
// Start coding here
minNumber = [];

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] < numbers.length) {
        minNumber.push(numbers[i]);;
    }
}

console.log(minNumber);
const  numbers = [57, 64, 78, 89, 90, 100, 110, 120, 130];

const  reverse = []
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
//     // reverse.push(numbers[i]);
//     reverse.unshift(numbers[i]);
// }

// console.log(reverse.join(", "));

// for(let i = numbers.length - 1; i >= 0; i--){
//     console.log(numbers[i]);
//     reverse.push(numbers[i]);
// }

for (const num of numbers){
    reverse.unshift(num);
}

console.log(reverse.join(", "));

// console.log(numbers);
// numbers.reverse();
// console.log(numbers);
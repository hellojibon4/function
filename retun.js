function tenTimes (number){
    const result = number * 10;
    return result;
}

function cutHalf (number){
    const half = number  / 2;
    return half;
}

tenTimes(5);
cutHalf(10);

const output = tenTimes(5);
console.log("The result of tenTimes(5) is:", output);

let price = 23;
let comp_price = price;

comp_price = 13
price = 45

console.log(price);
console.log(comp_price);


const prices = [ 12, 43, 56]
const comp_prices = [];
// const comp_prices = prices;


for (const price of prices) {
    comp_prices.push(price);
}

comp_prices[0] = 100;
prices[1] = 23;

console.log(prices);
console.log(comp_prices);



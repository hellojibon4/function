const price = 300; //number
console.log(price);
const name = "my name is jibon"; //string
console.log(name);

const isPoor = false; //boolean

const friends = ["jibon", "rahim", "karim"]; //array of strings 
const student = {class: 10, Name: "jibon", age: 18, address: "dhaka"}; //object

if (price > 1000){
    console.log("To expensive. not for me ");
}
else if (price > 500){
// else if (price < 500){
    console.log("I will buy it");
}
else{
    console.log("within my budget");
}

// loop

let pushup = 0;
while(pushup < 10){
    console.log('push up');
    pushup++;
}

// for
for (let i = 0; i< 10; i++){
    console.log(i);
}

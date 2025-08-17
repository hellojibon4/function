function evenstr (str){
    const size = str.length; 
    console.log(str, size);
    if(size %2 ===0){
        console.log("even size")
        return true
    }
    else{
        console.log("Odd size")
        return false
    }
}

evenstr("Dhaka");
evenstr("faka");


function duobleOrTriple ( number, doDouble){
    if(doDouble === true){
        const result = number *2;
        return number
    }
    else{
        const result = number *3;
        return result
    }
}

console.log (duobleOrTriple(5, true));
console.log (duobleOrTriple(5, false));

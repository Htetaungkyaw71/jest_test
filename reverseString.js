function reverseString(str){
    let total = "";
    for(let i = str.length - 1;i >= 0; i--){
        total += str[i]
    }
    return total;
}


module.exports = reverseString
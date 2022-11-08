function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

function capitalize (str){
    if(isNumeric(str)){
        return null;
    }
    else{
        return str[0].toUpperCase() + str.slice(1);
    }
}

module.exports = capitalize
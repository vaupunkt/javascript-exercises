const reverseString = function(string) {
    const length = string.length;
    let output = "";
    for (let index = 0; index < length; index++) {
        let element = string[length - index -1];
        output += element;
    }
    return output.toLowerCase();
};

// Do not edit below this line
module.exports = reverseString;

var secret = 'vishal';
var alphabets = 'abcdefghijklmnopqrstuvwxyz';
var newArray= secret.split("")
//console.log(newArray)
var secretCipherMap={
 
}


secret = secret.split('');
alphabets = alphabets.split('');

alphabets.forEach(function(letter){
    
    if(secret.indexOf(letter)===-1){
        secret.push(letter);
    }
});

alphabets.forEach(function(letter, index){
    secretCipherMap[secret[index]] = letter ;
})


var cipherMapKeys = Object.keys(secretCipherMap);
//console.log(cipherMapKeys);
var invertCipherMap = {}

cipherMapKeys.forEach(function(_invertKey){
    var value = secretCipherMap[_invertKey];
    //console.log(value);
    invertCipherMap[value]= _invertKey;
    //console.log(invertCipherMap);
})


var processText = function(text,cipherMap){
    var charArray = text.split("");
    var encodedArray = charArray.map(function(char){
        return cipherMap[char]
    });
    var encodedText = encodedArray.join("");
    return encodedText
}
var encode = function(text){
   return processText(text,invertCipherMap);
    // var charArray = text.split("");
    // var encodedArray = charArray.map(function(char){
    //     return invertCipherMap[char]
    // });
    // var encodedText = encodedArray.join("");
    // return encodedText
}


var decode = function(encodedText){
    return processText(encodedText,secretCipherMap);
    // var charEncodedArray = encodedText.split("");
    // var decodeArray = charEncodedArray.map(function(char){
    //     return secretCipherMap[char]
    // })
    // var decodedText = decodeArray.join("");
    // return decodedText;
}


console.log(decode('dqcvk'));
console.log(encode('abcdefghijklmnopqrstuvwxyz'));
console.log(encode('ishan'));
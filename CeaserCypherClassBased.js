

var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

var CeaserCypher = function(secret){
    secret=secret.split('');

    var secretCipherMap = {};
    var invertCipherMap = {};

    
    alphabets.forEach(function(letter, index){
        
        if(secret.indexOf(letter)===-1){
            secret.push(letter);
        }

        var secretLetter = secret[index];
        secretCipherMap[secretLetter] = letter;
        invertCipherMap[letter] = secretLetter;
        
    });


    this.processText = function(text,encode){
        cipherMap=encode?invertCipherMap:secretCipherMap;
        var charArray = text.split("");
        var encodedArray = charArray.map(function(char){
            return cipherMap[char] || char;
        });
        var encodedText = encodedArray.join("");
        return encodedText  
    }

}


CeaserCypher.prototype.encode = function(text){
    return this.processText(text,true);
}
 
CeaserCypher.prototype.decode = function(text){
    return this.processText(text,false);
}
  
var vishalCypher = new CeaserCypher('vishal');
var ishaanCypher = new CeaserCypher('Ishan');


var encodedText = vishalCypher.encode('Hello World');
var iEncodedText = ishaanCypher.encode('Hello World');

console.log('Vishal : encode : '+encodedText);
console.log('Ishaan : encode : '+iEncodedText);
console.log('Vishal : decode : '+vishalCypher.decode(encodedText));
console.log('Ishaan : decode : '+ishaanCypher.decode(iEncodedText));

console.log('-0-11-00-'.split(''));


var board = [
    ["","0",""],
    ["x","x",""],
    ["0","0",""]
]
/*___|_0_|_x_
_x_|_x_|___
 0 | 0 |  
 */
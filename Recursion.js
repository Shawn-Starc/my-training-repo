var factorial = function(num){
    var result = 1;
    for(var i = num;i>1;--i){
        result = result*i;
    }
    return result;
}

// 3! = 3*2*1
console.log(factorial(3))
// 4! = 4*3*2*1
console.log(factorial(4))

var factorialReccursive = function(num){
    console.log('Got : '+num);
    if(num<=1){
        console.log('Returned : ' + 1);
        return 1;
    }

    var fNext = factorialReccursive(num-1);
    console.log('Calculating : '+num+' * '+fNext);
    console.log('Returning : '+num*fNext);
    return num * fNext;
}

console.log(factorialReccursive(6));
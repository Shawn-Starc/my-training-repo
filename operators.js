// Plus Operator +
// Minus -
// Didvide /
// Multiply *

// -- Uniary Operator
// =
// !
// &

// Boolean Operator
// &&   - value of second if first is true
// ||   - valuf of second if first is false


var funA = function(retValue){
    console.log('A');
    return retValue;
}


var funB = function(retValue){
    console.log('B');
    return retValue;
}

console.log('A' && 'B');

var loveFunction = function(whoLove){
    whoLove = whoLove || 'myself';
    console.log('I love '+ whoLove);
}

console.log(loveFunction());
console.log(loveFunction('Ishaan'));
console.log(loveFunction('Vishal'));
console.log(loveFunction('Ranjita'));
console.log(loveFunction(0));
console.log(loveFunction(12));

// ++i vs i++

var preIncrement = function(i){
    return i + 1;
}

var postIncrement = function(i){
    var j = i;
    i + 1;
}

//*** Loops **//

if(true){
    funA();
}else{
    funB();
}

/* For Loop */


for(var i =0;i<10;++i){
    console.log(i);
}


var arr = [9, 5, 4, 3, 2, 6, 7, 5, 12, 13, 56, 64, 67, 77];

arr.forEach(function(item, idx, list){
    console.log('item : ', item, ' index : ', idx, 'List', list);
});

var squaredArr = arr.map(function(item){
    return item*item;
});

console.log(squaredArr);
console.log(arr);

var evenArray = arr.filter(function(item){
    return (item%2);
});

console.log(evenArray);
console.log(arr);

var Obj = {
    'b': 90,
    'a': 123,
}

Object.keys(Obj).forEach(function(_k){
    var value = Obj[_k];
    console.log(value);

})

var sortedArray = arr.sort();
console.log(sortedArray);

var customSortedArr = arr.sort(function(a, b){

    var isAEven = !(a%2);
    var isBEven = !(b%2);

    if(isAEven){
        if(isBEven){
            return a - b;
        }else{
            return -1;
        }
    }else{
        if(isBEven){
            return 2;
        }else{
            return b - a;
        }
    }

});
console.log(customSortedArr);
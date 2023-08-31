var a = [];
var b = new Array(5);

console.log(b);

var c = new Array(2, 3, 4);

console.log(c);


console.log(c.join(' : '));

console.log(c.join('*'));

var arr = [1, 2, 3, 4, 5, 6, 7];

console.log('arr :', arr);
console.log('arr.slice(4) :', arr.slice(4));
console.log('arr.slice(-4) :', arr.slice(-4));
console.log('arr.slice(2,4) :', arr.slice(2,4));
console.log('arr.slice(3,-2) :', arr.slice(3,-2));
console.log('arr :', arr);


var formatDateNumber = function(num){
    return ('00'+num).slice(-2);
}

var displayDate  = function(date){
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();

    console.log(formatDateNumber(day)+'-'+formatDateNumber(month)+'-'+year);

}

var date1 = new Date('01/04/2012');
var date2 = new Date('03/12/2012');
var date3 = new Date('12/07/2012');
var date4 = new Date('12/12/2012');
var date5 = new Date('07/20/2012');
var date6 = new Date('03/11/2012');

displayDate(date1);
displayDate(date2);
displayDate(date3);
displayDate(date4);
displayDate(date5);
displayDate(date6);

/*** Splice **/


console.log('arr :', arr);
console.log('arr.splice(0,1) :', arr.splice(0,1));
console.log('arr :', arr);
console.log('arr.splice(0,1,5) :', arr.splice(0,1,5));
console.log('arr :', arr);


var numbersMap = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    's':'ishaan'
}

var numbers = [4, 5, 6, 2, 3, 1, 4, 8, 9, 11, 123, 156, 489];

var getMappedNumber = function(_xtwitternum){

    var mappedNumber = numbersMap[_xtwitternum];

    if(mappedNumber){
        return mappedNumber;
    }

    var pleaseMap = function(_digit){
        return numbersMap[_digit];
    }

    return (_xtwitternum+'').split('').map(pleaseMap).join('-');

}

var mappedNumbers = numbers.map(function(_n){
    return getMappedNumber(_n);
});

var mappedNumbersObject = numbers.map(function(_n){
    return {
        value: numbersMap[_n],
        key: _n
    }
})

console.log(mappedNumbers);
console.log(mappedNumbersObject);



arr = ['v', 'i','s','h','a','l'];

console.log(arr.indexOf('z'));
console.log(arr.indexOf('v'));
console.log(arr.indexOf('a'));



var newArr = [
    {id: 1, name:'ishaan'},
    {id: 2, name:'ranjita'},
    {id: 3, name:'vishal'},
    {id: 4, name:'gurpal'},
]


var getFromNewArr = function(id){

    for(var i=0;i<newArr.length;++i){
        var item = newArr[i];
        if(item.id === id){
            return item;
        }
    }
}







var a = function(vara, varb){
    console.log(this);
    console.log(vara+varb);

}

a(1,2);

var obj = {
    a: 1,
    b: 2,
    add: function(){
        return this.a + this.b;
    },
    addX: function(x){

        var that = this;

        var _add = function(){
            return that.a + that.b + x;
        }
        return _add;

    }

}

console.log(obj.add());

var add10 = obj.addX(10);
var add20 = obj.addX(20);

var newObj = {
    a: 30, b: 40,
    add: obj.add
}

var a = newObj.add;

console.log(a());
console.log(add20());


var newAdd = obj.add;

console.log(newAdd());

var temmpObj = {
    a: 3,
    b: 6
}

console.log(newAdd.call(temmpObj));


var addTwo = function(a, b){
    var prefix = this.prefix || 'No Prefix : ';
    return prefix + (a+b);
}


console.log(addTwo(2, 3));
console.log(addTwo.call({prefix: 'answer : ' },6, 5));
console.log(addTwo.apply({prefix: 'apples : ' }, [4, 2, 5]));

var addAll = function(){
    debugger;
    var answer = 0;
    [].slice.call(arguments).forEach(function(i){
        answer  = answer  + i;
    });

    return answer;
}

console.log(addAll(2, 3));
console.log(addAll(2, 3, 6, 7, 8, 9));


var apples = [4, 5, 6, 7, 10, 4, 6, 7];

console.log(addAll.apply(undefined, apples));


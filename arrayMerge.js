var arr1 = [1,4,6,4,12,33,6,7, 8];
var arr2 = [4,7,6,1,2,13,9,10,14, 33]


var mergedArray = function(){
arr2.forEach(function(num){
    console.log(arr1.indexOf(num));
    if(arr1.indexOf(num)===-1){
        arr1.push(num);
        // console.log(arr1);
    }

    // console.log(num)
})
    return arr1
}

console.log(mergedArray());
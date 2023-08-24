var pyramid = function(n){

    var star = '*';
    space = new Array(n).join(' ')
    
    for(var i=n;i>0;--i){
        var line =  space + star;
        space = space.slice(0, -1);
        star = star + '**';
        console.log(line);
    }

}

//pyramid(6);


/*
     1
    2*2
   4*3*4
  6*5*5*6


*/

var getItem = function(star, index){
    if(star){
        return ['*', index];
    }else{
        var newIndex = (index+1)%10;
        return [newIndex, newIndex];
    }
}


var customPyramid = function(n, startIndex){
    
    startIndex = (startIndex - 1) || 0;

    var space = new Array(n).join(' ');

    var startFromStar = false;

    for(var i=0;i<n;++i){
        var line;


        [line, startIndex] = getItem(startFromStar, startIndex);
        // if(startFromStar){
        //     line = '*'
        // }else{
        //     startIndex = (startIndex+1)%10;
        //     line = line+startIndex;
        // }

        for(var j=0;j<i;++j){

          var isStar = j%2?startFromStar:!startFromStar;
          var item;

          [item, startIndex] = getItem(isStar, startIndex);
          line = item+line+item;
            //   if(isStar){
            //     line = '*'+line+'*';
            //   }else{
            //     startIndex = (startIndex+1)%10;
            //     line= startIndex+line+startIndex;
            //   }

        }

        console.log(space + line);
        startFromStar = !startFromStar;
        space = space.slice(0, -1);
    }

    var space = new Array(n-1).join(' ');

    for(var k=0;k<Math.ceil(n/2);++k){
        console.log(space+'|'+k+'|');
    }
}

customPyramid(10, 9);
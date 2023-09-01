

var Node = function(value){
    this.value = value;
}

Node.prototype.addItem = function(value){

    var incomingNode;

    if(this.value>value){
        if(this.lesserNumber){
            return this.lesserNumber.addItem(value);         
        }
        incomingNode = new Node(value);
        this.lesserNumber = incomingNode;
    }else{
        if(this.greaterEqualNumber){
            return this.greaterEqualNumber.addItem(value);
        }
        incomingNode = new Node(value);
        this.greaterEqualNumber = incomingNode;
    }

    return incomingNode;

}


Node.prototype.print = function(){
    var arr = [];
    if(this.lesserNumber){
        arr = [...arr, ...this.lesserNumber.print()];
    }
    arr.push(this.value);
    if(this.greaterEqualNumber){
        arr = [...arr, ...this.greaterEqualNumber.print()];
    }
    return arr;
}



var rootNode = new Node(10);

rootNode.addItem(15);
rootNode.addItem(5);
rootNode.addItem(7);
rootNode.addItem(9);
rootNode.addItem(8);
rootNode.addItem(6);
rootNode.addItem(12);
rootNode.addItem(17);
rootNode.addItem(13);

console.log(rootNode.print().join(' : '));
var Node  = function(options){

    this.id = options.id;
    this.name = options.name;

}

Node.prototype.link = function(_node){
    this.next = _node;
}

var wakeup = new Node({
  id: 'wakeup',
  name: 'wakeup'
});

var work = new Node({
    id: 'work',
    name: 'work'
});
wakeup.link(work);
  
var sleep = new Node({
    id: 'sleep',
    name: 'sleep'
});
work.link(sleep);
sleep.link(wakeup);

var traverse = function(_node){
    var starNode = _node;
    console.log(_node.name);

    while(_node.next !== starNode){
        _node = _node.next;
        console.log(_node.name);
    }

}

var traverseRecursively = function(_node, startNode){
    startNode = startNode || _node;
    console.log(_node.name);
    if(_node.next !== startNode){
        traverseRecursively(_node.next,startNode);
    }

}

traverse(work);
console.log('---------------');
traverseRecursively(wakeup)

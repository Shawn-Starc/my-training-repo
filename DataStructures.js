 // 1. Array
 /*
    List->
        Data Structire:
            items: [array]
 */

// 2. By Referencec

/**
 *  Linked List
 *          item1 -> item2 -> item3 -> item4
 * 
 * */


/**
 *  Circular Linked List
 *          item1 -> item2 -> item3 -> item4 -> item1
 * */


var Node  = function(options){

    this.id = options.id;
    this.name = options.name;

}

Node.prototype.link = function(_node){
    this.next = _node;
}

var birth = new Node({
    id: 'birth',   
    name: 'birth'   
})

var infant = new Node({
    id: 'infant',   
    name: 'infant'   
});

birth.link(infant);

var childhood = new Node({
    id: 'childhood',   
    name: 'childhood'   
});

infant.link(childhood);

var teenager = new Node({
    id: 'teenager',   
    name: 'teenager'   
});
childhood.link(teenager);

var adulthood = new Node({
    id: 'adulthood',   
    name: 'adulthood'       
})

teenager.link(adulthood);

var oldAge = new Node({
    id: 'oldAge',   
    name: 'oldAge'       
})
adulthood.link(oldAge);
var death = new Node({
    id: 'death',   
    name: 'death'           
})
oldAge.link(death);

var traverseLinkList = function(_node){
    console.log(_node.name);
    do{
        _node = _node.next;
        console.log(_node.name);
    }while(_node.next)
}

traverseLinkList(birth);
traverseLinkList(adulthood);

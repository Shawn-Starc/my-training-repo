var mapDS = {

}

var GraphDS = function(name){

    this.name = name;
    mapDS[name] = this;

}

GraphDS.createNode = function(name){
    if(mapDS[name]){
        return mapDS[name];
    }
    return new GraphDS(name);
}

GraphDS.prototype.relate = function(relation, node){
    if(typeof node==='string'){
        node = GraphDS.createNode(node);
    }

    if(!this[relation]){
        this[relation] = [];
    }
    this[relation].push(node); 

}

GraphDS.prototype.printRelations = function(){

    var that = this;
    
    Object.keys(this).forEach(function(_relation){
        if(_relation==='name'){
            return;
        }

        console.log(that.name+' has '+that[_relation].length+' '+_relation);
        that[_relation].forEach(function(_relatedNode){
            console.log('---'+_relatedNode.name);
        })
    })


}



var ishaan = new GraphDS('ishaan');
ishaan.relate('wife','ranjita');
ishaan.relate('friend','vishal');
GraphDS.createNode('vishal').relate('friend','ishaan');
ishaan.relate('friend','gurpal');
mapDS.gurpal.relate('friend','vishal');
mapDS['vishal'].relate('wife','mamta');
mapDS['mamta'].relate('husband','vishal');

ishaan.printRelations();

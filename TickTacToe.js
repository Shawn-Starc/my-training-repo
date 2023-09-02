

var TTTBoard = function TTTBoardConstructor(defaultBoard){
    this.board = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    (defaultBoard && this.parseBoard(defaultBoard));
}


TTTBoard.prototype.parseBoard = function(board){
    var that = this;
    board.split('').forEach(function(item, idx){
        var row = parseInt(idx/3);
        var col = parseInt(idx%3);
        if(item!=='-'){
            that.board[row][col] = item;
        }
    });
}

TTTBoard.prototype.makeMove = function(row, col, gitti){

    if(gitti!=='X' && gitti!=='0'){
        return false;
    }

    if(!this.board[row][col]){
        this.board[row][col] = gitti;
        this.lastMove = gitti;
        return true;
    }
    return false;
};
 

TTTBoard.prototype.getCell = function(row, col){
    return this.board[row][col];
};

TTTBoard.prototype.getBoardHash = function(){

        str = '';

        for(var row=0;row<3;++row){
            for(var col=0;col<3;++col){

                var item = this.getCell(row, col);
                str = str + (item || '-');
                
            }
        }

        return str;
}

TTTBoard.prototype.printBoard = function(){
    
    return this.board.map(function(row, idx){
        var connector = idx<2?'_':' ';
        return row.map(function(_item){
            return connector+(_item || connector)+connector;
        }).join('|');
    }).join('\n')+'\n';

}

TTTBoard.prototype.getStatus = function(){
    var that=this;
    var win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    /**
     *  if(board[0][0]===board[0][1] && board[0][0]===board[0][2])
     */
    
    var getItemFromIndex = function(idx){
        var row = parseInt(idx/3);
        var col = parseInt(idx%3);
        return that.board[row][col];
    }

    var isWin = false;
    win.forEach(function(winConditions){
        if(isWin){
            return;
        }
        var a = getItemFromIndex(winConditions[0]);
        var b = getItemFromIndex(winConditions[1]);
        var c = getItemFromIndex(winConditions[2]);
        if(a && a===b && a==c){
            isWin = a;
        }

    });
    
    if(isWin){
        return isWin;
    }

    var hash = this.getBoardHash();
    if(hash.indexOf('-')>-1){
        return 'pending';
    }

    return 'draw';

}



var newBoard = new TTTBoard();

newBoard.makeMove(0,0,'X');
console.log(newBoard.getBoardHash());
console.log(newBoard.printBoard());
newBoard.makeMove(1,1,'0');
console.log(newBoard.getBoardHash());
console.log(newBoard.printBoard());
newBoard.makeMove(1,1,'X');
console.log(newBoard.getBoardHash());
console.log(newBoard.printBoard());
newBoard.makeMove(0,2,'0');
console.log(newBoard.getBoardHash());
console.log(newBoard.printBoard());




var TickTacBoardTree = function(){

    this.rootBoard = new TTTBoard();

    // This is to update the TTTBoard's object into a valid tree Node.
    // This will contain the next created boards for the next move. 
    this.rootBoard.items = [];
    this.createTree(this.rootBoard);
}


TickTacBoardTree.prototype.createTree = function(board){

    var items = board.items,
        currentHash = board.getBoardHash(),
        newBoard = new TTTBoard(currentHash),
        nextMove = board.lastMove==='X'?'0':'X';

    for(var row=0;row<3;++row){
        for(var col=0;col<3;++col){
            
            var isAbleToMakeMove = newBoard.makeMove(row, col, nextMove);
            if(isAbleToMakeMove){
                
                // This is to update the TTTBoard's object into a valid tree Node.
                // This will contain the next created boards for the next move. 
                newBoard.items = [];

                // As we are able to make a move in the current row and col. This is a valid move for the previous board which is coming to the function.
                // Hence adding the newBaord to the items of the previousBoard which is sent to the function as the argument; 
                items.push(newBoard);

                if(newBoard.getStatus()==='pending'){
                    // This will further make more moves to the nrew board;
                    this.createTree(newBoard);
                }

                newBoard = new TTTBoard(currentHash);

            }
        }
    }



}

console.time('board-creation');
var TTTAI = new TickTacBoardTree(); 
console.timeEnd('board-creation');

console.log(TTTAI);

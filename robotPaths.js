function makeBoard (n) {
    let board = [];

    function fillRow (x) {
        let row = new Array();
        for (var i = 0; i < x; i++) {
            row.push(0)
        }
        board.push(row)
    }

    for (var i = 0; i < n; i++) {
        fillRow(n)
    }

    return board;
}

function findPaths (n){
    let paths = 0;
    let board = makeBoard(n);

    let toggle = function(row, col) {
        if (board[row][col] === 1){
            board[row][col] = 0
        } else if (board[row][col] === 0 ){
            board[row][col] = 1;
        }

    }

    function explorer(board, r, c){


    if (board[n - 1][n -1] === 1) {
        return paths++;
    }

    if (board[r][c + 1] !== undefined) {

        if (board[r][c + 1] === 0 && board[r][c + 1] !== undefined) {
            toggle(r,c + 1);
            explorer(board, r, c+1);
            toggle(r,c+1);
        }

    }

    if (board[r + 1] !== undefined) {

        if (board[r + 1][c] === 0 && board[r +1][c] !== undefined) {
            toggle(r + 1, c);
            explorer(board, r + 1, c);
            toggle(r + 1,c);
        }
    }

}
toggle(0,0);
explorer(board,0,0);

return paths;
}

findPaths(5)
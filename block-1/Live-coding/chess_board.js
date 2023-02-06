
function switch_square (current_square, white_square, black_square) {
    if (current_square == white_square) {
        return black_square;
    }
    return white_square;
}

function create_chess_board(size) {
    let black_square = "?";
    let white_square = "#";
    let space = " ";
    let current_square = white_square;

    let white_square_first_row = white_square + space;
    let black_square_first_row = black_square + space;
    
    for (let i = 0; i < size - 1; i++) {
        current_square = switch_square(current_square, white_square, black_square);
        white_square_first_row += current_square + space;
    }

    current_square = black_square;
    for (let i = 0; i < size - 1; i++) {
        current_square = switch_square(current_square, white_square, black_square);
        black_square_first_row += current_square + space;
    }

    for (let i = 0; i < size; i++) {
        if (i % 2 == 0) {
            console.log(white_square_first_row);
        } else {
            console.log(black_square_first_row);
        }
    }
    return;
}

function main() {
    let size = 8;
    create_chess_board(size);
    return;
}

main();

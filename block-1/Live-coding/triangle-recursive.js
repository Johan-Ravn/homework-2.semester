
function triangle_rec(n, nMax) {
    if (n <= 0) {
        return;
    }
    let text = "#";
    for (let i = 0; i < nMax - n; i++) {
        text += "#"
    }
    console.log(text);
    triangle_rec(n - 1, nMax);
}

function main() {
    let triangle_size = 5;
    triangle_rec(triangle_size, triangle_size);
}


main();

const arr = [5, 1, 2, 3, 2, 6];

function double(x) {
    return x * 2;
}

function tripple(x) {
    return x * 3;
}

function binary(x) {
    return x.toString(2);
}
const output = arr.map(binary);

console.log(output);
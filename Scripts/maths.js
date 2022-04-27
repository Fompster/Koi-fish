function round(x) {
    return Math.round(x * 100) / 100;
}

// choose a number within a range, integer (whole number) by default
function random(min, max, float = false) {
const val = Math.random() * (max - min) + min;

if (float) {
    return val;
}

return Math.floor(val);
}

export { round, random };
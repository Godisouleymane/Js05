function average(note) {
    average = note.reduce((a, b) => a + b, 0) / note.length;
    console.log(average);
}

module.exports = average([20, 12, 8, 9]);
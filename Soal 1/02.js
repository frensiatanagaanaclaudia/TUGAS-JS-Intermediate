const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(data) {
    const rata = data.reduce((a, b) => a + b) / data.length;
    let jawaban = 0;
    data.forEach(i => {
        if(i > rata)
            jawaban++;
    });
    return jawaban;
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))
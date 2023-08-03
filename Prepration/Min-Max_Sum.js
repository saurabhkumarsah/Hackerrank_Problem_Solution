// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.Then print the respective minimum and maximum values as a single line of two space - separated long integers.
function miniMaxSum(arr) {
    // Write your code here
    let n = arr.length, max = -Infinity, min = Infinity;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            if (i == j) {
                continue;
            }
            sum += arr[j];
        }
        max = Math.max(max, sum);
        min = Math.min(min, sum);
    }
    console.log(min,max)
}
miniMaxSum([1,2,3,4,5])
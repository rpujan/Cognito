export function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];

    return sum;
}

export function findLargestElement(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest)
            largest = arr[i];
    }
    return largest;
}



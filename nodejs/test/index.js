function permute(str, l, r)
{
    if (l == r)
        console.log(str);
    else
    {
        for (let i = l; i <= r; i++)
        {
            str = swap(str, l, i);
            permute(str, l + 1, r);
            str = swap(str, l, i);
        }
    }
}

function swap(a, i, j)
{
    let temp;
    let charArray = a.split("");
    temp = charArray[i] ;
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return (charArray).join("");
}

//let str = ";\"/.|"; 
let str = "?:,'/"; 
let n = str.length;
//permute(str, 0, n-1);
//
let flag = false;
let i = 1;
function checkMultiplies(num)
{
    if(checker(num, num * 2) && (len(num) === (len(num * 2))))
        if(checker(num, num * 3) && (len(num) === (len(num * 3))))
            if(checker(num, num * 4) && (len(num) === (len(num * 4))))
                if(checker(num, num * 5) && (len(num) === (len(num * 5))))
                    if(checker(num, num * 6) && (len(num) === (len(num * 6))))
                        return num;
    return -1;
}

function checker(arr1, arr2)
{
    return arr2.toString().split('').every(v => arr1.toString().split('').includes(v));
}

function numSum(num)
{
    return num.toString().split('').reduce((acc,next) => Number(acc) + Number(next));
}

function len(num)
{
    return num.toString().length;
}

// while(!flag)
// {
//     if(checkMultiplies(i) !== -1)
//     {
//         console.log('Number is: ', i);
//         flag = true;
//     }
//     i++;
// }

function isPrime(num) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

// Problem 52

function checkPer(num) {
    flag = false;
    let one = num;
    let two = one + 3330;
    let three = two + 3330;
    if(isPrime(one) && isPrime(two) && isPrime(three)) {
        flagOne = two.toString().split('').every(v => one.toString().split('').includes(v));
        flagTwo = three.toString().split('').every(v => two.toString().split('').includes(v));

        flag = flagOne && flagTwo;
        if(flag) {
            console.log(one, two, three)
        }
    }
    return flag;
}

// for(let i = 1000; i < 9999; i++) {
//     if(checkPer(i))
//         console.log('Number is: ', i);
// }


// Problem 50

primeCount = 1;

let num = 1;
let sum = 0;
let largest = 0;
count = 0;
while(num < 1000) {
    if(isPrime(num)) {
        count++;
        // sum += num;
        if(count > largest) {
            // sum += num;
            largest = count;
            count = 0;
        }
    }

    num++;
}
console.log(largest);
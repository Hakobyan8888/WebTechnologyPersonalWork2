function checkVariableTask19(variable) {
    switch (typeof variable) {
        case 'string':
            console.log(variable.length);
            break;
        case 'boolean':
            console.log(variable);
            break;
        case 'number':
            console.log(variable * variable);
            break;
        default:
            console.log(0);
    }
}

function JoinStringTask20() {
    const arr = ["Es", "sovorumem", "JavaScript", "!"];
    const sentence = arr.join(' ');
    console.log(sentence);
}

function SortDigitsTask21(number) {
    const numStr = number.toString();
    const digitsArray = numStr.split('');
    const sortedDigitsArray = digitsArray.sort();
    const sortedNumStr = sortedDigitsArray.join('');
    return parseInt(sortedNumStr, 10);
}

function getWeekdayTask22(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number";
    }
}

function squareNumberTask23(number) {
    return number * number;
}

function printMaxNumberTask24(numbers) {
    if (numbers.length === 0) {
        console.log("The array is empty");
        return;
    }

    const maxNumber = Math.max(...numbers);
    console.log(maxNumber);
}

function printMinNumberTask25(numbers) {
    if (numbers.length === 0) {
        console.log("The array is empty");
        return;
    }

    const minNumber = Math.min(...numbers);
    console.log(minNumber);
}

function countEvenNumbersTask26(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }

    console.log(count);
}

function checkVariableTask27(a) {
    if (a > 5) {
        console.log(true);
    } else if (a === 5) {
        console.log("middle");
    } else {
        console.log(false);
    }
}

function checkConditionsTask28(a, b) {
    if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

function checkDataTypeTask29(a) {
    if (typeof a === 'number') {
        console.log(true);
    } else {
        console.log(false);
    }
}

function filterArrayTask30(array) {
    const filteredArray = array.filter(element => element > 0 && element < 10);
    console.log(filteredArray);
}

function checkForFiveTask31(array) {
    if (array.includes(5)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

function printTypeTask32(variable) {
    console.log(typeof variable);
}

function modifyNumberTask33(number) {
    if (number > 30) {
        return number + 10;
    } else {
        return number - 10;
    }
}

function printNumbersDivisibleBy3And5Task34(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
        }
    }
}

function printNumbersDivisibleBy5Or7Task35(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            console.log(i);
        }
    }
}

function sumOfDigitsTask36(n) {
    let sum = Math.floor(n / 100) + Math.floor((n % 100) / 10) + (n % 10);
    console.log(sum);
}

function sumOfNumbersPromptTask37() {
    let a = parseInt(prompt("Input Number a"));
    let b = parseInt(prompt("Input Number b"));
    let max = Math.max(a, b);
    let sum = a + b;
    console.log("Max Number " + max);
    console.log("Sum " + sum);
}

function sumOfNumbersPromptTask38() {
    let a = parseInt(prompt("Input Number a"));
    let b = parseInt(prompt("Input Number b"));
    let min = Math.min(a, b);
    let sum = a + b;
    console.log("Min Number " + min);
    console.log("Sum " + sum);
}

function printOddNumbersTask39() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

function printNumbersDivisibleBy3Task40(arr) {
    for (let number of arr) {
        if (number % 3 === 0) {
            console.log(number);
        }
    }
}

function printStringTypeTask41() {
    let arr = ["1", 12, "Hello", true, undefined, 34, "1.png", 74.31];

    for (let item of arr) {
        if (typeof item === "string") {
            console.log(item);
        }
    }
}

function SeasonsTask42() {
    let num = prompt("Ներմուծեք 1-ից 4 միջակայքում առկա թիվը");
    let result;
    switch (num) {
        case '1':
            result = 'ձմեռ';
            break;
        case '2':
            result = 'գարուն';
            break;
        case '3':
            result = 'Գարուն-Ամառ';
            break;
        case '4':
            result = 'Ամառ';
            break;
        default:
            result = 'Սխալ ներմուծում';
    }

    console.log(result);

}

function Task43(numbers) {
    let found = false;

    for (let number of numbers) {
        if (number === 5) {
            found = true;
            break;
        }
    }

    if (found) {
        for (let number of numbers) {
            if (number <= 5) {
                console.log(number);
            }
        }
    } else {
        for (let number of numbers) {
            console.log(number);
        }
    }
}
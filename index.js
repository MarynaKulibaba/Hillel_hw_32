function isNumber(value) {
    return typeof value === 'number' && !Number.isNaN(value);
}

function throwIfInvalid(a, b) {
    if (!isNumber(a) || !isNumber(b)) {
        throw new Error('Invalid input. Please provide valid numbers.');
    }
}

const addition = function (a, b) {
    throwIfInvalid(a, b);

    return a + b;
};

// Subtraction function
const subtraction = function (a, b) {
    throwIfInvalid(a, b);

    return a - b;
};

const multiplication = function (a, b) {
    throwIfInvalid(a, b);

    return a * b;
};

const number1 = 5;
const number2 = 3;

const sum = addition(number1, number2);
console.log('Sum:', sum);

const difference = subtraction(number1, number2);
console.log('Subtraction:', difference);

const product = multiplication(number1, number2);
console.log('Multiplication:', product);

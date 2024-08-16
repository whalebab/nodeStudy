// 객체 만들기
let calculator = {
    PI: 3.14,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

// 객체를 모듈로 만들어서 exports
module.exports = calculator;
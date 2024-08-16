const PI = 3.14;
let author = 'codeIt teacher';

function add(a, b) {
    return a + b;
}

let test = {
    date: '2020-09-20',
    types: ['safetyTest', 'performanceTest'],
    printTypes() {
        for (const i in this.types) {
            console.log(this.types[i]);
        }
    }
};

// exports : 내보내다

exports.PI = PI;
exports.author = author;
exports.add = add;
exports.test = test;

// exports.add = add;
// 모듈 외부로 공개할 이름 = 모듈 내부에서의 이름
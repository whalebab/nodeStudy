let m = require('./math-tools'); // require : 모듈을 load 해주는 함수 (모듈을 로드해서 객체 1개를 리턴)
                            // . (현재 디렉토리)

console.log(m.PI);
console.log(m.author);
console.log(m.add(1, 2));
console.log(m.test.date);
console.log(m.test.types);
m.test.printTypes();
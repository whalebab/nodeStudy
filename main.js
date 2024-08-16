// let m = require('./math-tools'); // require : 모듈을 load 해주는 함수 (모듈을 로드해서 객체 1개를 리턴)
//                             // . (현재 디렉토리)

// console.log(m.PI);
// console.log(m.add(2, 4));
// console.log(m.subtract(1, 2));
// console.log(m.multiply(1, 2));
// console.log(m.divide(1, 2));

// let v = require('./module');

// 코어 모듈
const fs = require('fs'); // fs: 파일시스템(파일, 디렉토리 작업할때 필요한 모듈)

let fileList = fs.readdirSync('.');
console.log(fileList);
// [ '.git', 'main.js', 'math-tools.js', 'module.js', 'test.js' ]
// 현재 디렉토리 안에 있는 파일들이 배열에 담겨서 출력됨

//fs.writeFileSync('new', 'Hello Node.js!'); // new 라는 파일안에 Hello Node.js! 텍스트 작성해서 생성

const os = require('os'); // os: 운영체제
console.log(os.cpus());

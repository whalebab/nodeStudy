// let m = require('./math-tools'); // require : 모듈을 load 해주는 함수 (모듈을 로드해서 객체 1개를 리턴)
//                             // . (현재 디렉토리)

// console.log(m.PI);
// console.log(m.add(2, 4));
// console.log(m.subtract(1, 2));
// console.log(m.multiply(1, 2));
// console.log(m.divide(1, 2));

// let v = require('./module');

// 코어 모듈
//const fs = require('fs'); // fs: 파일시스템(파일, 디렉토리 작업할때 필요한 모듈)

//let fileList = fs.readdirSync('.');
//console.log(fileList);
// [ '.git', 'main.js', 'math-tools.js', 'module.js', 'test.js' ]
// 현재 디렉토리 안에 있는 파일들이 배열에 담겨서 출력됨

//fs.writeFileSync('new', 'Hello Node.js!'); // new 라는 파일안에 Hello Node.js! 텍스트 작성해서 생성

//const os = require('os'); // os: 운영체제
//console.log(os.cpus());

// ch. 서드파티 모듈
// const cowsay = require('cowsay');
// console.log(cowsay.say({
//     text : "I love javascript",
// }));

// ch. 이상한 출력 순서


const fs = require('fs'); // 코어 모듈 중 하나인 fileSystem 모듈을 로드
/* console.log('Start');

let content = fs.readFileSync('./new', 'utf8'); // 동기 실행
console.log(content);

console.log('Finish'); */

console.log('Start');

fs.readFile('./new', 'utf8', (error, data) => { // 비동기 실행
    console.log(data);                          // './new' 다 읽고 실행될 함수 
});                                             // 어떤 작업이 완료 되었을때 실행될 함수 : 콜백

console.log('Finish');
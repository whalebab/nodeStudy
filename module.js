// Module wrapper function의 다섯개의 인자

/**
 * exports
 * require
 * module
 * __filename
 * __dirname
 */

(function (exports, require, module, __filename, __dirname) {
    // 모듈 코드
});

function add(a, b) {
    return a + b;
}

exports.plus = add;

console.log('exports ------------------------->');
console.dir(exports);
console.log('require ------------------------->');
console.dir(require);
console.log('module ------------------------->');
console.dir(module);
console.log('__filename ------------------------->');
console.dir(__filename);
console.log('__dirname ------------------------->');
console.dir(__dirname);

// Node.js가 모듈을 로드할때 (function ~~)로 모듈 전체 코드를 감싸준다.
// module.js 모듈을 로드할때는 아래코드와 같다.

(function (exports, require, module, __filename, __dirname) {
    function add(a ,b ) {
        return a + b;
    }
    exports.add = add;
});
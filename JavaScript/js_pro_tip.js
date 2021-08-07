// 출처: https://www.youtube.com/watch?v=BUAhpB3FmS4

// 1. Nullish-coalescing

// ❌ Bad Codes 👎
function printMsg(text) {
    let msg = text;
    
    if(msg !== null || msg !== undefined) {
        msg = 'Noting to display.';
    }
    console.log(msg);

}

// 🎊 Good Codes 👍
// leftExpression ?? rightExpression : 함수들이 들어갈 수도 있다.
function printMsg(text) {
    const msg = text ?? 'Nothing to display'; // text가 undefined or null 인 경우에 후자의 값을 넣어준다.
    console.log(msg);
}

// Q. 인자에 default parameter 넣어주면 안되나요?
// A. Default parameter is only for undefined
function testPrintMsg(text = 'Nothing to display') {
    console.log(text);
};

testPrintMsg('Hello'); // 'Hello'
testPrintMsg(undefined); // 'Nothing to display'
testPrintMsg(null); // null : ✅ null은 '값'으로 인식되므로 default parameter는 undefined만 걸러준다.


// 2. 아는 문법이지만 익숙해지도록

// ❌ Bad Codes 👎
const items = [];
const events = items.filter(num => num % 2 === 0);
const multiple = evens.map(num => num * 4);
const sum = multiple.reduce((a, b) => a+b, 0);

// 🎊 Good Codes 👍
const results = items
                .filter(num => num % 2 === 0)
                .map(num => num * 4)
                .reduce((a, b) => a+b, 0);
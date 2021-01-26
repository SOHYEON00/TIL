var outer = function () {
  var a = 1;
  console.log(a);
  
  var inner = function () {
  console.log(`inner: ${a}`);
    return ++a;
  };
  return inner;
}

var outer2 = outer(); // (!) 여기서는 함수 inner가 실행되지 않았다. 리턴되었을 뿐.

/*(2) 여기서야 비로소 inner함수가 실행되었다. 처음 선언될 당시의 outer LE도 가지는
inner가 리턴되었던 것이기 때문에 inner는 a의 값에 접근할 수 있다.  */
outer2(); 
outer2();


/* 결과값
1
inner: 1
inner: 2
 */
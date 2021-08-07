## Array.prototype.flat();

    flat(): 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 반환한다.
    === 지정한 깊이까지 존재하는 배열을 해체 후, 해체된 모든 요소를 이어붙인 **새로운 배열을 반환**한다.

```
const flatArr = arr.flat([depth]);
// depth: 지정한 깊이 값, 기본값은 1이다.

const arr1 = [ 1, 2, [ 3, 4 ]];
arr1.flat(); // [ 1, 2, 3, 4 ]

const arr2 = [ 1, 2, [3, [ 4, 5,], 6] ];
arr2.flat(); // [ 1, 2, 3, [ 4, 5 ], 6 ] >> 기본값=1 이기 때문
arr2.flat(2); // [ 1, 2, 3, 4, 5, 6 ]
arr2.flat(Infinity); // [ 1, 2, 3, 4, 5, 6 ]

```

### 기능 - 배열 구멍 제거

flat 메소드를 활용해 배열의 요소 중, 빈 값을 제거할 수 있다.

```
const arr3 = [1, 2, , 4, 5];
arr3.flat(); // [1, 2, 4, 5];
```

참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
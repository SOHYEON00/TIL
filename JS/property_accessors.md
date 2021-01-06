# 객체 속성 접근자

<br/>

> 예제를 실습하던 도중, 객체 속성 접근자의 종류에 대해 알았다.<br/>
  이를 더 자세히 공부하기 위해 글을 작성하게 되었다.<br/>
  출처 : [MDN-속성접근자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors) / [Medium](https://medium.com/sjk5766/javascript-object-key-vs-object-key-%EC%B0%A8%EC%9D%B4-3c21eb49b763)

<br/>
<br/>

## 🙌 종류

* 점 표기법 Object.property

    - property는 유효한 자바스크립트 **유효한 식별자여야 한다.**
      숫자로 시작, 숫자연산 같은 식별자는 사용이 불가능하다.

      ex) object.1 ❌  object.$1 ⭕
    
    - 메소드를 호출할 때도 사용 가능하다.

      ex) document.createElement('p');

    - 숫자 리터럴의 메서드를 호출하고 싶을 땐, 앞에 공백 또는 . 등을 추가해 인식되지 않게 한다.

      ex) .toExponential() 사용
      ```
      // unknown: Identifier directly after number 에러 -> 앞에 공백을 추가해 해결
      console.log(77.toExponential(f)); 
      console.log(77.5.toExponential(f)); //정상출력
      ```

> 리터럴 : 변수 및 상수에 저장되는 '값 자체'
<br/>

* 괄호 표기법 Object['property_name']
    
    - property_name은 문자열이나 Symbol 사용 가능하다.
      문자열은 **유효한 식별자가 아니어도 괜찮다.** 공백도 가능하다.

      ex) object['1']는 object[1]과 같다. 1은 자동으로 '1'로 변환된다.

<br/><br/>

## 💡 명확한 차이점

* 괄호 표기법은 property **Name**을 받고, 점 표기법은 **property**를 받는다.
  
  이는 즉, 각 표기법이 객체의 속성에 접근하는 방식에 묘한 차이가 있음을 의미한다.
  괄호 표기법은 변수로서 접근하지만, 점 표기법은 객체의 속성에 곧바로 접근한다.
  
ex)
```
const a = {
    b: 1,
    c: 2
};

const b = 'c';

console.log(a[b]); // 2
console.log(a.b); // 1

```

위 예제를 보면 출력값이 다름을 알 수 있다.
a[b]에서는 b가 변수가 되어 곧, a['c']를 가리켜 2가 출력되었다. 
하지만 a.b에서는 바로 객체 a의 속성 b에 접근하여 1이 출력된 것을 알 수 있다.

<br/>

이로 인해 자바스크립트로 개발할 때 가끔 loop에서 undefined가 출력되는 이유는 알 수 있다.

```
var a = {
  b  : 1,
  c  : 2
}
for (key in a) {
 console.log(a.key) // undefined, undefined
 console.log(a[key])// 1,2
}
```
이렇게 a.key는 객체 a의 속성 key에 접근하였지만 a는 key라는 속성을 가지고 있지 않으므로 undefined가 출력되었고,
a[key]에서의 key는 변수, 즉 for문에서 실제 객체 a의 속성인 b,c에 차례대로 접근하여 제대로 된 속성값을 출력할 수 있던 것이다.

<br/><br/>

#### 마무리

이렇게 이미 당연하게 알고 있던 것들이지만 자세히 들여다보니 왜 두 방법이 존재하는지를 알 수 있었다.
빠르게 변화하는 언어일수록 혹은 모든 언어에 해당하는 이야기이지만 결국 가장 기초적인 것들이라고 생각되는 것들을 다시 잘 돌아보는 것도 중요한 것 같다.
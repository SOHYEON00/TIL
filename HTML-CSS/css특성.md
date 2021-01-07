# CSS 특성 정리표

> 익숙한 듯 낯선 CSS의 특성들을 정리해보자.

<br/>

***

### :not() 선택자

    E:not(selected) // 요소명 중에, 선택자가 **아닌** 것들만 적용.
  
- E : 요소명 (클래스도 가능)
- selected : 선택자

<br/><br/>

### appearance

    OS 테마에 따라 platform-native 스타일을 사용해 요소를 표시하는데 사용된다.

- 네이티브 요소 디자인 해제 및 변경에 쓰인다.
- Crossbrowsing (모든 브라우저에 동일한 디자인의 화면이 구현되도록) 에 유용하다.
- IE와 Safari는 부분 지원한다.

- 프로퍼티의 값으로는 none, button, auto, menulist-button 등이 있다.

- -moz-appearance와 -webkit-appearance 속성은 각각 Gecko, Webkit-based에서 속성의 비표준 버전이다.

* -moz-apperance // Firefox
* -webkit-appearance // Safari and Chrome


<br/>
<br/>

***

### E:nth-of-type(n)

    E와 같은 타입(tag name)의 n번째 형제를 선택한다.

- n에는 키워드(짝수even, 홀수odd), 숫자, 공식(2n+1) 등이 들어갈 수 있다.

<br/>

### E:nth-child

    E와 같은 타입이면서 부모의 n번째 자식인 것들을 선택한다.

- n에는 [syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) 등이 들어갈 수 있다.

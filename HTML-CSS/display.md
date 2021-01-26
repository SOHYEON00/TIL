# display
<br/>

    기본적으로 display CSS 속성의 기능은 2가지로 분류할 수 있다.
    1) 해당 요소 배치 방식: inline / block
    2) 자식 요소 배치 방식: flow / flex / grid  

display 속성은 키워드 값을 사용해 지정한다. 이때, 키워드는 총 6개의 카테고리로 분류할 수 있다.

<br/>

## 바깥쪽 <display-outside>
<br/>

요소의 외부 디스플레이 유형을 설정하는 키워드로 `flow` 레이아웃에서 요소 자신의 역할과 마찬가지로 동작한다.

### 1. block
해당 요소를 `block` element box로 처리하며 요소 앞과 뒤에 엔터쳐지듯 문단으로 생성된다.  
`width`, `height` 속성 지정 및 `margin`, `padding` 속성의 상하 간격 지정이 가능하다.

ex) `<div>`, `<p>`, `<h1>`

### 2. inline
block과 달리 해당 요소들의 앞과 뒤에 줄이 생성되지 않고 `inline` element box로 처리한다. ex) \<span>  
그래서 다음 요소도 해당 요소와 같은 줄에 위치하게 된다.  
`width`, `height` 속성을 정의해도 무시되며 `margin과` `padding` 속성은 좌우 간격만 반영되며 상하 간격을 반영되지 않는다.

ex) `<span>`, `<a>`, `<em>`

### 3. run-in
주변 요소들에 의해 `inline` 또는 `block` 요소로 동작하게 한다.  

예를 들어 만약 `run-in` box 가 `block` 요소를 포함하고 있다면 `run-in` 요소를 `block` 요소처럼 동작하게 된다.  

또 block 요소가 `run-in` 요소를 따른다면(follow) `run-in` 요소는 `block` 요소의 첫 번째 `inline` 요소처럼 동작한다.
반대로 `inline` 요소가 `run-in` 요소를 따른다면 `run-in` 요소는 `block` 요소처럼 동작한다.

> 브라우저는 run-in 요소의 outer value가 `display: block` 또는 `display: inline`이 명시되어진 경우에만 run-in 요소를 지원한다.

<br/><br/>

## 안쪽 <display-inside>
<br/>

요소의 내부 디스플레이 유형을 결정하는 키워드로 대체 요소가 아닌 요소의 콘텐츠 서식과 배치 방법을 나타낸다.

### flow
외부 디스플레이 유형이 `inline또는` `run-in`이고 `block/inline` 컨텍스츠에 속해 있는 경우, `inline box`로 동작시킨다. 그렇지 않으면 `block처럼` 동작시킨다.  

다른 속성(position, float, overflow)과 해당 요소가 어떤 context에 속해 있는지(block/inline)에 따라 새로운 block formatting context(BFC)를 생성하거나 해당 요소의 컨텐츠를 부모 context에 합친다.


### flow-root
formatting root(서식 루트)가 있는 위치를 정의하며 새로운 BFC를 만드는 `block` 박스 요소를 만든다.
<br/><br/>

> [BFC](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)란?  
  웹 페이지를 렌더링하는 CSS의 한 부분으로, `block` 박스 레이아웃이 발생하고 float가 다른 요소와 상호작용하는 영역을 말한다.

### table
요소들을 HTML 태그 `<table>` 처럼 동작시킨다. `block-level`이다.

### flex
요소들을 `block` 박스 요소처럼 동작시키며 flexbox model에 따라 안에 속한 요소들을 동작시킨다.

[MDN flex 정의서 참고](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) /  [flex 실습 방법 참고](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### grid
요소들을 `block` 박스 요소처럼 동작시키며 grid model에 따라 안에 속한 요소들(컨텐츠)을 동작시킨다.

[grid model 참고](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout) /  [grid 실습 방법 참고](https://css-tricks.com/snippets/css/complete-guide-grid/)

### ruby
HTML 태그 `<ruby>`처럼 동작한다.  
요소들을 inline 요소처럼 동작시키며 컨텐츠들은 ruby formattin model에 따라 동작시킨다.

<br/><br/>

> Note: Browsers that support the two value syntax, on finding the inner value only, such as when display: flex or display: grid is specified, will set their outer value to block. This will result in expected behavior; for example if you specify an element to be display: grid, you would expect that the box created on the grid container would be a block level box.

<br/>

## 리스트 아이템 <display-listitem>
<br/>

요소가 콘텐츠 블록 박스를 생성하고 리스트 아이템 인라인 박스를 분리한다.

* `list-tiem`은 `list-style-type`과 `list-style-position`과 함께 사용된다.
* 다른 `<display-outside>`키워드와 `flow`, `flow-root`와 `<display-inside>` 키워드와 함께 동작한다.

<br/><br/>

## 내부적 <display-internal>
<br/>

`table`, `ruby` 등 일부 레이아웃 모델은 복잡한 내부 구조를 가지며, 자식과 자손이 채워 넣을 여러가지 역할을 지닌다.  
이 항목은 그런 특정 레이아웃 모드에서만 의미를 갖는 **내부적**인 값을 정의한다.


### table-row-group
HTML 태그 `<tbody>`처럼 동작한다.

### table-header-group
HTML 태그 `<thead>`처럼 동작한다.

### table-footer-group
HTML 태그 `<tfoot>`처럼 동작한다.

### table-row
HTML 태그 `<tr>`처럼 동작한다.

### table-cell
HTML 태그 `<td>`처럼 동작한다.

### table-column-group
HTML 태그 `<colgroup>`처럼 동작한다.  
> `<colgroup>`는 테이블 안의 column(세로단, 열)의 그룹을 정의한다.

### table-column
HTML 태그 `<col>`처럼 동작한다.  
> `<col>`는 테이블 안에서 하나의 column을 정의하고 모든 column cell에서 conmmon semantics을 정의하는데 사용된다.  
  `<colgroup>`안에서 주로 사용된다.  [MDN 참고](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col)

### table-caption
HTML 태그 `<caption>`처럼 동작한다.
> `<caption>`는 테이블 또는 title의 caption(부가 제목)의 기능을 한다.

### ruby-base 
HTML 태그 `<rb>`처럼 동작한다.
> 👎 `<rb>`는 `<ruby>` 주석의 base 텍스트 컴포넌트의 범위를 정하는 데에 사용된다.  
글자 하나의 작은 주석이라고 생각하면 된다. ex) 한자 주석

### ruby-text
HTML 태그 `<rt>`처럼 동작한다.
> `<rt>`는 ruby주석의 텍스트 컴포넌트를 정의한다. 보통 발음기호, 번역이나 동아시아 글자의 음역 정보를 표현할 때 사용된다.  
  항상 `<ruby`> 요소 안에서 사용되어야 한다. 

### ruby-base-container 
👎 HTML 태그 `<rbc>`처럼 동작한다. (하지만 rbc 태그의 정보를 찾을 수 없다.)


### ruby-text-container
HTML 태그 `<rtc>`처럼 동작한다.
> `<rtc>`는 `<ruby>` 태그 안에서 사용되는 `<rb>`에서 문자의 의미를 설명하는 주석을 나타낼때 사용된다.  
`<rb>`요소는 발음을 나타낼 때의 `<rt>`와 semantic한 주석을 나타낼 때의 `<rtc>` 2개를 가진다.

<br/><br/>


## 박스 <display-box>
<br/>

요소의 디스플레이 박스를 생성해야 하는지를 지정한다.

### contents
`contents로` 선언된 요소들은 스스로 특정한 box를 생성하지 않고 가상의 박스와 그들의 자식 박스들을 교체한다.  

CSS3에는 어떻게 contents value들이 어떻게 비정상적인 요소에 영향을 미치는 지에 대해 설명되어있다. (비정상적인 요소란,  대체된 요소와 같은 css 박스 개념에 의해 순수하게 렌더링되지 않는 요소를 뜻함.)  

현재, 브라우저의 버그로 인해 접근성 트리에서 요소를 제거한다. 즉, 스크린에는 안에 무엇이 있는지 볼 수 없다.  
[Accessibility concerns](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)를 참고하자.

### none
요소를 보이지 않게 한다. 즉, html 문서는 해당 요소가 존재하지 않는 것으로 읽기 때문에 레이아웃에는 아무 영향을 끼치지 않는다.  
모든 자손 요소 또한 모습을 감춘다.  

요소의 `display:none`이라도 공간을 차지하게 하고 싶다면 `visibility` 속성을 대신 사용하면 된다. (요소는 보이지 않지만 공간은 차지하고 렌더링된다.)

<br/><br/>

## 레거시 <display-legacy>
<br/>

CSS2는 display 속성에 단일 키워드만 사용했으므로, 같은 레이아웃 모드를 위해 `block` 레벨과 `inline` 레벨 키워드를 각각 필요로 했다.

### inline-block
하나의 inline 박스인 것처럼 주변 내용과 함께 흐를(flow) block 박스 요소를 생성한다.  
즉, 기본적으로 `inline` 요소처럼 전후 줄바꿈없이 한 줄에 다른 엘리먼트들과 나란히 배치되지만 `inline` 엘리먼트에서는 불가능하던 `width`, `height` 속성 지정 및 `margin`, `padding` 속성의 상하 간격 지정이 가능하다.  

한 줄에 정확히 원하는 너비만큼 배치할 수 있어 레이아웃 활용에 좋다.

`inline flow-root`와 동일하다.

ex) `<button>`, `<select>`

### inline-table
inline-table은 정확히 매치되는 HTML 태그는 없다.  
`<table>` 요소처럼 동작하는 듯 보이지만 `block-level` 박스가 아니라 `inline-level` 박스로서 동작한다. 내부의 table 박스는 `block-level` 컨텍스트이다.

`inline table`과 동일하다.

### inline-flex
`inline` 요소처럼 동작하고 해당 요소의 컨텐츠들은 flexbox model에 따라 동작시킨다.

`inline flex'와 동일하다.

### inline-grid
`inline` 요소처럼 동작하고 해당 요소의 컨텐츠들은 grid model에 따라 동작시킨다.

`inline grid'와 동일하다.


<br/><br/>

> 출처 : [MDN display](https://developer.mozilla.org/ko/docs/Web/CSS/display)  
  https://www.daleseo.com/css-display-inline-block/

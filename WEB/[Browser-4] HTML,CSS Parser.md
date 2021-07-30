# Html Parser

**목적**
html 마크업을 parse tree로 파싱한다.
<br/>

**html 파서가 일반 파서와 다른 점**
- html 문법은 context free grammer가 아니므로 일반적으로 파서가 해석할 수 있는 문법이 아니다. Like 사람 언어.
  = 문법 룰이 정확히 정해져있지 않음.
  
- HTML-DTD(Document Type Definition) 이라는 formal한 포맷이 존재하지만 이 아이도 context free grammer가 아니다.

- 그래서 Html parsing은 'soft, forgiving'하다. 
  start, end 태그가 없는 등의 상황에서도 유연하게 넘겨줌.
  이 때, XML 파서와는 별개이다. (얘는 더 strict함) -> Html can't be parsed by XML parsers
  <br/>
  
### HTML DTD

- HTML의 정의는 DTD 형식 안에 있는데 SGML 계열 언어의 정의를 이용한 것이다
- Thml DTD 또한 context free grammer가 아니다. 하지만, strict한 모드의 DTD도 존재한다.
<br/>

## DOM (Document Object Model)

### 정의
- parse tree = DOM 엘리먼트 + attribute 노드
	
    - DOM 엘리먼트: DOM 인터페이스의 하나를 실행하는 요소. 여기서 실행함의 의미는 다른 attribute들을 가짐을 의미한다.
  
- html 문서를 객체로 표현한 것
- 자바스크립 코드와 연결해주는 인터페이스
- root: Document Object
- markup과 일대일 관계를 가진다.

```
<html>
  <body>
    <p>
      Hello World
    </p>
    <div> <img src="example.png"/></div>
  </body>
</html>
````

![](https://images.velog.io/images/sohyeon00/post/fee3d941-ab67-4c80-a5ef-83aa00758cd5/image.png)
<br/>

# 파싱 알고리즘

### html이 일반 파싱 top-down / bottom-up 방식을 사용할 수 없는 이유
1. html 언어 자체의 유연한 속성
2. 전통 브라우저들이 잘 알려져있는 html의 오류는 봐준다.
3. 변경에 의한 재파싱이 다수 일어난다.
	ex) js를 통한 html 파싱 트리 수정
    
* 결론
: 일반적인 파싱 기술로 html을 파싱할 수 없기 때문에 브랑저는 html파싱을 위한 별도의 파서가 필요하다.
<br/>

## html 파싱 알고리즘 단계
![](https://images.velog.io/images/sohyeon00/post/3a015977-7115-4895-8bf0-b0733ee8303a/image.png)
<br/>

### 1. 토큰화

### 1-1. 정의
- lexical analysis, 인풋을 토큰으로 파싱한다. 
- **html 토큰은 start, end tags, attribute name, attribut values** 이다.
- 과정 (입력의 마지막까지 반복): 
토큰 인지 -> 트리 생성자로 넘긴다 -> 다음 토큰 확인을 위한 다음 문자 확인 
    <br/>
### 1-2. 토큰화 알고리즘

	전체적인 동작 방식만 이해한다.
    
```
<html>
  <body>
    Hello world
  </body>
</html>
```
![](https://images.velog.io/images/sohyeon00/post/6333495a-adca-4e85-a1a8-21bbc69ff8b2/image.png)

- start 태그 생성 과정
초기 상태는 `data state`로, < 문자를 만나면 `tag open state`로 상태 변화가 일어난다. 
a-z까지의 문자를 만나며 `start 태그 토큰`을 생성하고 상태는 `tag name state`로 변한다. 이 때, > 문자를 만나면 현재까지 만든 `start 태그 토큰`이 발행되고 `data state` 로 상태가 변한다.

- 태그 안의 문자 생성 과정
위의 예시에서 Hello world의 H 문자를 만나면 Hello world의 각 문자마다 `문자 토큰`이 생성되고 발행된다. 이는 < 문자를 만날 때까지 진행된다.

- end 태그 생성 과정
< 문자를 만나 `tag open state`가 된 상태는 / 문자를 만날 때 `tag name state`로 변경되고 / 문자는 `종료 태그 토큰`을 생성한다. 이 상태는 > 문자를 만날 때까지 유지된다. > 문자를 만나면 새로운 `태그 토큰`이 발행되고 다시 `data state`가 된다.

    
2. 트리 구축

- 파서가 생성되면 Document Object가 생성되고, 트리 구축이 진행되는 동안 Document의 Dom 트리가 수정되고 요소가 추가되는데..
	
    - 토큰화에 의해 각 노드가 발행됨.
    : 각 토큰과 연관된 DOM 엘리먼트가 생성된다.
    - 트리 구축기에 의해 각 노드가 프로세스됨.(아마 위치되겠지?)
    
    <br/>
![](https://images.velog.io/images/sohyeon00/post/b82a1d5f-b471-407c-96af-d09631cd599f/image.png)


- html 태그를 만나면,
상태: `삽입 모드`	
과정: HTMLHtmlElement 엘리먼트 생성 후, Document 객체의 최상단에 추가한다.
이후 상태 변화: `삽입 모드`->`head 이전`

- body 태그를 만나면,
상태: `head 이전`
과정1: 예시엔 head 태그가 없지만, HTMLHeadElement가 암묵적으로 생성.트리에 추가된다.
이후 상태 변화: `head 이전` -> `head 안쪽` -> (head 태그가 없으므로) `head 다음` 
과정2: body 토큰 처리 후, HTMLBodyElement 생성. 트리에 추가한다.
이후 상태 변화: `head 다음` -> `body 안쪽`

- Hellow world 문자열을 만나면,
상태: `body 안쪽`
과정1: 문자 토큰을 받고 토큰 생성 이후, Text 노드('H') 생성, 트리에 추가되며 이어진 노드가 계속 추가된다. 

- body 종료 토큰을 받으면,
상태 변화:  `body 안쪽` -> `body 다음`

-  html 종료 태그를 만나면,
상태 변화:  `body 다음` -> `body 다음 다음`

마지막 파일 토큰을 받으면 파싱을 종료한다.
<br/>

# CSS 파싱

CSS는 context free 문법으로 일반적인 파싱이 가능하며 구문 문법은 BNF로 설명되어 있다.

## Webkit CSS parser
 css 파일로부터 자동으로 파서를 생성하기 위해 `Flex and Bison 파서 생성기`를 사용한다.
 - bison: 상향식 이동 감소 파서 생성
 
 ** Firefox: 직접 작성한 하향식 파서를 사용함.

결론
- 무슨 파서를 사용하든 각 css 파일은 style sheet 객체로 파싱되며 각 객체는 css 규칙을 포함한다.
- 이때, css 규칙을 포함한 객체는 선택자. 선언 객체. css 문법과 일치하는 다른 객체를 포함한다.
![](https://images.velog.io/images/sohyeon00/post/d1d8c7bc-2363-4c11-ab4f-88d06a5d4d8b/image.png)

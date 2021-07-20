# Browser Engine vs Rendering Engine
Q. 브라우저 엔진은 UI 인터페이스와 렌더러 엔진 사이에서 제어하는 역할을 맡는다고 하는데 둘의 정확한 차이는 무엇일까?

<BR/>

### 브라우저 자체의 목적 및 각 엔진의 역할
유저가 요청한 url에서 필요로 하는 리소스를 화면에 뿌려주는 것.

- 브라우저 엔진 : 전체적인 브라우저의 동작 제어
- 렌더러 엔진 : 리소스 관련 동작 제어

<BR/>

---
## 웹 사이트에 요청이 있을 때..
<BR/>

- **브라우저 엔진과 렌더러 엔진이 같이 일하는 법**
![](https://images.velog.io/images/sohyeon00/post/1b8f2618-dfcc-46b8-9234-70a013f16fd2/image.png)

<BR/>

- 결론
![](https://images.velog.io/images/sohyeon00/post/6bd21584-6094-4196-8a84-cf289e80c32b/image.png)

- 브라우저 엔진과 렌더러는 사용자에게 리소스를 보여준다.는 같은 목적 하에 동작한다.
- 렌더링 엔진은 웹 콘텐츠와 관련된 동작 (요청, 파싱, DOM 트리 생성)만을 수행한다.
- 브라우저 엔진은 필요한 리소스 가져오기, ui 백엔드와 협업해 사용자가 보고 있는 창에 웹 콘텐츠를 출력하는 역할을 수행한다.


# 렌더링 엔진

	Rendering
	: display of the requested contents on the browser screen.
	* contents: HTML, XML, Images, PDF(다른 플러그인들을 사용하면 가능)

	여기서는 HTML, CSS, Images를 렌더링하는 것에만 집중하여 작성한다.
    

### 브라우저마다 다른 렌더링 엔진을 사용한다.
ex) 브라우저마다 다른 브라우저 엔진을 사용하는 것과 같은 이치

* **잠깐, 히스토리**를 살펴보자.
크롬과 오페라는 Webkit을 참조한 Blink를 사용했는데, 이때 Webkit은 오픈 소스 렌더링 엔진으로 리눅스 플랫폼을 위한 엔진으로 시작되었으며 애플에서 맥과 윈도우 모두 지원하기 위해 수정되었다.

<br/>

---

## Main Flow

![](https://images.velog.io/images/sohyeon00/post/163c0df1-19fa-42b4-a756-33377de0fbb3/image.png)

### Get the requested contents from the networking layer.

보통 8kb 단위로 청크를 나눠, 렌더링할 리소스를 전송받는다.

<br/>

### Parsing HTML to construct the DOM tree.

1) 렌더링 엔진은 html 문서를 파싱하고 contents tree 내부에서 태그들을 DOM 노드로 변환한다.
2) 외부 css 파일과 함께 포함된 스타일 요소도 파싱한다.
3) 파싱한 스타일 정보와 html DOM 트리를 합쳐 `렌더 트리` 를 생성한다.
4) 렌더 트리 생성 이후 렌더 트리 배치가 시작된다. 즉, 각 노드가 화면의 정확한 위치에 표시된다.
5) UI 백엔드에서 렌더 트리의 각 노드를 가로지르며 형상을 그리는 작업인 렌더 트리 그리기가 진행된다.

** ⭐️ 중요한 것은, 유저 사용성을 위해 모든 html 문서를 파싱할 때까지 기다리지 않고 받는 즉시 모든 렌더링 과정이 점진적으로 진행된다.
### Example of Webkit & Gecko
<br/>

![](https://images.velog.io/images/sohyeon00/post/d512adf2-69d2-4bc6-86e7-7cd986fe1435/image.png)

( 용어가 조금 다를 뿐, 기본적인 흐름은 똑같다 )

- 용어 설명
	
    - **Render Tree = Frame Tree**
    Gecko는 `Frame tree` 라고 부르며, 각 엘리먼트를 `Frame`이라 명칭한다.
    Webkit은 `Render Tree` 라고 부르며, 각 엘리먼트를 `Render Object` 라 한다.
    - **Layout = Reflow**
    엘리먼트 배치 (placing of elements)하는 과정을 뜻한다.
    - **Attachment = Frame Constructor**
    렌더 트리/프레임 트리를 생성하기 전에 노드와 스타일 정보를 연결하는 과정을 뜻한다.
    
    
- 작은 차이점
	- Gecko > **Content Sink**
    Dom elements를 생성하는 과정이다. 큰 차이점이라고 하진 않는다.


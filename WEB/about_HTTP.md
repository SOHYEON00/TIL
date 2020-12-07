# HTTP method 정리

> HTTP 메소드의 종류, 역할 그리고 적절한 사용방법을 알아보자.

<br/>
<br/><br/>
<br/><br/>

### HTTP method 표
![](https://images.velog.io/images/sohyeon00/post/9efbf2e8-a787-4b19-bc96-33e97125e89c/image.png)

	• CREATE ( POST ) : 데이터를 디비에 저장하는 API
	• RETRIEVE ( GET ) : 모든 데이터를 조회하는 API (그냥 모든 데이터)
		○ 특정 ID 값 등을 조회하기도 함 (한 개만 찾음)
		○ 특정 값과 매칭되는 데이터를 조회하기도 함 (매칭되는 모든 것)
	• UPDATE ( PATCH ) : 특정 데이터를 찾아 문서 수정
    • DELETE ( DELETE ) : 데이터를 찾아 제거




#### details

- POST vs PUT
1) POST : 서버의 리소스에 데이터를 **보내기** 위한 용도.
Patch 메소드는 RFC 5789 에 따르면 존재하는 _자원의 일부를 수정_한다고 명시되어 있습니다.

2) PUT : 서버의 리소스에 데이터를 **저장하기** 위한 용도.
Put 메소드는 RFC 2616 에 따르면 자원에 대한 create/replace를 수행합니다. 
즉, _자원이 없을 경우 create, 있을 경우는 update_를 수행합니다. 
이 때 Put 메소드에서 Update는 해당 자원의 _모든 프로퍼티_를 업데이트 합니다.


- PAYLOAD란?
: 실제 전송되는 데이터.
 데이터를 전송할 때 헤더, 메타데이터, 에러체크 비트 등과 같은 다양한 요소들을 함께 보낸다.
 이 때, 보내고자 하는 데이터 자체를 payload라고 한다.


 > api (Application Programming Interface)
 >: 해당 페이지 또는 컴포넌트로 가기 위한 홈버튼이라고 생각하면 된다. (후에 자세히 공부)

<br/>
<br/><br/>
<br/><br/>

 ***

<br/>
<br/><br/>
<br/><br/>

### HTTP 통신

> 단방향적 통신 : Client의 요청이 있는 경우만 서버가 응답하여 해당 정보를 전송, 이후 바로 연결을 종료한다.

ex) 유저가 웹페이지에 들어온 이후 일어나는 반응
유저가 페이지에 입장하기 위해 링크를 클릭 -> 클릭한 순간, client(web)는 웹서버에 글에 대한 내용을 요청 -> 요청에 대한 응답으로 파일을 받음 -> 받은 즉시 서버와의 연결은 종료된다.  

- 요청 후 응답까지 시간이 걸린다. 
  즉, 실시간 연결이 아니라 **필요한 경우에만 서버로 접근하는 콘텐츠 위주의 데이터를 사용할 때 용이**하다.



#### 특징 정리
- client가 요청을 보내는 경우에만 server가 응답하는 단방향 통신을 사용한다.
- 응답을 받은 이후 바로 연결이 종료된다.
- 실시간 연결이 아니고 필요한 경우에만 연결되어 콘텐츠 위주의 데이터를 사용할 때 용이하다.
- 요청을 보내 서버의 응답을 기다리는 어플리케이션 개발에 주로 사용된다.

<br/>
<br/><br/>
<br/><br/>

***

<br/>
<br/><br/>

- socket 통신
: server와 clinet가 특정 포트를 통해 실시간으로 양방향 소통을 진행한다.

<br/>
<br/>

### 웹 페이지 렌더링 과정

> webkit main flow
![](https://images.velog.io/images/sohyeon00/post/0472ad62-fe92-415d-be80-64426992ad46/image.png)

브라우저 주소창에 주소를 친다. -> 서버를 찾아간다. -> DNS (실제 서버의 위치를 알고 있는 서버)가 연결해줄 곳을 찾는다. -> 만약 주소 시작이 https로 시작한다면, https 통신 방식으로 통신하겠다는 의미이다. -> index.html이 서버의 기본 설정이므로 인덱스파일을 client로 보낸다. -> 브라우저는 index.html을 파싱한다. ->
한 줄씩 읽어가며 DOM트리를 만들어간다. -> 중간에 link태그를 만나 css요청이 발생하는 경우, 해당 css파일을 얻기 위한 요청과 응답과정이 반복. css를 파싱한다. -> css파싱이 종료되면 중단된 HTML파일을 다시 읽고 DOM트리를 완성한다. -> 완성된 DOM 트리와 CSSOM 트리를 합쳐 Render tree를 만들고 그린다.

- JS 파일도 마찬가지로, HTML 파서는 중간에 Script태그를 만나게 되면 html 파싱을 멈추고 제어 권한을 자바스크립트 엔진에게 넘기게 된다. 이후 자바스크립트 엔진이 js 코드 또는 파일을 로드, 파싱 후 실행한다. 

<br/>
<br/><br/>
<br/><br/>


*** 

<br/>
<br/><br/>


### 브라우저 구조
![](https://images.velog.io/images/sohyeon00/post/9239dec0-a8e2-4b25-9028-25bf80b43479/image.png)

- 사용자 인터페이스 
  : 사용자가 브라우저에 직접 조작가능 한 영역

- 브라우저엔진 
  : 사용자 인터페이스가 렌더링 엔진에 쿼리를 전달할 수 있게 조작을 담당함

- 렌더링 엔진
  : html, css 문서를 파싱하여 화면에 표현함

- Networking 
  : HTTP 요청을 할 수 있으며 네트워크를 호출할 수 있음

- Javascript 해석기
  : JS 코드를 해석하고 실행함.

- UI Backend
  : select / input 등 기본적인 위젯을 그리는 인터페이스

- 자료 저장소
  : 쿠키, LS 등 브라우저에 자료를 저장할 수 있는 영역



<br/><br/><br/>




다음엔 HTTP와 HTTPS의 차이, 동작 방법의 차이에 대해 더 자세히 알아보도록 한다.

<br/><br/><br/><br/><br/><br/>

***
> 출처
HTTP VS HTTPS
- https://devdy.tistory.com/14#:~:text=HTTPS(HyperText%20Transfer%20Protocol%20over%20Secure%20Socket%20Layer)&text=SSL%EC%9D%B4%EB%82%98%20TLS%20%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C%EC%9D%84,HTTPS%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C%EC%9D%B4%20%EB%8F%99%EC%9E%91%ED%95%9C%EB%8B%A4.
- https://mangkyu.tistory.com/48#:~:text=Http%ED%86%B5%EC%8B%A0%EC%9D%80%20Client%EC%9D%98,%EC%9A%94%EC%B2%AD%EC%9D%84%20%EB%B3%B4%EB%82%BC%EC%88%98%EB%8A%94%20%EC%97%86%EC%8A%B5%EB%8B%88%EB%8B%A4.
- img1 http://taligarsiel.com/Projects/howbrowserswork1.htm 
- 브라우저 엔진 https://medium.com/@pks2974/website%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B2%8C-%EB%90%A0%EA%B9%8C-f1193c844480

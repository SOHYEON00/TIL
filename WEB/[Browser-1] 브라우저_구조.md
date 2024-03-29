# 브라우저 동작 방식

<br/>

## 브라우저의 주요 기능

- 사용자가 검색한 url에서 필요로하는 자원(html, pdf, img)을 서버에 요청하고 브라우저에 표시한다.

<br/>

## 브라우저의 인터페이스

- URI를 입력할 수 있는 주소 표시 줄
- 이전 버튼과 다음 버튼
- 북마크
- 새로 고침 버튼과 현재 문서의 로드를 중단할 수 있는 정지 버튼
- 홈 버튼

<br/>

## 브라우저 기본 구조

![](https://images.velog.io/images/sohyeon00/post/9fe3b26d-38f2-4f6c-a326-91042ada19d2/image.png)   

### 1. 사용자 인터페이스

: 브라우저 인터페이스
요청한 페이지를 보여주는 창을 제외한 모든 부분 -> 브라우저마다 조금씩 차이가 있을 수 있음

### 2. 브라우저 엔진

: 렌더러 엔진을 관리하는 총 메인 엔진.
For the purpose that displays contents, handles and requests resources, requests fileSystem and do network.


### 3. ⭐️ 렌더링 엔진

- 목적 및 역할: Parse and Disply required contents(Html, css, png ..)

### 4. 통신

: http 요청과 같은 네트워크 호출에 사용됨.
브라우저 엔진에 의해 사용된다.

### 5. UI 백엔드

기본적인 장치를 그리며, 플랫폼에서 명시하지 않은 일반적인 인터페이스.
os 사용자 인터페이스 체계를 사용한다.

### 6. 자바스크립트 해석기

자바스크립트 코드를 해석.실행한다.

### 7. 자료 저장소

쿠키 등, 모든 종류의 자원을 하드 디스크에 저장할 때 사용된다.
ex) cookie, localStorage


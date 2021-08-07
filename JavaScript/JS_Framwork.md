# JS 프레임워크를 사용하게 된 배경/이유


## 프론트엔드 라이브러리 등장 이유

> 동적인 웹 페이지를 보다 효율적으로 유지,보수 하고 관리하기 위함

1999년 이전의 텍스트,이미지로만 이뤄진 정적인 페이지가 아니라 동적인 웹 페이지가 주를 이루는 요즘, 웹 페이지보단 웹 어플리케이션으로 더 불릴 만큼 유저 인터랙션 증가함으로 인해 **자연스러운 유저 인터페이스 처리**를 위해 프론트엔드 라이브러리/프레임워크 등장

* **DOM요소의 변화**  
  = 렌더 트리 재생성, 요소의 스타일 계싼, 레이아웃 구성, 페인팅

### 결론
- DOM 관리와 상태 변화 관리 최소화
- 개발자가 오직 기능 개발, 사용자 인터페이스에 집중하도록 도와줌
- 각 프레임워크마다 철학이 달라 다양한 해결 방식 존재

<br/>

---

## React

* 리액트는 다른 프레임워크들과 달리 MVC 프레임워크가 아님.  
    Modeal, View, Controller 중, 리액트는 오직 View만 제공함.  
    -> **사용자 인터페이스를 만들기 위한 JS 라이브러리**  
    

### 사용시 주의점  
1. SPA에서 **데이터 변화가 있는 부분**만 빠르게 렌더링 되고 있는지
2. 가상 DOM이 아니라 직접 DOM을 제어하는 부분이 많은지
3. **데이터 변화와 라이프 사이클을 잘 이해**해서 렌더링을 최적화하고 있는지
4. JSX에서 **선언형 프로그래밍**을 잘하고 있는지
5. UI는 사용자의 상호작용에 바로 **반응**하는지
6. 리액트에 같이 구성된 다른 라이브러리를 잘 조합하고 있는지

### 특징
1. **컴포넌트** 단위 작성  
-> 생산성과 유지 보수 용이  

2. JSX (Javascript + xml)  
    : 리액트에 element 제공함
    Babel이 코드를 변환해 컴파일 해 줌.  
    -> **익숙한 html문법과 유사한 JSX 사용**으로 컴포넌트 생성  

3. 가상 DOM  
    -> 유저 인터랙션 발생 시, 매번 실제 DOM을 재렌더링 시키지 않고 **가상 DOM을 사용해 연산  **
    - 가상 DOM은 적은 연산 비용만 요구함
    (렌더링 과정이 필요없기 때문)
    - 가상 DOM이 어떤게 바뀌었는지 자동으로 파악하여 실제 DOM 트리만 업데이트 해 줌.


<BR/>

---

## Vue

### 특징

1. 가독성이 높고 직관적 (간편한 sybtax와 프로젝트 설정)
- React는 일반적으로 JSX, ES6에 의존하는 반면, 간단한 Vue프로젝트는 별도의 변환작업없이 브라우저에서 바로 동작함.

2. 빠른 렌더링과 더 작은 용량
- React에서의 state는 불변 -> 직접적인 변경 불가
- Vue에서 data는 변경 가능 (state 간단 변경 가능)

3. `<template>`와 Render Function 모두 사용 가능
- React는 template 구조 말고, JSX를 이용해 자바스크립트에서 DOM 생성함
- Vue는 html 파일에 마크업 함. (`{{}}` 사용해 데이터 바인딩)

4. 타입스크립트 사용 불가 -> ***VUE3에서 타입스크립트 문법 지원 시작***

### Vue 3 특징

1. 템플릿 표현식 관련 추가 문법 제공
2. Suspense
3. Reactivity 주입 API
4. Composition API
No newline at end of file
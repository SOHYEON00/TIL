# Props와 State

<br/><br/>

***


## Props

1. properties의 줄임말

2. 컴포넌트 간에 뭔갈 주고 받을 때 props 사용

3. 부모에서 자식으로만 props를 보낼 수 있음.

4. Props는 부모에서 자식으로 내려준 값이며 변할 수 없다. 값을 바꾸려면 부모에서 값을 바꾸고 바뀐 값을 다시 자식에게 전달해야 함.


## State

1. 부모 컴포넌트에서 자식 컴포넌트로 데이터를 보내는 게 아니라 해당 컴포넌트 안에서 전달.사용하려면 state 사용
ex) 입력 창에 input 입력 시, 입력할 때마다 글이 변하는 건 state가 바뀌는 것.

2. state is mutable

3. state가 변하면 re-render됨.


### 상태관리 (state 관리)

* 상태 : 데이터 각 화면에 필요한 데이터라고 생각하면 됨.
이 때 객체가 가지고 있는 데이터 또한 상태가 될 수 있음.

* 상태관리 : 데이터에 맞춰 적절하게 ux와 ui를 설계하고 구현하는 것.

***

ex) 상태관리
- 실시간 상태관리 (댓글이 달리면 ui가 변함)
- 로딩상태관리
- 에러 예외 상황에 대한 상태관리

ex) 상태
- 화면 내에 특정 ui를 노출할 지 여부
- 현재 보고 있는 페이지
- 로그인한 유저의 권한
- text input의 입력 값
- checkbox input의 선택 여부




***



## 불변성 유지

- 리액트에서는 불변성 유지가 중요함.
왜? 불변성을 유지해야 필요한 상황에 따라 재렌더링 되도록 프로젝트를 설계할 수 있고 나중에 성능 최적화 하는데 도움을 줄 수 있기 때문.

- 불변성 유지를 위해 사용가능한 함수가 있음
push / splice / unshift / pop 같이 직접 수정하는 내장함수는 사용 불가.

-> concat / slice / map / filter 같은 함수를 사용해야 함.
No newline at end of file

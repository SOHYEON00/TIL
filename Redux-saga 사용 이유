# Redux-saga와 Redux

**글 작성 배경**
사이드 프로젝트를 시작하며 데이터 관리에 대한 기술 스펙으로 redux와 redux-saga 중 어떤 것을 적용할 지에 대한 고민을 하다 둘의 차이를 비교.정리하게 되었다.

---

결론
- 둘의 극명한 차이는 action의 역할을 더 구체화시키냐 아니냐에 달렸다.
    - 리덕스에서의 action : 비동기 api 동작, pure object 반환
    - 리덕스 사가에서의 action : saga가 비동기 관련 로직 처리 후 action에 데이터 전달, action은 항상 pure object만 반환하는 역할 담당


---

## 기존 Redux에서 느낀 불만
이전에 작업했던 토이 프로젝트에서 느꼈던 점
- 각 action 의 역할과 기능이 너무 다르다... 
	어떤 애는 api 불러와서 response 정보를 reducer에게 넘기고 어떤 애는 그냥 단순 연산을 통해 reducer에 넘긴다. 혹은 그냥 pure object를 반환하는 경우도 다수 있었다.
    **즉, action의 역할이 비동기 api 통신, pure object 반환 으로 기능했다.**
    
- _Reducer가 항상 단순히 받아온 정보를 store에 넣는 동작만 한다. 여기서 연산을 한다면...?_
<br/>    

## Redux-saga를 사용하면 ?
**saga 를 추가하여 action이 항상 pure object만 반환하도록 한다.**

yield 즉, 제너레이터 구문을 써서 비동기 관련한 처리를 온전히 saga에서 처리한다.
이렇게 하면 action은 항상 saga에서 처리되어 전달받은 정보를 전달하는 용도로 기능하게 된다.



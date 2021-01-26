# 18.01.20
* exhaustive-deps-warning

    React Hook useEffect has a missing dependency: 'getMyNweets'. Either include it or remove the dependency array

- 의미 
  : useEffect 내에서 사용하고 있는 state를 배열안에 추가시켜 달라는 의미

- 해당 경고가 발생하는 경우

1. useEffect 내에 state를 넣어주는 경우
    - useEffect []안에 state를 넣어주면 해결
    - 함수형 업데이트를 사용하면 해결 가능

    ```
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count+1); // Warning
        setCount((state) => state + 1); //Complete
    }, [count]);
    ```

2. useEffect 내부에 함수를 정의한 경우


<br/>

* FirebaseError: The query requires an index.

- firestore는 noSQL 이라서 몇몇 기능들은 기존 mysql처럼 쿼리문을 돌릴 수 없다.
  즉, pre-made query를 만들어서 db한테 이런 쿼리를 사용할 거라고 알려줘야 한다.


* FireStore의 한계점
- profile에 많은 것을 가질 수 없다. 오직, 이름과 프로필 사진 뿐이다.
  이름이나 프로필 사진 변경은 updateProfile로 가능하지만 이외의 것들은 (이메일 등) 다른 메소드를 사용해야한다.

* userObj를 router에서 이곳저곳으로 props로 주는 이유
- authService.currentUser.uid 로 각 컴포넌트에서 접근할 수 있지만 우선 이렇게 하면 통일성이 없어지고 소스를 하나로 통일할 수 없다.  
-userObj만 전달하는 식으로 한다면 한 소스만으로 통일해서 사용하는 것이고 즉, 한 userObj의 정보만을 변ㄱㅇ함으로서 다른 모든 요소들을 리렌더링 해줄 수 있기 때문이다.
-즉, userObj를 한 컴포넌트에서 변경하면, userObj를 사용하는 모든 컴포넌트의 요소가 재렌더링 된다. -> 리액트의 특징

- #5.2를 보면 즉, profile에서 유저이름을 변경한다. 하지만 nav에 있는 유저이름은 즉시 변경되지 않고 f5해야만 변경된다.  
이를 userObj를 state로 가지는 app에서 변경시켜준다면, 헤더인 nav에 있는 유저이름도 즉시 변경될 것이다.  

우리가 updateProfile을 profile.js에서 사용하면 firebase 쪽의 user를 새로고침해주는데 nav는 firebase에 연결되어 있지 않다. nav는 userObj에 연결되어 있다. => 리액트의 특징  
그래서 firebase의 정보를 가지고 react.js를 업데이트 해줘야 한다.그걸 refreshUser가 하는 일이다. 


* 오류
Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function
https://velog.io/@ohgoodkim/-%EC%97%90%EB%9F%AC%EB%85%B8%ED%8A%B8-Cant-perform-a-React-state-update-on-an-unmounted-component

* 오류
React does not recognize the `computedMatch` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `computedmatch` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
https://velog.io/@kwakky/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%98%A4%EB%A5%98-%EC%88%98%EC%A0%95Router
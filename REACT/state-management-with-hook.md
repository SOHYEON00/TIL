# State management with only hooks

리액트에서 제공하는 훅만을 이용해 상태 관리하는 방법.

<br/>

기본적으로 리액트에서의 상태 관리를 위해 `redux`라는 상태 관리 라이브러리를 사용해왔다. 
하지만 규모가 크지 않은 프로젝트에서는 굳이 라이브러리까지 쓸 필요는 없다. 규모가 작음에도 불구하고 상태 관리 개념을 익히고 싶거나 props drilling을 피하기 위해 리액트에서 제공하고 있는 훅이 무엇이 있는지와 사용법에 대해 알아본다.

<br/>

> redux의 개념을 알고 있다는 가정하에 작성된 글입니다.

<br/>

## useContext

리덕스에서는 상태를 모아두는 바구니인 store 개념을 사용해 props drilling을 해결한다. `useContext`는 라이브러리를 사용하지 않고 store의 개념을 사용할 수 있게 해주는 훅이다.

### 사용법

App > Header > UserInfo 컴포넌트가 부모 > 자식 순으로 위치한다.
컨텍스트를 다양하게 써보고자 Header 컴포넌트에서 입력받고 userInfo 컴포넌트에서 입력받은 값을 출력하는 예제이다.



src/App.tsx
```
import React, { createContext, useState } from "react";
import Header from "./Header";

export const UserContext = createContext({
  userName: '',
  handleChange: (name: string) => {},
});

function App() {

  const [userName, setUserName] = useState<string>('init');

  const handleChange = (name: string) => {
    setUserName(name);
  };

  return (
    <UserContext.Provider value={{ userName, handleChange }}>
      <Header />
    </UserContext.Provider>
  );

}

export default App;
```

src/Header.tsx
```
import React, { useContext} from "react";
import UserInfo from "./UserInfo";
import { UserContext} from './App';


const Header = () => {
  const { handleChange } = useContext(UserContext);

  return (
    <>
      <input type="string" onChange={(e) => handleChange(e.target.value)}/>
      <UserInfo />
    </>
  );
};

export default Header;

```
src/UserInfo.tsx
```
import React, { useContext} from "react";
import { UserContext } from './App';

const UserInfo = () => {
  const { userName } = useContext(UserContext);

  return <p>{userName}</p>;
};

export default UserInfo;

```


## useReducer


<br/>

# Optimization with hooks

리액트에서 제공하는 훅을 이용해 최적화하는 방법.

<br/>

## useMemo

## useCallback
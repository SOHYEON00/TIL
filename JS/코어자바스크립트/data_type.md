# 자바스크립트 엔진에서의 데이터


> (정재남) 코어자바스크립트 책을 보며 자바스크립트에 대해 깊게 공부하기 위한 페이지입니다. <br/>
  저작권으로 인해 자세한 내용은 올리지 못하나, 단순 예제 및 코드를 통해 복습하기 위한 목적만 존재합니다. <br/>
  저작권 및 개인 연습을 위해 책과 약간의 차이가 있을 수 있습니다.

<br/><br/>

### 01. 객체의 가변성에 따른 문제점

* user2를 생성.할당하는 과정에서 user의 내부 프로퍼티 값도 변경된다. 

```
let user = {
    name: 'SOHYONE',
    age: 12
};

let changeAge = (obj, newAge) => {
    let newUser = obj;
    newUser.age = newAge;
    return newUser;
};

let user2 = changeAge(user, 20);

if(user !== user2){
  console.log('User Info was changed.'); //출력되지 않음
}

console.log(user.age, user2.age); //20, 20  
console.log(user === user2); //true 
```

* 객체 내부 프로퍼티 값이 변경된 경우를 탐지하여 출력해줘야 하는 경고문이 출력되지 않음
* user1의 age프로퍼티도 수정되었다. ***가변성 = 불변객체 유지 불가***

<br/><br/>

### 02. 가변성 문제 해결법 

* **해결법** : changeAge()에서 새로운 객체 데이터를 리턴해준다.
* **NEW 문제점** : 기존 객체 user에 대해 불변성은 유지되지만 직접 하드코딩으로 입력된 문제 발생

```
let user = {
  name: 'SOHYONE',
  age: 12
};

let changeAge = (obj, newAge) => {
  return{           
    name: obj.name,
    age: newAge
  }
}
let user2 = changeAge(user, 20);

if(user !== user2){
console.log('User Info was changed.'); //출력됨
}

console.log(user.age, user2.age); //12, 20
console.log(user === user2); //false
```
<br/><br/>

### 03. 하드코딩 문제 해결법

* **해결법** : 대상 객체의 프로퍼티 개수에 상관 없이 모든 프로퍼티를 복사함으로 해결.

```
let user = {
  name: 'SOHYONE',
  age: 12
};

let copyObj = (target) => {
  let result = {};
  for( let prop in target){
    result[prop] = target[prop];
  }
  return result;
}

let user2 = copyObj(user);
user2.age = 20;

if(user !== user2){
console.log('User Info was changed.'); //출력됨
}

console.log(user.age, user2.age); //12, 20
console.log(user === user2); //false
```

* 새로운 객체 result에 target(현재 user)의 프로퍼티의 값 하나하나를 복사한다.

<br/><br/>

***

### 추가하여 공부할 점
마지막 03번 해결법을 보며 객체의 속성 접근자에 []도 사용이 가능함을 알았다. MDN에 검색해보니 기존에 알던 Object.prop과 같은 속성 접근자 이지만, console.log로 실험해보았을 때 이 코드에선 .(점 표기법)으로 접근하고자 했을 때 undefined가 나왔다. 조금 더 자세히 공부해보자.

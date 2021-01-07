// 출처 : 코어스크립트 정재남


// 01. 객체의 가변성에 따른 문제점 
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


// 02. 가변성 문제 해결법 
let user = {
  name: 'SOHYONE',
  age: 12
};

let changeAge = (obj, newAge) => {
  return{           // 새로운 객체데이터를 리턴해 줌.
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


// 03. 하드코딩 문제 해결법 
let user = {
  name: 'SOHYONE',
  age: 12
};

let copyObj = (target) => {
  let result = {};
  for( let prop in target){
    result[prop] = target[prop]; //새로운 객체 result에 target(현재 user)의 프로퍼티의 값 하나하나를 복사함.
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





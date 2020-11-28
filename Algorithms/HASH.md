> 컴공을 나왔지만 여전히 알고리즘은 부족하다고 느껴집니다.
꾸준한 알고리즘 공부를 통해 지식을 겟합시다!

## 동기
알고리즘 공부를 시작하고자 동기 2명과 스터디를 시작했습니다.
셋 다 어디서부터 시작할까 하다, 일주일에 개념 하나씩만, 프로그래머스의 문제를 풀자 싶어, 해시부터 시작하게 되었습니다.

## 해시 개념


## 문제 1 완주하지 못한 선수
![](https://images.velog.io/images/sohyeon00/post/5fa60f75-8272-4d64-b0d4-77bb9f30d7db/image.png)

문제 자체는 정렬을 사용하면 훨씬 빠르고 간편하다고 생각되었는데, 해시를 공부하는 것이 목적이기 때문에 어떻게 해시를 적용해야할까 고민이 많았습니다.

### 로직
- 참가자와 완주자의 배열 크기 차이는 무조건 1로 단 한 명만 완주하지 못함을 의미한다.
-  해시는 [key-value]의 조합이므로 어떤 것을 key, value로 둘 지 정해야 한다.
 -> 참가자의 인덱스를 key(name)-value(1)로 생각하자.
- 참가자 배열을 돌며 각 key마다 1이라는 값을 부여한다.

- 이후 완주자 배열을 돌며 key값을 찾는 경우, value값을 -1한다. 즉, 동명이인이 참가한 경우 참가자 배열의 결과로 value=2가 될 것이고 완주자에서 -1만 되기 때문에 완주하지 못한 한 명을 거를 수 있다.


### 만난 문제
1. 참가자배열에서 value값을 obj로 주기 위해 돌고 있는 와중, 이미 동명이인이 있는 경우는 어떻게 체크해야하나?
![](https://images.velog.io/images/sohyeon00/post/be7c70c8-7f2b-484e-84c7-050797e777c3/image.png)
```
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```
+ Object['key'] 의 생김새가 낯설어 이해가 필요하다고 느낌.
 내가 설정한 key를 object의 프로퍼티로 설정하고 읽기 위해 []를 사용함. 
 - JS Object property . vs [] nation
     - .표현은 객체의 속성에 접근
     - [] 표현은 변수로 접근 가능 


### 제출 코드
```
function solution(participants, completions) {
    var answer = '';
    
    const obj = {};
    for(const participant of participants){
        if(!obj[participant]){
            obj[participant] = 1;           
        }else{
            obj[participant] += 1;
        }
    }
    
    for(const completion of completions) {
       if(obj[completion]) {
           obj[completion] -= 1;
       }        
    }
    for(const [key, value] of Object.entries(obj)) {
        if(value > 0) {
            return answer = key;
        }
    }
    return answer;
}


```

> #### 참고 및 출처
참고 : 노요셉님 (거의 요셉님 코드 공부..) https://velog.io/@noyo0123/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-javascript-%EC%99%84%EC%A3%BC%ED%95%98%EC%A7%80-%EB%AA%BB%ED%95%9C-%EC%84%A0%EC%88%98-otk2fxojro
js object-key vs object-key 차이 : https://medium.com/sjk5766/javascript-object-key-vs-object-key-%EC%B0%A8%EC%9D%B4-3c21eb49b763
출처 : 프로그래머스 https://programmers.co.kr/learn/courses/30/lessons/42576
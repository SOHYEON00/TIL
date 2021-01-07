### 문제 설명
![](https://images.velog.io/images/sohyeon00/post/81c7ad1f-52bf-420b-938a-c8325f9a3aa9/image.png)

### 로직
- 배열은 [종류, 이름] 으로 구성됨. key : 종류, value : 이름 으로 설정
- 확률과 경우의 수를 생각해보기로 함.
1. 종류별로 카운트를 셈 => 예시1에서는 각 n, m개
2. 경우의 수로 봤을 때 총 nxm 이 되어야하지만, 최소 1개의 의상만 입는 경우가 있기 때문에 (n+1)x(m+1)
3. 스파이는 꼭 하루에 최소 1개의 의상은 입어야 하므로, 아무것도 입지 않는 경우의 수를 제외하기 위해 -1해줘야 함.

![](https://images.velog.io/images/sohyeon00/post/0f4818dc-0c66-4a40-ab40-8d9384a689e9/image.png)
결과 : 종류별로 카운팅 가능
![](https://images.velog.io/images/sohyeon00/post/3c513120-25dd-4148-9474-f22bcfac6828/image.png)
<br><br>
### 새로 알게 된 것
- 객체의 길이 가져오기
배열의 경우 Array.length로 해결
객체는 Object.keys(obj).length로 가야 객체의 길이를 알 수 있다.

<br><br>
### 제출 코드
```
function solution(clothes) {
    var answer = 0;
    const obj = {};

    for(const [name, type] of clothes) {
        let count = 1;
        // console.log(value); value가 종류 출력함.
        (obj[type]===undefined) ? obj[type] = count : obj[type] += 1; 
    }
     
    
    //[key, value]로 정리된 obj의 경우의 수 계산
    for(const [key, value] of Object.entries(obj)) {
        if(Object.keys(obj).length === 1) {
            answer = value;
            return answer;
        }  
        (answer === 0) ? answer = (value+1) : answer *= (value+1);
    }
    return answer - 1;
}

```

<br><br><br><br><br><br>
> 출처
프로그래머스
https://programmers.co.kr/learn/courses/30/lessons/42578
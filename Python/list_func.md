# Python - list functions

자주 사용하지만 할 때마다 헷갈리는 함수들 사용법을 정리해보자.

### sort() 와 sorted의 차이
- 함수 실행 후 반환값이 다르다.
- reverse:True 를 사용해 오름차순, 내림차순이 가능하다. 기본은 오름차순

#### sort()
반환 값 없음. 바로 함수만 적용

```
a = [5, 2, 3, 1, 4]
a.sort()
a
[1, 2, 3, 4, 5]
```
#### sorted()
정렬된 리스트를 반환함

```
sorted({1: 'D', 2: 'B', 3: 'B', 4: 'E', 5: 'A'})
[1, 2, 3, 4, 5]
```

### 파이썬 자리 수 조절
#### round()
숫자 n 뒤에 입력하는 수에 따라 소수점 자리수 조절이 가능하다.

```
n = 0.12345
round(n) // 0
round(n,2) // 0.12
```

#### math.() 올림/내림/버림
소수 i를 입력하면 정수로 바꿔준다.

math.ceil(i) : 올림
math.floor(i) : 내림
math.trunc(i) : 버림

- import math를 꼭 해줘야 함.




***

> 출처
sort https://docs.python.org/ko/3/howto/sorting.html
자리 수 조절 https://dpdpwl.tistory.com/94
https://dpdpwl.tistory.com/94
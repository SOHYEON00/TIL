## Python - 정렬

> 다음 문서는 python 공식문서를 보고 공부/정리한 내용입니다.

***



파이썬 리스트에는 정렬에 사용되는 내장 함수 2가지가 있다.
둘 다 리스트를 정렬해준다는 기능은 똑같지만 약간의 차이가 있다.

### 1. sort() 
- list.sort() : 리스트를 제자리에서 수정함
- 리스트만 정렬 가능

### 2. sorted() 
- sorted(list) : 정렬된 새로운 리스트를 반환함.
- 리스트 말고 dictionary 등, 모든 이터러블을 정렬할 수 있음.



### key 매개변수 - 정렬기준 함수 사용하기

#### 형식
- list.sort(key=n)
- sorted(list, key=n)

#### 특징
- 단일 인자만을 받는다.
- 키 함수가 각 입력 레코드에 대해 정확히 한 번 호출되기 때문에 빠르다.
- lambda 함수를 사용해 조금 더 복잡하게 객체 정렬도 가능하다.



### operator 모듈 함수
: key 함수는 매우 일반적이고operator함수는 파이썬에서 제공하는 편리함수.
이 모듈을 사용하여 itemgetter(), attrgetter(), methodcaller() 함수를 key의 인자로 사용하여 정렬할 수 있다.

#### 특징
1) 더 빠르고 간단한 코드를 작성할 수 있다.
2) 다중 수준의 정렬을 지원한다. 


ex 1-2) student_objects 리스트를 grade로 정렬한 후, age로 정렬하기.
```
student_objects = [
    Student('john', 'A', 15),
    Student('jane', 'B', 12),
    Student('dave', 'B', 10),
]

# 1.
sorted(student_objects, key=attrgetter('grade', 'age'))
[('john', 'A', 15), ('dave', 'B', 10), ('jane', 'B', 12)]

# 2. 
sorted(student_tuples, key=itemgetter(1,2))
[('john', 'A', 15), ('dave', 'B', 10), ('jane', 'B', 12)]
```
<br/>
<br/>

### reverse - 오름차순 / 내림차순
- key 처럼 reverse라는 매개변수를 True(내림차순) or False(오름차순) 로 받아 정렬이 가능하다.



<br/>
<br/><br/>
<br/><br/>
<br/>



***

> 출처
> https://docs.python.org/ko/3/howto/sorting.html
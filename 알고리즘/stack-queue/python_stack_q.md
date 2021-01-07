
### 동기
동기들과 알고리즘 스터디를 시작하며 개인적으로 파이썬을 새로 공부하기 시작했다. 아주 기본적인 문법만 읽고 바로 스택과 큐 구현에 집중해 파이썬을 시작하기로 결심.

여러 아티클들을 읽고 간단한 실습을 거친 뒤에, 파이썬에서는 스택과 큐를 어떻게 구현하는지 궁금해져 해당 아티클을 공부하는 겸 번역하기로 했다.

<br><br>

> #### 주의!
원문 작성자의 모든 말을 번역하지 않았습니다.
공부하며 정리하는 용으로 해당 글을 작성합니다.😁
또한 번역이 100% 완벽하지 않을 수 있습니다. 
언제든 댓글로 알려주세요.

<br><br><br/><br/>

## 스택 Basic

* 스택의 특징 
-list에 엘리먼트를 추가(push)하고 추출(pop) 하는 동작은 모두 LIFO (Last In First Out).
-LIFO : 마지막으로 들어온 요소를 가장 처음으로 제거함.

```
// Using lists : 
pancakeStack = []

// list에 .append()함수를 이용해 스택에 엘리먼트를 추가하는 동작을 함. 이를 PUSH 라고 함.
pancakeStack.append('Pancake #1')
pancakeStack.append('Pancake #2')
pancakeStack.append('Pancake #3')

print(pancakeStack) #['Pancake #1', 'Pancake #2', 'Pancake #3']

// list에 .pop()를 이용해 스택의 엘리먼트를 제거하는 동작을 함. 이를 POP이라고 함.
pancakeStack.pop()
print(pancakeStack) #['Pancake #1', 'Pancake #2']
```


## 큐 Basic
* PUSH작업은 스택과 같다. 다만, enqueue or enqueuing이라고 함.
* 스택과 다르게 큐의 삭제작업은 FIFO (First In First Out)으로 진행됨. 맨 처음 들어온 요소부터 제거함.
이를 dequeue or dequeuing 이라고 함.

```
# 티켓매표소로 Queue(큐) 설명하기

#줄이 비어있는 티켓 매표소가 있다고 하자.
ticket_queue = []

#이때, 손님이 한 명 줄을 선 경우
ticket_queue.append('Customer #1')

#2명이 줄을 더 서 총 3명의 손님이 대기 중이다.
ticket_queue.append('Customer #2')
ticket_queue.append('Customer #3')
print(ticket_queue) #['Customer #1', 'Customer #2', 'Customer #3']

#pop(0)인 이유 : 맨 처음 엘리먼트 제거를 위해 인덱스가 0인 요소를 pop
print("티켓을 산 사람: " + ticket_queue.pop(0) ) #티켓을 산 사람: Customer #1
print(ticket_queue)  #['Customer #2', 'Customer #3']
```

👍그림으로 이해하기
![](https://images.velog.io/images/sohyeon00/post/83d368b6-5e2a-4d47-9364-dddceadabf07/image.png)

<br/><br/>

### collections - deque를 이용한 스택
- deque 객체를 이용하는 걸 제외하고는 특별히 다른 건 없지만, 성능적으로 낫다.
```
from collections import deque

pancakeStack = deque()


# element 삽입 .append()

pancakeStack.append('Pancake #1')
pancakeStack.append('Pancake #2')
pancakeStack.append('Pancake #3')
print(pancakeStack) // deque(['Pancake #1', 'Pancake #2', 'Pancake #3'])


# element 삭제 .pop()

print(pancakeStack) #deque(['Pancake #1', 'Pancake #2']) > LIFO로 동작하는 걸 볼 수 있다.
```
<br/><br/><br/>

### collections - deque를 이용한 큐
- 문법적으로 비슷하지만 pop() 대신, popleft()를 사용한다는 점이 특별히 다르다.

```
from collections import deque

ticket_queue = deque()

# element 삽입
ticket_queue.append('Customer # 1')
ticket_queue.append('Customer # 2')
ticket_queue.append('Customer # 3')

print(ticket_queue) #deque(['Customer # 1', 'Customer # 2', 'Customer # 3'])

# element 삭제
print(ticket_queue.popleft()) #Customer # 1
ticket_queue.popleft() # 'Customer #2 삭제'

print(ticket_queue) #deque(['Customer # 3'])
``` 

<br><br>

#### 스택과 큐의 사용 📕
- 스택
취소 기능 (undo)를 구현해야할 경우, stack이 가장 적절할 것.
UI에 어떠한 이벤트가 일어날 경우, 우리는 stack에 push 작업 수행 후, pop을 하면 우리가 흔히 아는 취소 ex) 뒤로가기 등의 작업을 수행할 수 있다.

- 큐
일련의 작업들 ex) 코드 에 데이터가 입력되거나 스크립트에 입력이 발생할 경우, 해당 데이터들을 일련으로 실행해야할 경우 queue를 사용하는 것이 적절하다.
큐에 데이터를 저장(enqueue)하고 순서대로 처리(dequeue)하는 것이 적절하기 때문이다.

<br><br><br><br>

### 스택과 큐 모두 사용가능한 함수들

```
#### 1. deque아니어도 언제든 사용 가능 함수들


# 1. 길이 구하기
# len(pancakeStack) #3

# 2. 아이템 x와 매치되는 요소 개수 카운트하기
# pancakeStack.count('Pancake #1') #1

# 3. 스택/큐에 아이템 추가하기
# pancakes = ['Pancake #4','Pancake #5','Pancake #6']

# pancakeStack.extend(pancakes)
# print(pancakeStack) #deque(['Pancake #1', 'Pancake #2', 'Pancake #3', 'Pancake #4', 'Pancake #5', 'Pancake #6'])

# 4. 스택/큐 뒤집기 (reverse)
# pancakeStack.reverse()
```
<br><br>

#### 2. deque에서만 사용 가능 함수
```
# 맨 끝의 엘리먼트 n개를 맨 처음으로 옮기기
#.rotate(n) : n은 맨 끝 엘리먼트 몇 개를 옮길지 결정 

pancakeStack.rotate(1)# deque(['Pancake #1', 'Pancake #2', 'Pancake #3']) >> deque(['Pancake #3', 'Pancake #1', 'Pancake #2'])
print(pancakeStack) 

pancakeStack.rotate(2)# deque(['Pancake #1', 'Pancake #2', 'Pancake #3']) >> deque(['Pancake #2', 'Pancake #3', 'Pancake #1'])
print(pancakeStack) 
```
<br><br>

### 결론
우리는 일상생활에서 언제든 스택과 큐를 접할 수 있다.
list를 사용하면 파이썬에서 언제든 쉽게 스택과 큐를 구현할 수 있으니 직접 구현해보자!

<br><br><br>

***
> 출처

Stacks and Queues in Python
https://levelup.gitconnected.com/stacks-and-queues-in-python-b2e8b4dbd876
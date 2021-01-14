
## 🎥 프로젝트 소개
![](https://images.velog.io/images/sohyeon00/post/bf329b33-9c11-426c-81d4-c142bd77721b/%602.gif)

본 프로젝트는 영화 좌석 예약 중 선택 기능을 구현한 토이 프로젝트이다.  

> 기본 아이디어 및 html,css 코드 출처 : <br/> https://www.udemy.com/course/web-projects-with-vanilla-javascript/

<br/> 

토이 프로젝트를 통해 javascript의 활용을 공부하고자 시작했으며 앞으로 조금 더 규모있는 (아주 조금일테지만) 프로젝트 진행 시, 리액트로 리팩토링해보고자 한다.

udemy 강의를 보고 기본적인 선택 및 localstorage 저장 기능을 구현하였고 이후 몇 가지의 기능을 추가하였다.  
자바스크립트를 사용한 토이프로젝트라고 하지만 기본 기능들 자체가 너무 간단하고 아쉬운 게 많았다. 그래서 간단하게 몇 가지의 기능 추가와 스타일 변경만 해보았다. 

<br/>

### 사용 기술
HTML, CSS, Javascript
<br/><br/><br/><br/>

## Main Features

### 01. localStorage을 사용한 데이터 저장  
![](https://images.velog.io/images/sohyeon00/post/92b51c35-a098-4a7b-9791-499fdf4d55b5/%604.gif)  

현재 선택한 정보 중 좌석 리스트와 영화 인덱스, 가격을 localStroage에 저장하여 사이트가 새로고침되어도 선택 값이 유지되게 하였다. 
![](https://images.velog.io/images/sohyeon00/post/d75d7002-0787-44ad-b4fa-524c48d57e07/carbon%20(3).png)
* currentSelectedSeat : 현재 선택된 좌석리스트가 nodList 형태로 담긴 변수
* seatsIndex : 선택된 좌석들의 nodeList의 각 요소들의 인덱스(좌석번호)로 바꿔 저장된 배열
* 배열 seatsIndex를 문자열로 바꾸어 localStorage에 "selectedSeats" 이름으로 저장하였다.


<br/><br/><br/>

### 02. 반응형 'Selected Info' 컨테이너 


![](https://images.velog.io/images/sohyeon00/post/13997717-12a6-481a-803c-87e67ac66257/%604.gif)
선택된 정보들이 localStorage에 저장되는 것 뿐만 아니라 실제 영화 예매 사이트처럼 선택한 값들이 화면에 출력되면 좋겠다고 생각하여 선택 정보를 담는 컨테이너를 추가하였다.  

![](https://images.velog.io/images/sohyeon00/post/adb60715-7494-48e3-bd3e-5bb7a7d3bffd/carbon.png)
* 반응형에 필요한 기능은 간단하게 컨테이너를 보여주거나 보여주지 않는 것이었기 때문에 media query를 사용하여 display만 조정하였다.  

![](https://images.velog.io/images/sohyeon00/post/7316f38f-4e36-402b-813c-628e07127d15/carbon%20(1).png)
* 컨테이너에 출력된 값들은 모두 유저가 사이트에 입장할 때부터 실행되는 함수 중 하나인 populateUI 함수에서 정해진다.

  - 선택된 좌석과 영화 정보는 localStorage에서 얻는다.
  - 정보가 존재하는 경우,
    - seat에는 localStorage에서 얻은 좌석 리스트를 출력한다.
    - movie에는 현재 선택한 영화 인덱스(selectedMovieIndex) 를 사용하여 영화 정보리스트(movieSelect)에서 selectedMovieIndex에 해당하는 영화 div의 innerText값을 출력한다.
  - 정보가 존재하지 않는 경우,
  선택한 좌석/영화가 없다고 출력해준다.

<br/><br/><br/><br/>

## Detail Features


### 01. 영화가격과 선택 좌석 정보에 맞는 금액 안내 문구 출력 
![](https://images.velog.io/images/sohyeon00/post/d734b788-f564-45ca-a232-ec54fe6830bf/%604.gif)
선택된 좌석 개수와 영화 금액에 맞춰 하단에 현재 몇 개의 좌석을 선택했는지와 총 금액에 대한 안내문구를 출력해주었다.  

![](https://images.velog.io/images/sohyeon00/post/9f917c70-a07c-42e1-a7f9-e3461350ef74/carbon%20(1).png)

* localStorage에 저장할 때 사용했던 배열의 길이 (selectedSeatsCount) 로 현재 좌석 개수를 체크하였다.
* 현재 선택된 영화 값을 가진 ticketPrice와 selectedSeatsCount를 곱하여 총 결제금액을 구했다.

* movieSelect.value는 원래 string 값이지만, +를 앞에 붙여줌으로써 number로 간단하게 만들 수 있다.  
  다른 방법으로는 parseInt()를 사용할 수 있다.

<br/><br/><br/>

### 02. Reset 기능
![](https://images.velog.io/images/sohyeon00/post/787fc75b-9226-4351-bde4-12cc8e624af3/carbon%20(4).png)

* 값이 변경되는 걸 확인하기 위해 선택정보가 null인 상태에서 시작하고 싶었는데 좌석을 일일이 선택하여 리셋상태로 만드는 게 귀찮아 추가한 기능이다.

* button 태그를 추가하여 click event를 추가해주었다.
* localStorage에 setItem으로 세팅된 값들도 남기고 싶지 않아 localStorage의 clear 메소드를 사용하였다.

<br/>

### 03. 좌석 번호 지정
![](https://images.velog.io/images/sohyeon00/post/3b65932a-1e1c-48a0-8f1f-8a8222ed251c/carbon%20(2).png)

왼쪽에 선택 정보를 알려주는 컨테이너를 추가했기 때문에, 유저가 좌석번호를 확인할 수 있어야 한다고 생각해 각 좌석 div 의 innerText에 좌석 번호를 넣어주었다.

* writeSeatNumber 함수는 사이트가 실행되자마자 실행되어야하는 함수이기 때문에 함수 표현식이 아니라 선언문으로 작성하였다.  
선언문은 코드 실행 시, 함수 전체가 호이스팅되기 때문에 함수가 작성된 위치 위에서도 함수 실행이 가능하기 때문이다. 

* 10이하의 인덱스는 앞에 문자열0을 붙여 2자리 수로 출력되게 하였다.
<br/><br/><br/><br/>


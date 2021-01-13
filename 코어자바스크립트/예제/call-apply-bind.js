// 01. 화살표 함수와 그냥 함수에서의 this값 차이를 살펴보자.

//ES5
const obj = {
    outer: function () {
      console.log(this); //obj
      let innerFunc = function() {
        console.log(this); //window
      };
      innerFunc();
    }
  }
  
  obj.outer();

  //ES6 Arrow Fucntion
  const obj = {
    outer: function () {
      console.log(this); //obj
      let innerFunc = () => {
        console.log(this); //obj
      };
      innerFunc();
    }
  }
  
  obj.outer();

//   02. 콜백 함수에서의 this - 별도의 인자로 this를 받는 경우
const report = {
    sum: 0,
    count: 0,
    add: function () {
      let args = Array.prototype.slice.call(arguments);  //arguments : {0:60,1:85,2:95}
   
      args.forEach(function (entry) { //args 배열을 순회하며 콜백함수 실행
        this.sum += entry; //이곳의 this = 줄의 this
        ++this.count;  //이곳의 this = 줄의 this
      }, this);
    },
    average: function () {
      return this.sum / this.count;
    }
  };
  
  report.add(60,85,95); // 60, 85, 95를 인자로 받아 [60, 85, 95]라는 배열 생성
  console.log(report.sum, report.count, report.average());
  
  // thisArg를 인자로 받는 메서드 ES6
  /*
    01. Array.prototype.forEach(callback [, thisArg])
    02. Array.prototype.map(callback [, thisArg])
    03. Array.prototype.filter(callback [, thisArg])
    04. Array.prototype.some(callback [, thisArg])
    05. Array.prototype.every(callback [, thisArg])
    06. Array.prototype.find(callback [, thisArg])
    07. Array.prototype.findIndex(callback [, thisArg])
    08. Array.prototype.flatMap(callback [, thisArg])
    09. Array.prototype.from(arrayLike [, callback [, thisArg])
    10. Set.prototype.forEach(callback [, thisArg])
    11. Map.prototype.forEach(callback [, thisArg])
   */
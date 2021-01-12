// 화살표 함수와 그냥 함수에서의 this값 차이를 살펴보자.

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
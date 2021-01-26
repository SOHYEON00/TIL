//car변수에 객체 할당
/* 단점 : 일방적으로 car.fuel = 20000 이렇게 할당가능.
   -> 임의로 값을 바꾸지 못하도록 방어하기 위해 클로저 활용
      즉, 객체가 아닌 함수로 만들고 필요한 멤버만을 return하자.
*/
var car = {
    fuel: Math.ceil(Math.random() * 10 + 10),
    power: Math.ceil(Math.random() * 3 +2),
    moved: 0,
    run: function() {
      var km = Math.ceil(Math.random() * 6);
      var wasteFuel = km / this.power;
      if(this.fuel < wasteFuel) {
        console.log('이동 불가');
        return;
      }
      this.fuel -= wasteFuel;
      this.moved += km;
      console.log(km + 'km 이동 ( 총 '+ this.moved + 'km)');
    }
  };
  

var createCar = function () {
    var fuel = Math.ceil(Math.random() * 10 + 10);
    var power = Math.ceil(Math.random() * 3 + 2);
    var moved = 0;
    return {
        get moved() {
            return moved;
        },
        run: function () {
            var km = Math.ceil(Math.random() * 6);
            var wasteFuel = km / power;
            if(fuel < wasteFuel) {
                console.log('이동불가');
                return;
            }
            fuel -= wasteFuel;
            moved += km;
            console.log(km + 'km 이동 ( 총 '+ this.moved + 'km)');
        }
    }
}
var car = createCar();


// 부분 적용 함수 구현(1) - bind()
var add = function () {
    var result = 0;
    for(var i=0; i< arguments.length; i++){
      result += arguments[i];
    }
    console.log(arguments);
  }
  
  var addPartial = add.bind(null, 1,2,3,4,5);
  console.log(addPartial(6,7,8,9,0));
// addPartial 함수는 인자 5개를 미리 적용하고 추후 추가로 인자를 전달하면 모든 인자를 모아 원래의 함수가 실행되는 부분 적용 함수
// add 함수는 this를 사용하지 않으므로 bind메서드만으로 구현됨
// this값을 null로 변경할 수 밖에 없기 때문에 메서드에서는 사용 불가능해 보임.


// 부분 적용 함수 구현(2) - this에 관여하지 않는 별도의 부분 적용 함수
var partial = function () {
    var originalPartialArgs = arguments;
    var func = originalPartialArgs[0];
  
    if(typeof func !== 'function'){
      throw new Error('첫 번째 인자가 함수가 아닙니다.');
    }
    return function () {
      var partialArgs = Array.prototype.slice.call(originalPartialArgs);
      var restArgs = Array.prototype.slice.call(arguments);
      return func.apply(this, partialArgs.concat(restArgs));
    };
  };
  
  var add = function () {
    var result = 0;
    for(var i=0; i<arguments.length; i++){
        result += arguments[i];
    }
    return result;
  }

  var addPartial = partial(add, 1,2,3,4,5);
  console.log(addPartial(6,7,8,9,10));

  var dog = {
      name: '강아지',
      greet: partial(function(prefix, suffix) {
          return prefix + this.name + suffix;
      }, '왈왈,')
  }

  dog.greet('입니다'); //왈왈, 강아지 입니다
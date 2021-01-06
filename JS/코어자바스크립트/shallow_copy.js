// 문제점 01: 중첩객체에 대해 사본과 원본이 서로 분별성없이 바뀐다.
let copyObject = (target) => {
    let result = {};
    for( let prop in target){
      result[prop] = target[prop];
    }
    return result;
  }
  
  let user = {
    name: 'SOHYEON',
    urls: {
      portfolio: '/abc',
      blog: '/bsdf',
    }
  }
  
  let user2 = copyObject(user);
  
  user2.name = 'han'; //얘는 중첩객체가 아니라서 user2의 name값만 바뀐다.
  
  user.urls.portfolio = '/bbbbbb'; //얘는 중첩객체라서 user, user2 다 바뀜   
  console.log(user);
  console.log(user2);
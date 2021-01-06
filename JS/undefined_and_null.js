let arr1 = [undefined, 1];
let arr2 = [];
arr2[1] = 1;

//arr1 : 배열의 모든 요소를 순회
//arr2 : 메소드들이 모두 비어있는 요소에 대해서는 어떤 처리도 하지 않고 뛰어넘음.
arr1.forEach((v,i) => { console.log(v,i)}); //undefined 0 
                                            //1 1
arr2.forEach((v,i) => { console.log(v,i)}); //1 1

arr1.map((v,i) => {return v+i;}); //[NaN, 2]
arr2.map((v,i) => {return v+i;}); //[empty, 2]

arr1.filter((v) => {return !v;}); //[undefined]
arr2.filter((v) => {return !v;}); //[]

arr1.reduce((p,c,i) => {return p+c+i;}, ''); //undefined0
arr2.reduce((p,c,i) => {return p+c+i;}, ''); //11
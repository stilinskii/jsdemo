process(); // 에러안남, 생성단계에서 생성 후 실행할때 호출

//함수선언문
function process() {
  console.log('prc');
}

/*----------------------------------------------------*/

//display(); // Uncaught TypeError: display is not a function
console.log(display); // var 변수로 불러지기때문에 undefined로 출력

//함수표현식 - 함수를 변수의 값을로 사용할떄
var display = function () {
  console.log('display');
};

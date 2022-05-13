console.log('Hello');
var foo = 10;
let bar = 20;
const tap = 50;

foo = 30;
bar = 40;
//tap = 100; //error
console.log(`foo : ${foo}`);
console.log(`bar : ${bar}`);
console.log(`tap : ${tap}`);

let subject;
console.log(subject); // undefined

for (var i = 1; i < 3; i++) {
  console.log(`var i = ${i}`);
}

console.log(`var i = ${i}`);

for (let j = 1; j < 3; j++) {
  console.log(`let j = ${j}`);
}

//console.log(`j = ${j}`); //Uncaught ReferenceError: j is not defined
// block scope

// hoisting - var는 선언함과 동시에 초기값이 설정되는 반면 let은 실행할때 초기값이 설정된다.
// console.log(one);
// console.log(two);

let bar2 = 1;
{
  //Uncaught ReferenceError: Cannot access 'bar2' before initialization
  //TDZ : 일시적 사각지대
  console.log(`bar2 : ${bar2}`);
  let bar2 = 2;
}
console.log(`bar2 : ${bar2}`);

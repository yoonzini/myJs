// 객체 구조분해

// 기본할당
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true

// 선언없는 할당
var a, b;

({a, b} = {a: 1, b: 2}); //(괄호로 묶어서 var처럼 인식되도록)

// 새로운 변수 이름으로 할당
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;
// 객체로부터 속성을 해체하여 객체의 원래 속성명과는 다른이름의 변수에 할당할 수 있다.
console.log(foo); // 42
console.log(bar); // true 

// 기본값
var {a = 10, b = 5} = {a: 3};
console.log(a); // 3
console.log(b); // 5

// 기본값 갖는 새로운 이름의 변수에 할당하기
var {a: aa = 10, b: bb = 5} = {a: 3};
console.log(aa); // 3
console.log(bb); // 5
interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
const seho: User = {
  age: 23,
  name: "세호"
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
getUser(seho);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let iSum: SumFunction; // iSum 에 SumFunction 인터페이스 적용

iSum = function (a: number, b: number): number { // SumFunction 인터페이스에 맞는 함수로 사용해야 함
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string; // 인덱스를 통해 지정하는 것은 string으로만 지정할 수 있다.
}

const iArr: StringArray = ['a', 'b', 'c'];
// iArr[0] = 10; //불가능
iArr[0] = 'd';

// 딕셔너리 패턴
interface StringRegexDictionary {
 [key: string]: RegExp // RegExp 정규표현식 타입으로만 지정해야 한다.
}

const iObj: StringRegexDictionary = {
  // cssFile: 'css' //불가능
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// iObj['cssFile'] = 'a';
iObj['cssFile'] = /\.scss$/;

// Object.keys(iObj).forEach(function (value) { }) // value를 string으로 추론

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person { // Person의 타입을 상속
  language: string;
}

// interface Developer { // 위와 같은 의미
//   name: string;
//   age: number;
//   language: string;
// }


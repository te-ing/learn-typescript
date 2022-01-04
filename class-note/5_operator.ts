// function logMessage(value: any) {
//   console.log(value);
// }
// var seho: string | number | boolean;

function logMessage(value: string | number) {
  if (typeof value === 'number') {  // 타입가드
    value.toString(); // 유니온타입으로 한다면 넘버타입일 때의 단어추천 가능
  }
  if (typeof value === 'string') {
    value.trim();
  }
  else throw new TypeError('value must be string or number');
  console.log(value);
}

logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeoneU(someone: Developer | Person) {
  someone.name; // 공통된 타입만 사용 가능
}

// 인터섹션 타입
function askSomeoneI(someone: Developer & Person) {
  someone.name; // 각각의 타입도 사용 가능
  someone.name
}

askSomeoneU({name: '디벨로퍼', skill:'웹 개발'}) 
askSomeoneU({name: '디벨로퍼', age: 24}) 
// askSomeoneU({ skill: '디벨로퍼', age: 24}) 

// askSomeoneI({name: '디벨로퍼', skill:'웹 개발'}) // 모든 타입을 넣어야만 실행가능

var hoseU: string | number | boolean;
var hoseI: string & number & boolean;



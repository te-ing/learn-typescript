// 인터페이스
interface Developer {
  name: string;
  skill: string;
}
// interface Person {
//   name: string;
// }
class Person {
  name: string;
}
var developer: Developer;
var person: Person;
// developer = person;
// developer = new Person(); // 클래스 등의 형식이 아닌 내부 타입으로 호환 체크됨

// 함수
var add = function (a: number) {
  // ..
}
var sum = function (a: number, b: number) { // sum의 구조가 add의 구조보다 더 크다
  // ..
}
sum = add; // 가능: sum은 파라미터 2개 가능
// add = sum; // 불가능: add는 파라미터 2개 불가능

// 제네릭
interface Empty<T> {
 //..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2
empty2 = empty1 // 제네릭으로 바뀌지 않는 빈값은 호환 가능  

interface NotEmpty<T> {
  data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
// notEmpty1 = notEmpty2 // 제네릭으로 바뀌는 값이 있기 때문에 불가능
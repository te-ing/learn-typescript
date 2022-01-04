function PersonF(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new PersonF('캡틴', 100)
console.log(capt)

class PersonC {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성되었습니다');
    this.name = name;
    this.age = age;
  }
}
const seho = new PersonC('세호', 24);
console.log(seho);
/**
 * 자바 같은 객체지향 언어를 사용하던 사람들이 쉽게 사용하도록 클래스 기반의 문법 모양을 만든 것이기 때문에
 * 프로토타입 기반의 상속이 유지되는 것에는 동일하다.
*/

/* 프로토타입
const user = { name: 'capt', age: 100 };
const admin = {};

admin.__proto__ = user;
console.log(admin.name)
admin.role= 'admin'
console.log(admin)
console.log(admin.__proto__)
*/


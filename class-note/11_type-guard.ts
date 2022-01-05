interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' }
}
var tony = introduce();
// console.log(tony.skill); // Developer와 Person의 다른 타입인 skill은 사용할 수 없음

if ((tony as Developer).skill) { // 타입단언을 이용한 skill 사용
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

// 타입가드 is타입 형식 주로 사용
function isDeveloper(target: Developer | Person): target is Developer { // is 타입가드 키워드
  return (target as Developer).skill !== undefined; // Developer면 true 반환
}

if (isDeveloper(tony)) { // 타입가드를 이용한 패턴
  console.log(tony.skill);
} else {
  console.log(tony.age);
}

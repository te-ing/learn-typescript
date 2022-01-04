// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10);
// logText('hello');
// logText(true);

// 제네릭: 호출 시점의 타입을 넘겨줄 수 있음
function logText<T>(text: T): T { // 받는타입: T 인자타입: T 반환타입: T
  console.log(text);
  return text;
}
// 타입을 지정하면서 함수호출
const talking = logText<string>('hello my love');
talking.split(' ')
logText<number>(23);

// 제네릭의 타입제한 - 1. 힌트주기

// function logTextLength<T>(text: T): T {
//   console.log(text.length); // text에 string이 들어올지 않을지 모르기 때문에 불가능
//   return text;
// }
// logTextLength('hi');

function logTextLength<T>(text: T[]): T[] { // text에 힌트를 주는 식
  console.log(text.length); 
  text.forEach(function (text) {
    console.log(text)
  })
  return text;
}
logTextLength<string>(['hi', 'abc']);

// 제네릭의 타입제한 - 2.정의된 타입 이용
interface LegnthType {
  length: number;
}
function logTextLengthI<T extends LegnthType>(text: T): T {
  text.length;
  console.log(text.length);
  return text;
}
logTextLengthI('abc');
// logTextLengthI(10);
logTextLengthI({length: 10});

// 제네릭의 타입제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
// ShoppingItem의 옵션 중 하나가 제네릭이 된다는 정의
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name")
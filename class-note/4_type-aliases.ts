interface IPerson {
  name: string;
  age: number;
}

type TPerson = {
  name: string;
  age: number;
}

const hose: TPerson = {
  name: '호세',
  age: 32
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {

}

// 타입은 확장 불가능, 링크 클릭 불가, 대신 hover시 타입 나타냄
// 가급적 interface 선언 추천
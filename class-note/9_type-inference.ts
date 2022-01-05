// 타입 추론 기본 1
var a = 'abc';

function getB(b = 10) {
  return b;
}

// 타입 추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
}

var shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello'
}

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<T> extends Dropdown<T>{
  description: string;
  tag: T;
}

var detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'a',
}

// Best Common Type
var arr = [1, 2, 3, true, true, 'abc', 'hello']; // string | boolean | number
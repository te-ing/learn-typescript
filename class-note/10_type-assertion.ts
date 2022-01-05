// 타입 단언(type assertion) // 타입스크립트 추론이 아닌, 개발자가 직접 타입지정
// var c;
// c = 20;;
// c = 'c';
// var d = c // 위 number, string 지정에도 any타입으로 설정됨

var c;
c = 20;;
c = 'c';
var d = c as string // string

// DOM API 조작
var div = document.querySelector('div');
if (div) {
  div.innerText
}
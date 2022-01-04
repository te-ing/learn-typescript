/*
enum Shoes { // 이넘값 지정하지 않았을 시 숫자로 지정됨
  Nike, // 0 
  Adidas // 1 ... 1씩 증가  Nike = 10으로 지정했다면 Adidas는 11
}

var myShoes = Shoes.Nike; 
console.log(myShoes); // 0 
*/

enum Shoes { 
  Nike = '나이키', 
  Adidas = '아디다스'
}
var myShoes = Shoes.Nike; 
console.log(myShoes); // 나이키

enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다');
  }
  if (answer === Answer.No) {
    console.log('오답입니다');
  }
}
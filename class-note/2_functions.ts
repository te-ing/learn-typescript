// 파라미터 타입정의
function sum(a: number, b: number) {
  return a + b;
}

// 반환값 타입정의
function add(): number {
  return 10;
}

// 함수 타입정의
function all(a: number, b: number): number {
  return a + b;
}

// 옵셔널 파라미터
function log(a: string, b: string, c?: string) {
  console.log(a, b, c);
}
log("hi", "hello");

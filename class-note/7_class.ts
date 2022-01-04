class PersonT {
  public age: number; // 변수 접근 범위: 모든 클래스
  protected name: string; // 변수 접근 범위: 해당 클래스와 자식 클래스
  private contact: string; // 변수 접근 범위: 해당 클래스
  readonly log: string; // 변수 접근 범위: 변경불가, 읽기만 가능

  constructor(age: number, name: string, contact: string) {
    console.log('생성되었습니다');
    this.name = name;
    this.age = age;
    this.contact = contact;
  }
}
const sehoT = new PersonT(24, '세호', '010-2432-1214');
console.log(sehoT);
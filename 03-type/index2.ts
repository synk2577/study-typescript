// # More Types
// ## 1. Literal Types (리터럴 타입)
// - '문자 그대로'의 타입 지정
// - 'Sean' 값이 아니면 에러
let x: 'Sean' = 'Sean';
x = 'Sean'; // ok
// x = 'Jun'; // error

// ## 2. Union Types (유니온 타입)
// - '|' 기호로 새로운 타입 만듦
// - 유형 결합
// - 결합된 모든 유형에 대해 유효한 작업만 허용(*)
function printId(id: number | string) {
  console.log('ID: ', id);
  // console.log('ID: ', id.toUpperCase()); // *error: number 타입에서는 사용 불가능한 메서드
}
printId(123); // ok
printId('345'); // ok
// printId({ myId: 11 }); // error

// ## 3. Intersection Types (교차 타입)
// - '&' 기호를 통해 결합 가능
// - 결합된 모든 타입에 만족해야 함.
interface Painting {
  name: String;
  color: String;
  price: Number;
}

interface Giraffe {
  name: String;
  color: String;
  height: Number;
}

const GiraffePainting: Painting & Giraffe = {
  name: '기린그림',
  color: 'yellow',
  price: 10000,
  height: 100,
};

// ## 4. Enum (열거형 타입)
// - 숫자 열거형: 초기값부터 1씩 증가 (초기값이 없는 경우 0부터 1씩 증가)
enum NumEnum {
  bob = 1,
  kevin = 2,
  dave = 3,
  stuart = 4,
}

// - 문자 열거형
enum StrEnum {
  bob = 'bob',
  kevin = 'kevin',
  dave = 'dave',
  stuart = 'stuart',
}

// - 복합 열거형
// : 복합 타입으로 선언 가능하나 같은 타입 권고
enum AnyEnum {
  bob = 1,
  kevin = 'kevin',
  dave = 2,
  stuart = 'stuart',
}

// ## 5. Function (함수)
// - 리턴 타입 선언 가능
function sum(a: number, b: number): number {
  return a + b;
}
const sum2 = (a: number, b: number): number => {
  return a + b;
};

// ## 6. Class Type (클래스 타입)
// - 타입 지정과 변수를 미리 선언 (vs. js)
// - 클래스 안에 별도의 선언 필요
class Person {
  name: string; // !!
  constructor() {
    this.name = 'John';
  }
}
const John = new Person();
console.log(John.name);

// ## 7. Type Alias (타입 별칭)
// - 타입에 별칭을 붙여 간단하게 타입 가르킬 수 있음
// - 일반 변수와 차별화 하기위에 관습적으로 대분자 사용
type Food = {
  price: number;
  brand: string;
};

const pizza: Food = {
  price: 10000,
  brand: 'DOMINO',
};

const chicken: Food = {
  price: 20000,
  brand: 'BBQ',
};

// - case1) 타입 별칭 사용하지 않은 화살표 함수
const pizzaA = (price: number, brand: string): string => {
  return `가격: ${price}원 / 브랜드: ${brand}`;
};
console.log(pizzaA(10000, 'Domino'));

// - case2) 타입 별칭 사용한 화살표 함수
// - 타입 별칭은 화살표함수 방식으로만 지정 가능
type FoodB = (price: number, brand: string) => string;
const pizzaB: FoodB = (price, brand) => {
  return `가격: ${price}원 / 브랜드: ${brand}`;
};
console.log(pizzaB(20000, 'Mrpizza'));

// ## 8. Using Types on Interface
interface StudentInfo {
  name: string;
  grade: number;
  isAdult: boolean;
}

function printInfo(personA: StudentInfo) {
  console.log(`이름: ${personA.name}`);
  console.log(`학년: ${personA.grade}`);
  console.log(`성인여부: ${personA.isAdult}`);
}

const myInfo = { name: 'Sean', grade: 1, isAdult: true };
// interface에 "isAdult: boolean;" 가 존재하지 않을 경우 무시됨
printInfo(myInfo);

// ## 9. Using Types on Generic Class
// - Generic Class: ClassName<T> 형식
// 형식 매개변수 T에 지정한 형식에 따라 클래스의 멤버와 성질이 결정됨
// 즉, T의 형식에 따라 취급하는 데이터 형식이 달라짐 (형식만 새로 지정해주면 됨)
class Plate<T> {
  public Contents!: T; // Contents에 넘겨줄 타입
}

let menu = new Plate<string>(); // string 타입의 menu 객체 생성
menu.Contents = 'Beef';

let nth = new Plate<number>(); // number 타입의 nth 객체 생성
nth.Contents = 3;
// nth.Contents = "Pork"  // error

console.log(menu.Contents, typeof menu);
console.log(nth.Contents, typeof nth);
// 정리) Generic을 사용해 타입을 넣어주면 어떤 타입이 들어올지 명시적으로 확인 가능하고, 지정해준 타입과 맞지 않는 경우 에러 확인

class Dictionary<T> {
  contents!: T;
}

// 장점) 타입만 바꿔서 클래스 재사용이 가능
let sd = new Dictionary<string>();
sd.contents = 'pi';

let nd = new Dictionary<number>();
nd.contents = 3141592;

let bd = new Dictionary<boolean>();
bd.contents = true;

console.log(sd.contents);
console.log(nd.contents);
console.log(bd.contents);

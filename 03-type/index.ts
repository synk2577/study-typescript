// # Type Annotation (타입 표기)
let myStr: string = 'hello world';
// str = 1; // error:  Type 'number' is not assignable to type 'string'.

// # Type Inference (타입 추론)
// - 타입을 선언하지 않더라도 코드를 해석해 타입 추론
// - 선언한 자료형 외의 다른 자료형 할당 불가능
let myStr2 = 'hello world';
// str2 = 2; // error:  Type 'number' is not assignable to type 'string'.

// # Data Types for TypeScript
// ## 1. Boolean
let bool: boolean = false;
let bool2: boolean = true;

// ## 2. Number
let num: number = 7;
let num2: number = 5.3;

// ## 3. String
let str: string = 'hello';

// ## 4. Object
// case1
let obj: object = { name: 'Sean', age: 20 };
// case2
type User = {
  name: string;
  age: number;
};
// or using interface
// 인터페이스는 확장성을 가짐 (다른 타입 쉽게 추가 가능)
// interface User {
//   name: string;
//   age: number;
// }
let obj2: User = { name: 'Sean', age: 20 };
// let obj3: User = { name: 7, age: 20 }; // error

// ## 5. Array
let arr: number[] = []; // "Array<number>" instead of "number[]" is also possible
arr.push(1);
// arr.push('2') // error

// ## 6. Tuple
// - 배열 형식이자 길이가 고정된 타입
let a: [string, number] = ['hi', 10];
// let b: [string, number] = [10, 'hi']; // error
// let c: [string, number] = ['hi'] // error

// ## 7. Enum
// - 특정 값들의 집합
enum Animals {
  cat,
  lion,
  pig,
}
let hero = Animals.cat;
let hero2 = Animals[1];
console.log(hero2); // lion

// ## 8. Any
// - 모든 타입 허용
let ts: any = 'hi';
let ts2: any = 7;
let ts3: any = ['1', 2, false];
// const arr = []; // 참고) 빈배열 생성시 any로 타입 추론

// ## 9. Void
function sayHi(): void {
  console.log('hi');
}
// function sayYeah(): void {
//   return "Yeah"
// } // error

// ## 10. undefined & null
// - undefined: 초기화되지 않은 값
// - null: 빈 값

// ## 11. never
// - 함수의 끝에 절대 도달하지 않음
// - 끝 없이 함수 실행 (ex. 무한루프)
function goingOn(): never {
  while (true) {
    console.log('go');
  }
}

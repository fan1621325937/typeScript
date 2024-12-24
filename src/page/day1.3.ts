// 接口

// type Person2 = {
//   name: string;
//   age: number;
// };

// interface Person {
//   name: string;
//   age: number;
// }

// let p: Person2 = {
//   name: "123",
//   age: 123,
// };

// let p: Person = {
//   name: "123",
//   age: 123,
// };

// interface animal {
//   name: string;
//   age: number;
//   eat(): void;
// }

// interface dog extends animal {
//   color: string;
// }

// interface cat extends animal {
//   color: string;
//   jump(): void;
// }

// let Dog: dog = {
//   name: "123",
//   age: 123,
//   color: "red",
//   eat() {
//     console.log("123");
//   },
// };

// interface Product {
//   getPrice(): number;
//   getName(): string;
// }

// class Car implements Product {
//   getPrice() {
//     return 123;
//   }
//   getName() {
//     return "123";
//   }
// }

// class Phone implements Product {
//     getPrice(): number {
//         throw new Error("Method not implemented.");
//     }
//     getName(): string {
//         throw new Error("Method not implemented.");
//     }

// }

// 无法确定的属性
const heights = Symbol("heights");
interface Person {
  name: string;
  age: number;
  [heights]: number;
  [propName: string]: any;
}
// let p: Person = {
//   name: "123",
//   age: 123,
//   x: 123,
//   1: 123,
//   [Symbol()]: 123,
// };

// type Person2 = Person["age" | "name"];

// type Person3 = Person[typeof heights];

// type Person4 = keyof Person;

// let p: Person4;

// type Person5<T> = {
//   [P in keyof T]: T[P];
// };

// type Person6 = Person5<Person>;


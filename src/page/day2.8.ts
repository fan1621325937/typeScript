import test from "./day2.8.1.json";
import jstest from "./day2.8.2";
let set = new Set<string>();

export default class Test {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getInfo() {
    console.log(this.name, this.age);
  }
}

function a(_a: string) {}
let b = {
  name: "123",
};
const c = "name";
b[c];
let d: string = undefined; // error "strictNullChecks": true

console.log(test);
console.log(jstest);

class Test2 {
  public name: string;
  public age: number;
  //   constructor(name: string, age: number) {
  //     this.name = name;
  //     this.age = age;
  //   }

}
let test2 = new Test2();
test2.name = "123";
test2.age = 123;

function a1(_a: number) {
  if (_a > 10) {
    return 1;
  }
}

a1(1)

// let d1: string = undefined; // error "strictNullChecks": true

// interface LabelledValue {
//   label: string;
// }

// function printLabel(labelledObj: LabelledValue) {
//   console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// interface Point {
//   readonly x: number;
//   readonly y: number;
// }

// let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

// interface test {
//   x?: number;
//   y?: number;
//   [key: string]: any;
// }

// function test2(t: test) {
//   if (t.x) {
//     console.log(t.x);
//   }
//   if (t.y) {
//     console.log(t.y);
//   }
// }

// test2({ x: 1, y: 2, z: 3 });

// let a: number[] = [1, 2, 3];
// let b: ReadonlyArray<number> = a;
// // b[10] = 10; // error
// // a = b; // error
// a = b as number[]; // ok



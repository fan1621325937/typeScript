// class Ps {
//   name: string;
//   age: number;

//   static type: string = "people";
//   constructor(name: string, age: number, type: string) {
//     this.name = name;
//     this.age = age;
//     Ps.type = type;
//   }

//   getInfo: () => void = () => {
//     console.log(this.name, this.age, Ps.type);
//   };
// }

// let ps = new Ps("张三", 18, "people");
// ps.getInfo();

// 工具类
// class Util {
//   static add(x: number, y: number): number {
//     return x + y;
//   }

//   static sub(x: number, y: number): number {
//     return x - y;
//   }
// }
//不需要反复创建类
// console.log(Util.add(1, 2));
// console.log(Util.sub(1, 2));

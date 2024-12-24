// 单件模式
class Utils2 {
  static newUtils = new Utils2();

  private constructor() {
    console.log("Utils2Utils2");
  }
  print() {
    console.log("print");
  }

  add(x: number, y: number): number {
    return x + y;
  }
}

console.log("Utils2Utils2222");

Utils2.newUtils.print();

export default Utils2.newUtils;

//防止立马创建
// class Utils2 {
//   private constructor() {
//     console.log("开始创建");
//   }
//   static instance: Utils2;
//   static getInstance() {
//     if (!Utils2.instance) {
//       Utils2.instance = new Utils2();
//     } else {
//       return Utils2.instance;
//     }
//   }
// }
// console.log(11111);

// let utils2 = Utils2.getInstance();
// let utils3 = Utils2.getInstance();

// class Demo {
//     private static _num: number = 0;  // 修改存储 num 的属性名
  
//     static get num() {
//       return this._num;  // 通过 _num 访问静态属性
//     }
  
//     static set num(value: number) {
//       if (value < 10) {
//         throw new Error("不能小于10");
//       } else {
//         this._num = value;
//         console.log(this._num);
//       }
//     }
//   }
  
//   Demo.num = 8;
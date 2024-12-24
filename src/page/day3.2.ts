// type MessageType =
//   | "image"
//   | "video"
//   | "audio"
//   | "text"
//   | "other"
//   | "file"
//   | String;

import { get } from "lodash";

// type Message = {
//   id: number;
//   type: MessageType;
//   sendmessage: string;
// };

// let Messages: Message[] = [
//   {
//     id: 1,
//     type: "image",
//     sendmessage: "你好啊,今晚咱们一起去三里屯吧",
//   },
//   {
//     id: 2,
//     type: "audio",
//     sendmessage: "朝辞白帝彩云间，千里江陵一日还",
//   },
//   {
//     id: 3,
//     type: "audio",
//     sendmessage: "你好！张无忌",
//   },
//   {
//     id: 4,
//     type: "image",
//     sendmessage: "刘老根苦练舞台绝技！",
//   },
//   {
//     id: 5,
//     type: "image",
//     sendmessage: "今晚王牌对王牌节目咋样?",
//   },
// ];

//函数重载
// function getMessage(
//   value: number | MessageType
// ): Message | undefined | Message[] {
//   if (typeof value === "number") {
//     return Messages.find((msg) => {
//       return value === msg.id;
//     });
//   } else {
//     return Messages.filter((msg) => {
//       return value === msg.type;
//     });
//   }
// }

// 重载签名
// function getMessage(id: number): Message;
// function getMessage(type: MessageType): Message[];

// //实现签名函数 any,unknown可以接受任何类型
// function getMessage(
//   value: number | MessageType,
//   length?: number
// ): Message | Message[] {
//   if (typeof value === "number") {
//     return Messages.find((msg) => {
//       return value === msg.id;
//     });
//   } else {
//     return Messages.filter((msg) => {
//       return value === msg.type;
//     }).splice(0, length);
//   }
// }

// let msg = getMessage("image");
// msg.forEach((item) => {
//   console.log("msg:", item);
// });

//方法重载
// class ArrayList {
//   //定义一个引用属性[数组]
//   constructor(public arr: any[]) {
//     this.arr = arr;
//   }

//   get(index: number): any {
//     return this.arr[index];
//   }

//   remove(value: number): number; //remove方法返回的是一个数字
//   remove(value: object): object; //remove方法返回的是一个对象
//   remove(value: any): any {
//     this.arr = this.arr.filter((ele, index) => {
//       //如果是根据数字【元素索引】去删除元素，remove方法返回的是一个数字
//       if (typeof value === "number") {
//         return value !== index;
//       } else {
//         // 如果是根据对象去删除元素，remove方法返回的是一个对象
//         return value !== ele;
//       }
//     });
//     return value;
//   }
// }

// let arrList = [
//   {
//     name: "后盾人",
//     age: 18,
//   },
//   {
//     name: "后盾人",
//     age: 19,
//   },
//   {
//     name: "后盾人",
//     age: 20,
//   },
// ];

// let list = new ArrayList(arrList);

// list.remove(0);
// list.remove({ name: "后盾人", age: 19 });

// console.log(list.get(0));

//构造器重载
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number);
//   constructor(name: string);
//   constructor(name: string, age?: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

//计算正方形面积
//计算创建正方形对象,可以给构造器爨地宽和高,也可以给构造器传递一个包含了宽和高的对象
type ShapeType = {
  //各种图形的参数
  width?: number;
  height?: number;
  radius?: number;
};

class Shape {
  public width: number;
  public height: number;
  constructor(width_: number, height_: number);
  constructor(ShapeTypeInfo: ShapeType);
  constructor(value: any, value2?: number) {
    if (typeof value === "object") {
      this.width = value.width;
      this.height = value.height;
    }

    if (typeof value === "number") {
      this.width = value;
      this.height = value2;
    }
  }

  getArea() {
    return this.width * this.height;
  }
}

let shape = new Shape(10, 20);
let shape3 = new Shape({ width: 10, height: 20 });

console.log(shape.getArea());
console.log(shape3.getArea());

export {};

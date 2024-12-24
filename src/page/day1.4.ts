let str: string | undefined = undefined;

// function fn(s?: string) {
// str?.toString();
// str!.toString();
// if (str) {
//   console.log(str);
// } else {
//   console.log("str is undefined");
// }
// }
// fn();

// any unknown undefined 可以接受 undefined
// any unknown null 可以接受 null

// let data: unknown = undefined;
// let data2: null = null;

// const控制keys无法修改可作为类型
// let obj = {
//   name: "后盾人",
//   age: 18,
// };
// const keys = "name";
// let newData = obj[keys];
// export {};

// let obj: object = {
//   name: "后盾人",
//   age: 18,
// };
// let keys = "name";
// let newData = obj[keys]; //报错有类型检查

// 解决方案1使用interface
// interface Iobj {
//   [key: string]: any;
// }
// let obj: Iobj = {
//   name: "后盾人",
//   age: 18,
// };
// let keys = "name";
// let newData = obj[keys];

// 解决方案2使用类型断言

// let obj: object = {
//   name: "后盾人",
//   age: 18,
// };

// let key = "name";
// let newData = (obj as any)[key];

//解决方案3设置any类型
// let obj: {
//   [key: string]: any;
// } = {
//   name: "后盾人",
//   age: 18,
// };

// let keys = "name";

// let newData = obj[keys];

// export {};


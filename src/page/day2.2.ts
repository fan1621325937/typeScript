// let ps: [string, number] = ["张三", 18];

// // as const 设置为只读
// let  ps2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
// ps2 = 1; // 错误

//可变元组
// let ps: [string, number, ...any[]] = [
//   "张三",
//   18,
//   "海口海淀岛四东路3号",
//   "133123333",
//   23,
//   "weixin",
//   3,
//   "str",
// ];

//可变解构元组

// let [name, age, ...others]: [string, number, ...any[]] = [
//   "wangwu",
//   18,
//   "海口海淀岛四东路3号",
//   "133123333",
//   23,
//   "weixin",
//   3,
//   "str",
// ];
// console.log(others);

// let [name, age, ...others]: [name__: string, age_: number, ...others_: any[]] =
//   ["wangwu", 18, "海口海淀岛四东路3号", "133123333", 23, "weixin", 3, "str"];
// console.log(others);

// export {};

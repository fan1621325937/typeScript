class Demo1 {
  names = "后盾人";
  age = 18;
  constructor(_name: string, _age: number) {
    this.names = _name;
    this.age = _age;
  }

  getInfo() {
    console.log(this.names, this.age);
  }
}

let ppd = Object.getOwnPropertyDescriptor(Demo1.prototype, "getInfo");

let getInfoTest = ppd?.value;

ppd!.value = (arg: any) => {
  console.log("修改前");
  getInfoTest.apply(this, arg);
  console.log("修改后");
};

Object.defineProperty(Demo1.prototype, "getInfo", ppd!);

let demo1 = new Demo1("后盾人", 18);
demo1.getInfo();

export {};

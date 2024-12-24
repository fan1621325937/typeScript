class MyLocalStorage {
  private constructor() {
    console.log("这是TS的单件设计模式的构造器");
  }
  //静态的基本类型属性
  private static instance: MyLocalStorage;
  //静态的方法
  public static getInstance() {
    if (!this.instance) {
      this.instance = new MyLocalStorage();
    }
    return this.instance;
  }

  public save(key: string, value: any) {
    if (value != null) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  public get(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
}

export default MyLocalStorage;

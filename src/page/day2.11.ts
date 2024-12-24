// 订单ID ，订单日期，顾客地址，顾客名，顾客微信，顾客手机号，客服
// interface OrderDetail {
//   orderDetailId: number;
//   data: string;
//   address: string;
//   name: string;
//   weChat: string;
//   phone: string;
// }

// class Order {
//   constructor(
//     public orderDetailId: number,
//     public data: string,
//     public address: string,
//     public name: string,
//     public weChat: string,
//     public phone: string,
//     public OrderArray?: Array<OrderDetail>
//   ) {}
// }

// let orderDetailOne = new Order(10, "电视机", "江苏", "李武", "33333", "111");

// let orderDetailTwo = new Order(11, "桌子", "江苏", "李武", "33333", "111", [
//   orderDetailOne,
// ]);

class Order {
  public num: number;
  public price: number;
  constructor(num_: number, price_: number) {
    // this.name = name_;
  }

  get total(): number {
    return this.num * this.price;
  }
}

let orderDetailOne = new Order(1, 2);

console.dir(orderDetailOne.total);
export default {};

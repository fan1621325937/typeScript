// 订单ID ，订单日期，顾客地址，顾客名，顾客微信，顾客手机号，客服
interface OrderDetail {
  orderDetailId: number;
  data: string;
  address: string;
  name: string;
  weChat: string;
  phone: string;
}

class Order {
  orderDetailId: number;
  data: string;
  address: string;
  name: string;
  weChat: string;
  phone: string;
  OrderArray: Array<OrderDetail> = [];
  constructor(
    _orderDetailId: number,
    _data: string,
    _address: string,
    _name: string,
    _weChat: string,
    _phone: string,
    _OrderArray?: Array<OrderDetail>
  ) {
    this.orderDetailId = _orderDetailId;
    this.data = _data;
    this.address = _address;
    this.name = _name;
    this.weChat = _weChat;
    this.phone = _phone;
    this.OrderArray = _OrderArray;
  }
}

let orderDetailOne = new Order(10, "电视机", "江苏", "李武", "33333", "111");

let orderDetailTwo = new Order(11, "桌子", "江苏", "李武", "33333", "111", [
  orderDetailOne,
]);


console.log(orderDetailTwo.OrderArray);

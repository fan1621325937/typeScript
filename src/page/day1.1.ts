// console.log(1);
// 枚举
// enum Week {
//   Monday = 1,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday
// }
// console.log(Week.Sunday);
// console.log(Week["Sunday"]);
// console.log(Week[1]);

// //枚举的好处
// enum EnumAuditStatus {
//   MANAER_ADUIT_FAIL = -1, //第一个常量值设置为-1
//   NO_ADUIT, // 第二个常量值自动递增1 就为0
//   AuditPending, //  第二个常量值自动递增2 就为1
//   FINAL_ADUIT_SUCCESS, // 第二个常量值自动递增3 就为2
// }

// class MyAduit {
//   getAduitStatus(status: EnumAuditStatus): void {
//     if (status === EnumAuditStatus.NO_ADUIT) {
//       console.log("没有审核");
//     } else if (status === EnumAuditStatus.AuditPending) {
//       console.log("审核中");
//     } else if (status === EnumAuditStatus.FINAL_ADUIT_SUCCESS) {
//       console.log("审核通过");
//     }
//   }
// }

// let myAduit = new MyAduit();
// myAduit.getAduitStatus(EnumAuditStatus.NO_ADUIT)



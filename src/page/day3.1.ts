type MessageType =
  | "image"
  | "video"
  | "audio"
  | "text"
  | "other"
  | "file"
  | String;

type Message = {
  id: number;
  type: MessageType;
  sendmessage: string;
};

let Messages: Message[] = [
  {
    id: 1,
    type: "image",
    sendmessage: "你好啊,今晚咱们一起去三里屯吧",
  },
  {
    id: 2,
    type: "audio",
    sendmessage: "朝辞白帝彩云间，千里江陵一日还",
  },
  {
    id: 3,
    type: "audio",
    sendmessage: "你好！张无忌",
  },
  {
    id: 4,
    type: "image",
    sendmessage: "刘老根苦练舞台绝技！",
  },
  {
    id: 5,
    type: "image",
    sendmessage: "今晚王牌对王牌节目咋样?",
  },
];

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
function getMessage(id: number): Message;
function getMessage(type: MessageType): Message[];

//实现签名函数 any,unknown可以接受任何类型
function getMessage(
  value: number | MessageType,
  length?: number
): Message | Message[] {
  if (typeof value === "number") {
    return Messages.find((msg) => {
      return value === msg.id;
    });
  } else {
    return Messages.filter((msg) => {
      return value === msg.type;
    }).splice(0, length);
  }
}

let msg = getMessage("image");
msg.forEach((item) => {
  console.log("msg:", item);
});

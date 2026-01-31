const { sendchatwork } = require("../ctr/message");
const { DateTime } = require("luxon");
const roomId = 418986732;

async function sayHello() {
  const number = Math.floor(Math.random() * 1000);
  if (number != 0) return await sendchatwork("おはよ〜", roomId);
  
  const unixTime = Math.floor(DateTime.now().toSeconds());
  await sendchatwork(`[qt][qtmeta aid=10948927 time=${unixTime}]うんち！w[/qt]`, roomId);
}

module.exports = sayHello;

const { sendchatwork } = require("../ctr/message");
const status = {
  gakusei: false,
  yuyuyu: false
}
const gakusei = 9553691;
const yuyuyu = 10911090;

async function bomb(body, messageId, roomId, accountId) {
  const probability = (status.gakusei && accountId == gakusei) ? 50 : (status.yuyuyu && accountId == yuyuyu) ? 25 : 0.5;
  
  bombcomment(probability);

  function bombcomment(probability) {
    const random = Math.random() * 100;
    if (random <= probability) {
      sendchatwork(`[rp aid=${accountId} to=${roomId}-${messageId}][pname:${accountId}]さん\n地雷を踏みました。どかーん`, roomId);
    }
  }
}

module.exports = {
  bomb,
  status,
}

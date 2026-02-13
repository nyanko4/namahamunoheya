const { sendchatwork } = require("../ctr/message");
const status = {
  gakusei: false
}
const gakusei = 9553691;

async function bomb(body, messageId, roomId, accountId) {
  const probability = (status.gakusei && accountId == gakusei) ? 30 : 0.5;
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

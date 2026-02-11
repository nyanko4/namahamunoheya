const { sendchatwork } = require("../ctr/message");
const status = {
  max: 4,
  gakusei: false
}
const gakusei = 9553691;

async function bomb(body, messageId, roomId, accountId) {
  if (status.gakusei && accountId == gakusei) return bombcomment(30);
  if (status.max <= 0) return;
  bombcomment(0.5);
  status.max -= 1;

  function bombcomment(probability) {
    const random = Math.random() * 100;
    if (random <= probability) {
      await sendchatwork(`[rp aid=${accountId} to=${roomId}-${messageId}][pname:${accountId}]さん\nどかーん`);
    }
  }
}

module.exports = {
  bomb,
  status,
}

const { status } = require("../module/bomb");
const { sendchatwork } = require("../ctr/message");

async function bombchange(body, messageId, roomId, accountId) {
  status.gakusei = !status.gakusei;
  const newStatus = status.gakusei ? "ON" : "OFF";
  const message = `${newStatus} になりました`;
  await sendchatwork(message, roomId);
}

module.exports = bombchange;

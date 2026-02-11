const { status } = require("../module/bomb");
const { sendchatwork } = require("../ctr/message");
const { isUserAdmin } = require("../ctr/cwdata");

async function bombchange(body, messageId, roomId, accountId) {
  const isAdmin = isUserAdmin(accountId, roomId);
  if (!isAdmin) return await sendchatwork(`[rp aid=${accountId} to=${roomId}-${messageId}][pname:${accountId}]\n管理者のみ実行可能です`, roomId);
  status.gakusei = !status.gakusei;
  const newStatus = status.gakusei ? "ON" : "OFF";
  const message = `${newStatus} になりました`;
  await sendchatwork(message, roomId);
}

module.exports = bombchange;

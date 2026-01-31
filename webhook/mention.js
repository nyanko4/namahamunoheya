const { readmessage, deleteMessages, sendchatwork } = require("../ctr/message");
const { blockMember } = require("../ctr/filter");
const { isUserAdmin } = require("../ctr/cwdata");


async function mentionWebhook(req, res) {
  const {
    body,
    from_account_id: accountId,
    room_id: roomId,
    message_id: messageId,
  } = req.body.webhook_event;
  
  await readmessage(roomId, messageId);
  
  if (body.includes("削除")) {
    const isAdmin = await isUserAdmin(accountId, roomId);
    if (!isAdmin) return await sendchatwork("管理者のみ利用可能です", roomId);
    
    await deleteMessages(body, messageId, roomId, accountId);
    return res.sendStatus(200);
  }
  
  if (!body.match(/\[toall\]/g)) return;
  
  const isAdmin = await isUserAdmin(accountId, roomId);
  if (!isAdmin) return blockMember(roomId, accountId, "toall");
  
  return "ok";
}

module.exports = mentionWebhook;

const CHATWORK_API_TOKEN = process.env.CWapitoken;
const axios = require("axios");
const reqcheck = require("../middleware/sign");
const messageLogger = require("../utils/messageLogger");

async function getchat(req, res) {
  const c = await reqcheck(req);
  if (c !== "ok") {
    return res.sendStatus(400);
  }
  console.log(req.body);
  
  const event = req.body.webhook_event_type;
  const {
    body,
    account_id: accountId,
    room_id: roomId,
    message_id: messageId,
    send_time: sendtime,
    update_time: updatetime,
  } = req.body.webhook_event;
  
  if (accountId == process.env.accountId) {
    return res.sendStatus(200);
  }

  await messageLogger(body, messageId, roomId, accountId, event, sendtime, updatetime);
  
  res.sendStatus(200);
}

module.exports = getchat;

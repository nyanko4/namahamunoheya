import { sendChatwork } from "../ctr/message.js";
import { omikuji } from "../../commands/omikuji.js";

export async function commands(body, messageId, roomId, accountId) {
  let result = "";
  const data = {
    body,
    messageId,
    roomId,
    accountId
  }
  if (body.match(/^おみくじ$/)) {
    result = await omikuji(data, "chatwork");
  }

  if (result.trim() !== "") {
    await sendChatwork(`[rp aid=${accountId} to=${roomId}-${messageId}][pname:${accountId}]さん\n${result}`, roomId);
  }
  
  return "ok";
}

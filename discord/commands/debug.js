import { BOT_OWNER_ID } from "../config.js";
export let debugFlag = false;

export async function debug(message) {
  if (message.author.id != BOT_OWNER_ID) return;
  debugFlag = !debugFlag;
  return { content: `デバッグモードを${debugFlag ? "ON" : "OFF"}にしました` };
}

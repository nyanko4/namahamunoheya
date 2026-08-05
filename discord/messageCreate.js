import { executeCommand } from "../discord/modules/commands.js";
import { logger } from "../discord/modules/utils.js";

import { LOG_ROOM_ID } from"./config.js";
import { debugFlag } from "../discord/commands/debug.js";

export async function handleMessageCreate(message) {
  if (message.author.bot) return;
  
  if (debugFlag) {
    console.log(message);
  }

  if (message.channelId == LOG_ROOM_ID) return;
  
  console.log(`発言者:${message.author.username}\nメッセージ:${message.content}`);

  await logger(message);
    
  await executeCommand(message);
}

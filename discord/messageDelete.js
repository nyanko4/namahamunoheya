import { logger } from "../discord/modules/utils.js";
import { LOG_ROOM_ID } from "./config.js";

export async function handleMessageDelete(message) {
  if (message.channelId != LOG_ROOM_ID) return await logger(message, null, "delete");
}

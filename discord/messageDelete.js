import { logger } from "../discord/modules/utils.js";

export async function handleMessageDelete(deleteMessage) { 
  await logger(deleteMessage, isDelete = true);
}

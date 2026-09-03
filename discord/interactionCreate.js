import { handleInputCommand, handleButton, handleContextMenuCommand } from "./modules/events.js";

export async function handleInteractionCreate(interaction) {
  if (interaction.isChatInputCommand()) return await handleInputCommand(interaction);
  if (interaction.isButton()) return await handleButton(interaction);
  if (interaction.isContextMenuCommand()) return await handleContextMenuCommand(interaction);
}

import { handleInputCommand, handleButton, handleContextMenuCommand, handleModal } from "./modules/events.js";

export async function handleInteractionCreate(interaction) {
  try {
    if (interaction.isChatInputCommand()) return await handleInputCommand(interaction);
    if (interaction.isButton()) return await handleButton(interaction);
    if (interaction.isContextMenuCommand()) return await handleContextMenuCommand(interaction);
    if (interaction.isModalSubmit()) return await handleModal(interaction);
  } catch (error) {
    console.error("InteractionCreateError", error.response?.data || error.message, error.stack)
  }
}

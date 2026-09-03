import { MessageFlags } from "discord.js";

export async function handleContextMenuCommand(interaction) {
  let result = "";

  await interaction.deferReply({
    flags: MessageFlags.Ephemeral
  });
  
  if (commandName == "edit-message") {
    result = await editMessage(interaction);
  }

  await interaction.editReply(result);
}

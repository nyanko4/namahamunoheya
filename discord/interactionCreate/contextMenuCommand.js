import { MessageFlags } from "discord.js";
import { editMessage } from "../modules/commands.js";

export async function handleContextMenuCommand(interaction) {
  let result = "";

  await interaction.deferReply({
    flags: MessageFlags.Ephemeral
  });
  
  if (interaction.commandName == "message-edit") {
    await interaction.deleteReply();
    await editMessage(interaction);
    return;
  }

  if (result == "") {
    await interaction.deleteReply();
    return;
  }
  
  await interaction.editReply(result);
}

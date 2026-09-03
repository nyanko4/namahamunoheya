import { MessageFlags } from "discord.js";
import { editMessage } from "../modules/commands.js";

export async function handleContextMenuCommand(interaction) {
  let result = "";
  
  if (interaction.commandName == "message-edit") {
    await editMessage(interaction);
    return;
  }

  await interaction.deferReply({
    flags: MessageFlags.Ephemeral
  });

  if (result == "") {
    await interaction.deleteReply();
    return;
  }
  
  await interaction.editReply(result);
}

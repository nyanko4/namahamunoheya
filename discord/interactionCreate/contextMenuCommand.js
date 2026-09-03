import { MessageFlags } from "discord.js";
import { editMessage } from "../modules/commands.js";

export async function handleContextMenuCommand(interaction) {
  let result = "";

  await interaction.deferReply({
    flags: MessageFlags.Ephemeral
  });
  
  if (interaction.commandName == "message-edit") {
    result = await editMessage(interaction);
  }

  if (result == "") return;
  
  await interaction.editReply(result);
}

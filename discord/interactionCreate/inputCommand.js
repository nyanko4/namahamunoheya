// slashCommandを制御する関数

import { MessageFlags } from "discord.js";
import { omikuji, changeNickname, requestBotFunction, createEmoji, createStamp } from "../modules/commands.js";

export async function handleInputCommand(interaction) {
  let result = "";
  
  await interaction.deferReply({
    flags: MessageFlags.Ephemeral
  });
  
  if (interaction.commandName == "おみくじ") {
    result = await omikuji(interaction, "discord");
  }

  if (interaction.commandName == "nickname") {
    result = await changeNickname(interaction);
  }
  
  if (interaction.commandName == "要望") {
    result = await requestBotFunction(interaction);
  }

  if (interaction.commandName == "create-emoji") {
    result = await createEmoji(interaction);
  }

  if (interaction.commandName == "create-stamp") {
    result = await createStamp(interaction);
  }
  
  await interaction.editReply({ content: result });
}

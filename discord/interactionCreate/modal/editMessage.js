import { MessageFlags } from "discord.js";

export async function editMessage(interaction) {
  await interaction.deferReply({
    flags: MessageFlags.Ephemeral
  });
  
  const messageId = interaction.customId.split(":")[1];
  const message = await interaction.channel.messages.fetch(messageId);
  const editMessage = interaction.fields.getStringSelectValues()
  
  await message.edit(editMessage);
  await interaction.editReply("編集が完了しました");
}

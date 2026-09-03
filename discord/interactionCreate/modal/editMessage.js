export async function editMessage(interaction) {
  const messageId = interaction.customId.split(":")[1];
  const message = await interaction.channle.messages.fetch(messageId);
  const editMessage = interaction.fields.getStringSelectValues()
  
  await message.edit(editMessage);
}

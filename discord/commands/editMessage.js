import 

export async function editMessage(interaction) {
  if (!interaction.targetMessage.author.bot) return "bot以外のコメントは編集できません";

  await interaction.targetMessage.edit(interaction.context);

  return "編集しました";
}

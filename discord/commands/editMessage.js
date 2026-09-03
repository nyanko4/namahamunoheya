import { ModalBuilder, TextInputBuilder, TextInputStyle, LabelBuilder } from "discord.js";

export async function editMessage(interaction) {
  if (!interaction.targetMessage.author.bot) return "bot以外のコメントは編集できません";

  const editContentModal = new modalBuilder()
    .setCustomId(`edit-message:${interaction.targetMessage.id}`)
    .setTitle("編集")
    .addLabelComponents(
      new LabelBuilder()
        .setLabel("メッセージ")
        .setDescription("変更したいメッセージを入力してください")
        .setTextInputComponent(
          new TextInputBuilder()
            .setCustomId("editText")
            .setRequired(true)
            .setStyle(TextInputStyle.Short)
            .setValue(interaction.targetMessage.content || "")
        )
    )

  await interaction.showModal(editContentModal)
  
  return;
}

const emojiContentType = ["jpg", "jpeg", "gif", "webp", "avif"];

export async function createEmoji(interaction) {
  const emojiImage = interaction.options.getAttachment("emoji-image");
  const emojiName = interaction.options.getString("emoji-name");

	if (!emojiImage.contentType.toLowerCase().includes(emojiContentType)) {
		return "画像形式はjpeg,gif,webp,avifのみ使用可能です";
	}

  if (!/[\w]+/g.test(emojiName)) {
    return "絵文字の名前は英数字と_のみ使用可能です";
  };

  await interaction.guild.emojis.create({
    attachment: emojiUrl,
    name: emojiName
  });

  return "作成しました";
}

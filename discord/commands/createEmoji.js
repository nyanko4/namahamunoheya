export async function createEmoji(interaction) {
  const emojiImage = interaction.options.getAttachment("emoji-image");
  const emojiName = interaction.options.getString("emoji-name");

	const emojiContentType = [
		'image/jpeg',
		'image/gif',
		'image/webp',
		'image/avif'
	];
	
	if (
		!emojiImage.contentType ||
		!emojiContentType.includes(emojiImage.contentType.toLowerCase())
	) {
		return '画像形式はjpeg,gif,webp,avifのみ使用可能です';
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

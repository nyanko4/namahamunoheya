export async function createStamp(interaction) {
  const stampImage = interaction.options.getAttachment("stamp-image");
  const stampName = interaction.options.getString('stamp-name');

	const allowedContentTypes = ["image/png", "image/gif"];

	if (!stampImage?.contentType || !allowedContentTypes.includes(stampImage.contentType.toLowerCase())) {
	  return { content: "画像形式はpng,gifのみ使用可能です" };
	}

  const stampUrl = stampImage.attachment;

  await interaction.guild.stickers.create({
    file: stampUrl,
    name: stampName,
    tags: "bot"
  });

  return { content: "作成しました" };
}

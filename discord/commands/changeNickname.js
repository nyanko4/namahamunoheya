   
export async function changeNickname(interaction) {
  const target = interaction.options.getMember("target");
  const changeNickname = interaction.options.getString("change-nickname");

  if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) {
    return "ニックネームを変更する権限がありません";
  }

  target.setNickname(changeNickname);
}

export async function changeNickname(interaction) {
   const target = interaction.options.getMember("target");
   const nickname = interaction.options.getString("change-nickname");

   if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) {
      return "ニックネームを変更する権限がありません";
   }

   target.setNickname(nickname);
   return `ユーザー${target}のニックネームを${nickname}に変更しました`;
}

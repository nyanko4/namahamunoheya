export async function changeNickname(interaction) {
   const target = interaction.options.getMember("target");
   const nickname = interaction.options.getString("change-nickname");

   target.setNickname(nickname);
   return `ユーザー${target}のニックネームを${nickname}に変更しました`;
}

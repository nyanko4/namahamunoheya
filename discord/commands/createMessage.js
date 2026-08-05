import { LOG_PERSON_ID, LOG_ROOM_ID } from "../config.js";
import { DateTime } from "luxon";

export async function createMessage(interaction) {
   const message = interaction.options.getString("message");

  const channel = client.channels.cache.get(LOG_ROOM_ID);
  const target = client.users.cache.get(LOG_PERSON_ID).username;
    
  const embed = new EmbedBuilder()
    .setColor(0x00ff00)
    .setTitle(target)
    .addFields({ name: "messageLink", value: "エラーにより取得できませんでした" })

   const toJST = (ms) =>
     DateTime.fromMillis(ms, { zone: "Asia/Tokyo" }).toFormat("yyyy/MM/dd HH:mm:ss");

  embed.addFields(
    { name: "内容", value: message },
    { name: "時刻", value: toJST(interaction.createdTimestamp) }
  )

  await channel.send({ embeds: [embed] });

  return "完了しました";
}

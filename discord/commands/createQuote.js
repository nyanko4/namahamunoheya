import { AttachmentBuilder } from "discord.js";
import { client } from "../client.js";
import { MiQ } from 'makeitaquote'

export async function createQuote(interaction) {
	const content = interaction.options.getString("content");
	const user = await client.users.fetch(LOG_PERSON_ID);
  
	const message = {
		content: content,
		author: user,
	}

	const png = await new MiQ().setFromMessage(message).setTheme({ extends : 'color', text: { weight: 'bold' } }).toBuffer('png');
	return { files: [new AttachmentBuilder(png, { name: 'quote.png' })] };
}

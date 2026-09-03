import { editMessage } from "../modules/modal.js";

const modalFunctions = [
  editMessage
]

export async function handleModal(interaction) {
  if (!interaction.customId) return;

  const index = interaction.customId.includes(":") ? interaction.customId.split(":")[0] : interaction.customId;

  const handler = modalFunctions[index];
  if (!handler) return;

  await handler(interaction);
}

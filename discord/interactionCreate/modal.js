import { editMessage } from "../modules/modal.js";

const modalFunctions = [
  editMessage
]

export async function handleModal(interaction) {
  if (!interaction.customId) return;

  const handler = modalFunctions[interaction.customId];
  if (!handler) return;

  await handler(interaction);
}

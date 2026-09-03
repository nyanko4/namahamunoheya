export async function handleContextMenuCommand(interaction) {
  let result = "";
  if (commandName == "edit-message") {
    result = await editMessage(interaction);
  }
}

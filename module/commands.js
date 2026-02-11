const commands = {
  gakusei: require("../commands/bombchange"),
};

async function command(body, messageId, roomId, accountId) {
  const command = getCommand(body);
  if (command && commands[command]) {
    return await commands[command](body, messageId, roomId, accountId);
  } else if (command) {
    return;
  }
}

function getCommand(body) {
  const pattern = /^#(\w+)/;
  const match = body.match(pattern);
  return match ? match[1] : null;
}

module.exports = command;

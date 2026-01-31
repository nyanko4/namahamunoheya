
const axios = require("axios");

const CHATWORK_API_TOKEN = process.env.CWapitoken;

async function isUserAdmin(accountId, roomId) {
  try {
    const response = await axios.get(
      `https://api.chatwork.com/v2/rooms/${roomId}/members`,
      {
        headers: {
          accept: "application/json",
          "X-ChatWorkToken": CHATWORK_API_TOKEN,
        },
      }
    );
    
    return response.data.some((m) => m.account_id === accountId);
    
  } catch (error) {
    console.error("エラーが発生しました:", error);
    return false;
  }
}

module.exports = {
  isUserAdmin,
};

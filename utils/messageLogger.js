const { sendername, getFileUrl } = require("../ctr/cwdata");
const { sendChatwork, uploadFileToChatwork } = require("../ctr/message");
const { checkFileSize, downloadFile, deleteFile } = require("./editFile"); 
const { MAX_FILE_SIZE_BYTES, botOwnerId, logRoomId } = require("./constants");
const fs = require("fs");

async function messageLogger(body, messageId, roomId, accountId, event, sendtime, updatetime) {
  try {
    const name = await sendername(accountId, roomId);
    
    if (body.includes("[info][title][dtext:file_uploaded][/title]")) {
      const url = await getFileUrl(body, roomId);
      if (!url) {
        return await sendChatwork(`${name}\n[qt][qtmeta aid=${accountId} time=${sendtime}]${body}[/qt]`, logRoomId, "log");
      }
    
      const fileSize = await checkFileSize(url.fileurl);
    
      if (fileSize === null) {
        return await sendChatwork(`${name}\n[qt][qtmeta aid=${accountId} time=${sendtime}]${body}[/qt]`, logRoomId);
      }
    
      const isOverLimit = fileSize > MAX_FILE_SIZE_BYTES;
    
      const { localFilePath, mime } = await downloadFile(url.fileurl, url.filename);
    
      try {
        if (isOverLimit) {
          await sendChatwork("ファイルサイズが大きいため保存されませんでした", logRoomId);
          return;
        }
    
        await uploadFileToChatwork(localFilePath, name, logRoomId, "log");
    
      } finally {
        await deleteFile(localFilePath);
      }
    } else {
      const time = event === "message_updated" ? updatetime : sendtime;
      await sendChatwork(`${name} ${accountId}\n[qt][qtmeta aid=${accountId} time=${time}]${body}[/qt]`, logRoomId);
    }
  } catch (error) {
    console.error("messageLoggerError:", error.response?.data || error.message);
    await sendChatwork(`[To:${botOwnerId}]ログ処理でエラーが発生しました: ${error.response?.data || error.message}`, logRoomId);
  }
}

module.exports = messageLogger;

const fs = require("fs");
const axios = require("axios");
const mimeTypes = require("mime-types");
const { MAX_FILE_SIZE_BYTES } = require("./constants");

async function checkFileSize(url) {
  const headResponse = await axios.head(url);
  const contentLength = headResponse.headers["content-length"];
  if (!contentLength) return null;
  return parseInt(contentLength, 10);
}


async function downloadFile(url, filename) {
  const dir = "file";
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const localFilePath = `${dir}/${filename}`;
  const writer = fs.createWriteStream(localFilePath);

  const response = await axios.get(url, { responseType: "stream" });

  let mime = response.headers["content-type"] || null;

  if (!mime) {
    mime = mimeTypes.lookup(filename) || "application/octet-stream";
  }

  response.data.pipe(writer);

  await new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });

  return { localFilePath, mime };
}

async function deleteFile(filePath) {
  await fs.unlinkSync(filePath);
}

module.exports = {
  checkFileSize,
  downloadFile,
  deleteFile,
};

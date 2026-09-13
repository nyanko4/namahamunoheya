const supabase = require("../supabase/client");
const { sendchatwork } = require("../ctr/message");
const { sendername } = require("../ctr/cwdata");

function getOmikujiResult() {
  const outcomes = [
    { rate: 90, result: "大凶" },
    { rate: 9.7, result: "大吉" },
    { rate: 0.3, result: "生ハムがなんでもする券" },
  ];
  let random = Math.random() * 100;
  for (const { rate, result } of outcomes) {
    if (random < rate) return result;
    random -= rate;
  }
};

//おみくじ
async function omikuji(body, messageId, roomId, accountId) {
  if (!body.match(/^おみくじ$/)) return;
    try {
      const { data, error } = await supabase
        .from("omikuji")
        .select("account_id, result")
        .eq("account_id", accountId)
        .single();

      if (error) {
        console.error("Supabaseエラー:", error);
      }

      if (data) return await sendchatwork(`[rp aid=${accountId} to=${roomId}-${messageId}] おみくじは1日1回までです。\n前回の結果: ${data.result}`, roomId);
      const name = await sendername(accountId, roomId);
      const omikujiResult = getOmikujiResult();
      const { data: insertData, error: insertError } = await supabase
        .from("omikuji")
        .insert([
          {
            account_id: accountId,
            result: omikujiResult,
            name: name,
          },
        ]);
      console.log(insertData)
      if (insertData === null) await sendchatwork(`[rp aid=${accountId} to=${roomId}-${messageId}]\n${omikujiResult}`, roomId);
      if (insertError) {
        console.error("Supabase保存エラー:", insertError);
      } else {
        console.log("おみくじ結果が保存されました:", insertData);
      }
        } catch (error) {
      console.error("omikujiError:", error.response?.data || error.message);
    }
}

module.exports = omikuji;

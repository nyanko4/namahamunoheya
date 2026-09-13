const { CronJob } = require("cron");
const supabase = require("../supabase/client");

function startDailyTask() {
  new CronJob(
    "0 0 0 * * *",
    async () => {
      await supabase.from("omikuji").delete().neq("account_id", 0)
    },
    null,
    true,
    "Asia/Tokyo"
  );
}

module.exports = startDailyTask;

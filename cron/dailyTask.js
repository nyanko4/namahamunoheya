const { CronJob } = require("cron");
const { DateTime } = require("luxon");
const { sendchatwork } = require("../ctr/message");
const supabase = require("../supabase/client");
const sayHello = require("../module/sayHello");

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

  new CronJob(
    "0 0 7 * * *",
    async () => {
      await sayHello()
    },
    null,
    true,
    "Asia/Tokyo"
  );
}

module.exports = startDailyTask;

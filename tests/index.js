const Logger = require("../src/index.js");

const Log = new Logger({ scope: `Test`})

Log.cluster("Testing CLUSTER logger output");
Log.command("Testing COMMAND logger output");
Log.complete("Testing COMPLETE logger output");
Log.critical("Testing CRITICAL logger output");
Log.database("Testing DATABASE logger output");
Log.debug("Testing DEBUG logger output");
Log.error("Testing ERROR logger output");
Log.event("Testing EVENT logger output");
Log.fatal("Testing FATAL logger output");
Log.info("Testing INFO logger output");
Log.note("Testing NOTE logger output");
Log.pending("Testing PENDING logger output");
Log.ready("Testing READY logger output");
Log.shard("Testing SHARD logger output");
Log.start("Testing START logger output");
Log.success("Testing SUCCESS logger output");
Log.waiting("Testing WAITING logger output");
Log.warn("Testing WARN logger output");
Log.watch("Testing WATCH logger output");

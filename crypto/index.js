const crypto = require("crypto");

cipher = crypto.createHash("sha256").update("plain text").digest("hex");
console.log("sha256(plain text) = ", cipher)

random = crypto.randomBytes(16).toString("hex")
console.log("random: ", random)

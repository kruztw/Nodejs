var glob = require("glob")

glob("./package*", function (err, files) {
	console.log("files = ", files)
})

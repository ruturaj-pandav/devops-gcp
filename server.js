const express= require("express")
const cors= require("cors")
const app = express()

const PORT = 8000

app.get("/", async function(req,res) {
	res.json({
		message:"Response from: V1"
	})
})

app.listen(PORT, function()  {
	console.log("Listening on :", PORT)
})
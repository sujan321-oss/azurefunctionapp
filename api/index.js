const express = require("express") 
const app = express() 

app.get("/",(req,res)=>{ 

	res.json({"msg":"this message is from the azure function"})
})

module.exports = async function (context, req) {
  const handler = serverless(app);
  return handler(context, req);
};

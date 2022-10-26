const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const port = 4000;
const url = 'https://backend-domain.dev/graphql'

express().use(express.json({ limit: "50mb" }))
	.use(cors())
  .post("/graphql", async (req, res) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(req.get("authorization") && {
            Authorization: req.get("authorization")
          })
        },
        body: JSON.stringify(req.body),
        redirect: "manual",
      });
  
      const data = await response.json();
      console.log('response',data)
  
      res.json(data);
    } catch (e) {
      console.error(e);
    }
  })
  .listen(port, function () {
		console.log('\n',`\x1b[32m BFF Graphql Proxy Server listening on port ${port} \x1b[0m`);
	});
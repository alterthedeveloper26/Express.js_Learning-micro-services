const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  console.log("Received event", req.body.type);
  const { type, data } = req.body;
  if (type === "CommentCreated") {
    const status = data.content.includes("fuck") ? "rejected" : "approved";
    await axios.post("http://localhost:4005/events", {
      type: "CommentModerated",
      data: {
        ...data,
        status,
      },
    });
  }

  res.send({});
});

app.listen(4003, () => {
  console.log("Moderation, Listening on 4003");
});

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const pool = require("./db");
// YT code
app.post("/adduser", (req, res) => {
  const userid = req.body.userid || generateUserid();
  const { username, password } = req.body;
  console.log(userid + "----" + username + "----" + password);

  const queryCall = `INSERT INTO YTDEMO (userid, username, password) VALUES ('${userid}', '${username}', '${password}')`;

  // pool
  //   .query(queryCall)  // Run the query
  //   .then((response) => {
  //     console.log("Data inserted successfully");
  //     res.status(200).json({ message: "User added successfully", data: req.body });
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     res.status(500).json({ error: "Failed to insert data" });
  //   });
  pool
    .query(queryCall) // Run the query
    .then((response) => {
      console.log("Data inserted successfully");
      res
        .status(200)
        .json({ message: "User added successfully", data: req.body });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to insert data" });
    });
  console.log(req.body);
});

app.listen(4000, () => {
  console.log("listening on server 4000");
});

const generateUserid = () => {
  return Math.random().toString(36).substring(7);
};

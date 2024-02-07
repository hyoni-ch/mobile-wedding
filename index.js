const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const config = require("./server/config/key.js");

app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Guestbook } = require("./server/Model/Guestbook.js");
const { Counter } = require("./server/Model/Counter.js");
const { Rsvp } = require("./server/Model/Rsvp.js");

app.listen(port, () => {
  mongoose
    .connect(config.mongoURI)
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log("Connecting MongoDB...");
    })
    .catch(err => {
      console.log(`${err}`);
    });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.post("/api/guestbook/submit", (req, res) => {
  let temp = req.body;
  Counter.findOne({ counter: "counter" })
    .exec()
    .then(counter => {
      temp.postNum = counter.postNum;
      const WeddingGuestbook = new Guestbook(temp);
      WeddingGuestbook.save().then(() => {
        Counter.updateOne(
          { counter: "counter" },
          { $inc: { postNum: 1 } }
        ).then(() => {
          res.status(200).json({ success: true });
        });
      });
    })
    .catch(err => {
      res.status(400).json({ success: false });
    });
});

app.post("/api/guestbook/list", (req, res) => {
  let sort = {};
  sort.createdAt = -1;
  Guestbook.find()
    .sort(sort)
    .exec()
    .then(doc => {
      res.status(200).json({ success: true, guestbookList: doc });
    })
    .catch(err => {
      res.status(400).json({ success: false });
    });
});

app.post("/api/guestbook/edit", (req, res) => {
  let temp = {
    name: req.body.name,
    content: req.body.content,
  };
  Guestbook.updateOne({ postNum: Number(req.body.postNum) }, { $set: temp })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch(err => {
      res.status(400).json({ success: false });
    });
});

app.post("/api/guestbook/delete", (req, res) => {
  Guestbook.deleteOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch(err => {
      res.status(400).json({ success: false });
    });
});

app.post("/api/rsvp/submit", (req, res) => {
  let temp = req.body;
  const RsvpResult = new Rsvp(temp);
  RsvpResult.save()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch(err => {
      res.status(400).json({ success: false });
    });
});

app.post("/api/rsvp/list", (req, res) => {
  let sort = {};
  sort.createdAt = -1;
  Rsvp.find()
    .sort(sort)
    .exec()
    .then(doc => {
      res.status(200).json({ success: true, rsvpList: doc });
    })
    .catch(err => {
      res.status(400).json({ success: false });
    });
});

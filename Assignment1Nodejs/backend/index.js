const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* -------- READ -------- */
app.get("/read", (req, res) => {
    fs.readFile("store.txt", "utf-8", (err, data) => {
        if (err) {
            return res.json({content: "Error reading file" });
        }

        else return res.json({ content: data });
    });
});

/* -------- WRITE -------- */
app.post("/write", (req, res) => {

    const { text } = req.body;

    fs.writeFile("store.txt", text, (err) => {
        if (err) {
            return res.status(500).json({ message: "Error writing file" });
        }

        return res.json({ message: `${text}` });
    });
});

app.listen(8000, () => console.log("server started!"));

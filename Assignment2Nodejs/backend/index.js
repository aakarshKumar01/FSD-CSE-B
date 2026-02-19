const express = require('express');
const app = express();
const os = require('os');
const cors = require('cors');
app.use(cors());

app.get('/free', (req, res) => {
    const freeMem = os.freemem();
    res.json({ freeMem });
})

app.get('/total', (req, res) => {
    const totalMem = os.totalmem();
    res.json({ totalMem });
})

app.get('/cpu', (req, res) => {
    const cpuArch = os.arch();
    res.json({ cpuArch });
})

app.get('/user', (req, res) => {
    const userInfo = os.userInfo();
    res.json({ userInfo });
})

app.listen(7000, () => {
    console.log("Server started on port 7000");
})
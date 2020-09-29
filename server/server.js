const path = require('path');
const express = require('express');
const cors = require('cors')
const app = express();
const publicPath = path.join(__dirname, '../client', 'public');

app.use(express.static(publicPath));
app.use(cors())

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 9001;
}
app.listen(port);
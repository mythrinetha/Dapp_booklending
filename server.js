const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/app/index.html`);
});
app.get('/addbook', (req, res) => {
 res.sendFile(`${__dirname}/app/addbook.html`);
});
app.get('/mybooks', (req, res) => {
 res.sendFile(`${__dirname}/app/mybooks.html`);
});
app.get('/status', (req, res) => {
 res.sendFile(`${__dirname}/app/status.html`);
});
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});

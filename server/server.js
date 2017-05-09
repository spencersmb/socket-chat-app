const path = require('path');
const express = require('express')
const publicPath = path.join(__dirname, '../public')
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(publicPath)) // points our app to this directory

app.get('/', (req, res) => {
  res.send("Welcome")
})

app.listen(port, () => {
  console.log('Server is up on port: ' + port);
});




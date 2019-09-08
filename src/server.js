const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/helloWorld', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

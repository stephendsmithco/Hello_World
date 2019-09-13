const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const helloWorldController = require('./controllers/hello_world_controller')

app.get('/helloWorld', (req, res) => {
  helloWorldController.getHelloWorld(req, res)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

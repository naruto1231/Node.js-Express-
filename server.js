const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node' })
})

app.listen(3001, () => {
  console.log('API server running on 3001')
})

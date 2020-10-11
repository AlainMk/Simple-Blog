const express = require('express')
const articleRouter = require('./routers/article')
require('./db/mongoose')

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000

app.use(articleRouter)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Blog app listening on port port! ` + port))
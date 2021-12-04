const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const port = 8000
require('./config/db')
require('./routes/index')(app)

app.listen(port, (err, res) => {
        console.log(`Social Post API server started listening on ${port}`);
})
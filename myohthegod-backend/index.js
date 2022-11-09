
const express = require('express')
const app = express()


app.use(express.static('myohthegod'))
app.listen(3030)
console.log("server started on port 3030")
const express = require('express')
const app = express()
app.use(express.static('r3alitycubed'))
app.listen(3000)
console.log("server started on port 3000")
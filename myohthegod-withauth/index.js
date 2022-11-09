function auth(req, res, next) {
	function send401() {
		res.writeHead(401, {'WWW-Authenticate': 'Basic'});
		res.end();
	}
	var authHeader = req.headers.authorization;
	if (!authHeader) {
		send401();
		return;
	}

	var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];

	if (user == 'r3alitycubedSK' && pass == 'Think=1000msoflag') {
		next();
	} else {
		send401();
	}
}

const express = require('express')
const app = express()


app.use(auth)
app.use(express.static('myohthegod'))
app.listen(3100)
console.log("server started on port 3030")
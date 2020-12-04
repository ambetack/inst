const http = require("https");

const options = {
	"method": "GET",
	"hostname": "instagram47.p.rapidapi.com",
	"port": null,
	"path": "/user_posts/?username=taneja.gaurav",
	"headers": {
		"x-rapidapi-key": "bc0820044bmshfa665d7d7b682fep1db460jsnccdf1ee613e4",
		"x-rapidapi-host": "instagram47.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
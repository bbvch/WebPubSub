const express = require('express');
const { WebPubSubEventHandler } = require('@azure/web-pubsub-express');

const hubName = 'pubsub';

const app = express();

let handler = new WebPubSubEventHandler(hubName, ['*'], {
	path: '/eventhandler',
	onConnected: async req => {
		console.log(`${req.context.userId} connected`);
	}
});


app.get('/', async (req, res) => {
	res.json("endpoint called");
});

app.use(handler.getMiddleware());
app.use(express.static('public'));
app.listen(8081, () => console.log('server started'))
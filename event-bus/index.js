const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (res, res) => {
    const event = req.body;
    events.push(event);
    
    axios.post('http://posts-cluster-srv:4000/events', event).catch((err) => {
        console.log(err.message);
    });
});

app.get('/events', (req, res) => {
    res.send(events);
});

app.listen(4005, () => {
    console.log('Listening on Event Bus');
})
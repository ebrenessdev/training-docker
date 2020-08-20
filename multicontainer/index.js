const express = require('express');
const redis = require('redis');

const app = express();

// connect to redis server
const redisClient = redis.createClient({
    host: 'redis-server', // the name of the service in the docker-compose.yaml file
    port: 6379 // # default redis port
});

// default value
redisClient.set('visits', 0);

app.get('/', (req, res) => {
    // get number of visits
    redisClient.get('visits', (err, visits) => {
        res.send('Number of visits: ' + visits);

        // increase number of visits
        redisClient.set('visits', parseInt(visits) + 1);
    })
});

app.listen(8081, () => {
    console.log('Visits service is running.');
});

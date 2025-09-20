const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-19735.c228.us-central1-1.gce.redns.redis-cloud.com',
        port: 19735
    }
});

module.exports = redisClient;
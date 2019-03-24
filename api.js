const Redis = require('ioredis');
const subscriber = new Redis();
const redis = new Redis();

subscriber.subscribe('steem:op:custom_json', () => {
        subscriber.on('message', async (channel, message) => {
                const payload = JSON.parse(message);
                const transfer = JSON.parse((await redis.get(payload['key'])));
                
                console.log(transfer);
        });
});


const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/',async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

router.post('/', async (req, res) =>  {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
    });
    res.status(201).send();
});


async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://127.0.0.1:27017/nicolas', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return client.db('nicolas').collection('test');
}

module.exports = router;
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    // res.send("Hello World APIrest");
    res.json({ "title": "Hello bad world" });
});

router.get('/test', (req, res) => {
    // res.send("Hello World APIrest");

    const data={
        "name":"Fazt",
        "website":"faztweb.com"
    }
    res.json({ data });
});


module.exports = router;
const router = require("express").Router();

router.get("/whoami", (req, res) => {
    const ip = req.ip;
    const language = req.headers["accept-language"];
    const software = req.headers["user-agent"];

    res.json({
        ipaddress: ip,
        language: language,
        software: software
    })
})

module.exports = router;
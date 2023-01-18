const bodyparser = require('body-parser')


module.exports = app => {
    app.use(bodyparser.json)

    app.get("/", (req, res) => {
        res.status(200).send("olá")
    })
}
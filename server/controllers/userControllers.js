const User = require("../models/user")


module.exports.champion_get = async (req, res) => {

    try {
        const users = await User.find()

        res.status(200).json(users)
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
}

module.exports.champion_post = async (req, res) => {
    console.log(req.body)
    const { username, score } = req.body;

    try {
        const user = await User.create({ username, score })
        res.status(200).json(user)
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
}
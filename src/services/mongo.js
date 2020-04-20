const mongoose = require('mongoose')

const dbUrl = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}`
let connected = false


exports.connect = () => {
    if (connected) {
        return Promise.resolve()
    }

    return new Promise((resolve, reject) => {
        mongoose.connect(dbUrl,(err) => {
            if (err) {
                return reject(err)
            }
            connected = true
            resolve()
        })
    })
}

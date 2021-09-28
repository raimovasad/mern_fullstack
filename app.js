const express = require('express')
const config = require('config')
const app = express()
const mongoose = require('mongoose')
const authRouter = require('./routes/auth.routes')



app.use('/api/auth', authRouter)




async function start() {
    const PORT = config.get('port') || 5000
    try {
        await mongoose.connect(config.get('mongoUri'), (err, result) => {
            if (err) console.log('Error database');
            else {
                app.listen(PORT, () => {
                    console.log(`App has benn started on ${PORT}...`);
                })
            }
        })


    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }



}

start()
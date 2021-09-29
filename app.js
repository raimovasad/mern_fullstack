const express = require('express')
const config = require('config')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const { application } = require('express')




app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link',require('./routes/link.routes'))
app.use('/t/',require('./routes/redirect.routes'))

if(process.env.NODE_ENV === 'production'){
    app.use('/',express.static(path.join(__dirname,'client','build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build', 'index.html'))
    })
}



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
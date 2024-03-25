const express = require("express")
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks');
const app = express();


nunjucks.configure('views', {
    autoescape: true,
    express: app
});

const port = process.env.PORT || 3000



app.use((req, res, next)=>{
    res.locals.url = req.originalUrl
    next()
})


app.use("/", indexRouter)
app.use(express.static('public'))


app.listen(port , () => {
    console.log(`Server running on port ${port}`)
})
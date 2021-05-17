let express = require('express')

let app = express()
app.use(express.static('public'));
app.use('/images', express.static('images')); 

app.set('views', 'views');   
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index')
})
app.get('/about_us', function (req, res) {
    res.render('about_us')
})
app.get('/contributors', function (req, res) {
    res.render('contributors')
})
app.get('/courses', function (req, res) {
    res.render('courses')
})
app.get('/donate_us', function (req, res) {
    res.render('donate_us')
})
app.get('/signin', function (req, res) {
    res.render('account')
})
app.get('/signup', function (req, res) {
    res.render('account')
})
app.get('/account', function (req, res) {
    res.render('account')
})
app.get('/index', function (req, res) {
    res.render('index')
})

app.listen(3000)
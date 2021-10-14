const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const newsRoutes = require('./src/app/routes/index');
const exphbs = require('express-handlebars');

if(process.env.NODE_ENV === 'dev') {
    require('dotenv').config();
}

const port = process.env.PORT || 5000;

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src','app','views'));

app.use(express.static(path.join(__dirname, 'public')));

router.get('/', (req, res)=>{
    res.render('news');
})

app.use(router);
app.use(newsRoutes);

app.listen(port,()=>{
    console.log('App está corriendo en el puerto ' + port)
})

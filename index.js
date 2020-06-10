const express = require('express');
const covidStatus = require('novelcovid');
const expressHBR = require('express-handlebars');

covidStatus.settings({baseUrl: 'https://disease.sh'});
covidStatus.countries().then((res)=>{console.log(res)});

const app = express();
app.set('view engine', 'hbs');
app.engine('hbs', expressHBR( {
    extname: 'hbs',
    defaultLayout: false,
    layoutsDir: __dirname + '/views/layouts/'
}));

app.get('/countries',(req,res)=> {
    covidStatus.countries().then((response)=>{res.render('home',{info:response})});
})

app.listen(5000,()=> {
    console.log("Corana Status App starting in port 5000.");
});
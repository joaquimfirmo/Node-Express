const express = require('express');

const { engine } = require('express-handlebars');



const app = express();

const port = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render('home')
});


app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About Meadowlark Travel');
});

//pagina 404 personalizada
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found'); 
});


//pagina 500 personalizada
app.use((err, req, res, next) => {
    console.log(err.message);
    res.type('text/plain');
    res.status(504);
    res.send('500 - Server Error'); 

});

app.listen(port, () => console.log(`Express started on http://localhost:${port}; ` + 'press Ctrl-C to terminate.'));

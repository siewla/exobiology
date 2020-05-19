//DEPENDENCIES
const express   =   require('express');
const app       =   express();

const port      =   process.env.PORT || 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

const scientists = [];

app.set('view engine', 'ejs');
app.use(express.static('public'));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('index.ejs', { data: scientists });
});

app.get('/new', (req,res) =>{
    res.render('new.ejs');
});

app.post('/', (req, res) =>{
    scientists.push(req.body);
    res.redirect('/');
});

app.delete('/all', (req, res) =>{
    scientists.splice(0, scientists.length);
    res.redirect('/');
});

app.delete('/:index', (req, res) => {
    scientists.splice(req.params.index,1);
    res.redirect('/');
});

app.put('/:index', (req, res) =>{
    scientists[req.params.index] = req.body;
    res.redirect('/');
});

app.get('/:index/edit', (req, res) => {
    res.render('edit.ejs',{
        data : scientists[req.params.index],
        index : req.params.index
    });
});




//LISTENER
app.listen(port, () =>{
    console.log(`Server is listening on port : ${port}`);
});
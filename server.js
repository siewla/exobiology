//DEPENDENCIES
const express   =   require('express');
const app       =   express();

const port      =   process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send('hi');
});

//LISTENER
app.listen(port, () =>{
    console.log(`Pokémon manager is listening on port : ${port}`);
});
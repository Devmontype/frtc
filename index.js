const express=require('express');

const app=express();

const port =process.env.port||3000;

app.use(express.static('public'));
app.use(express.static('views'));

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(port,()=>console.log('listening on port '+port));
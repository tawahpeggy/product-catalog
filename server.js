const express=require('express');
const path=require('path');
const app=express();


app.use(express.static('./dist/angular'));
//path location strategy
app.get ('/*', function(req, res){
    res.sendFile(path.join(__dirname +'/dist/angular/index.html'));
});
app.listen(process.env.PORT || 8080);

//for websites we don't write the html part in js file bcoz in real websites our content is big so we make html pages.
const express=require('express');
const app=express();
const path=require('path');
const folderpath=path.join(__dirname,'public');

app.use(express.static(folderpath));  //static- this loads static content like static files ,ex: about.html

app.listen(4300);

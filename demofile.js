const fs = require('fs');


fs.writeFile("demo.html","<h1>Hello</h1>\n<p>My name is sanjay</p>",function(res,err){
    if(err){
        console.log(err);
    }
    else{
        console.log("file created");
    }
})
fs.appendFile("demo.html","\n<p>I am studying Nodejs</p>",function(res,err){
    if(err){
        console.log(err);
    }
    else{
        console.log("file updated");
    }
})
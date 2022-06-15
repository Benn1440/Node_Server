const http = require("http");
const url = require('url');
const fs = require('fs')

// create my server
const server = http.createServer( (req, res) => {

    console.log(req.url, req.method);
    //content-type for the header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    let path = './views';

    //using a switch statement to navigate between routes
    switch(req.url){
        case '/':
            path += '/home.html';
            break;
        case '/about':
            path += '/about.html';
            break;
        case '/contact':
            path += '/contact.html';
            break;
        default:
            path += '/404.html';
            break;
    }
        
    //Sending information to the server
   fs.readFile(path, (err, data) =>{
        if (err) {
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
        
   });
    

});

//create a port for the server
server.listen(3200, 'localhost');
console.log('Server is up and running on port 3200');
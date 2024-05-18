// Create server for request and response from network through the http request 
const  http=require('http');
const server =http.createServer((req,res)=> {
    if(req.url=='/'){
        res.write('<h1>I am happy to learn Full Stack Web Development form Pw Skills  !</h1>');
    }
    res.end();
});
server.listen(5001);
console.log("the https server is running on the port 5001")
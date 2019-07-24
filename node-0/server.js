const http = require('http')

http.createServer((req, res) =>{
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    setTimeout(function() {
        res.end('Ok');
    }, 100);
}).listen(3000, () => console.log(`Server is ready`))


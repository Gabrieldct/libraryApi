const http = require('http');
const booksController = require('../controllers/booksController');
const controller = new booksController();
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  switch(req.url){
      case '/':
        res.statusCode = 200;
        res.end('libraryApi \n');
        break;
        case '/books':
            res.statusCode = 200;
            const books = await controller.getAll();
            res.end(JSON.stringify(books));
            break;
        default :
        res.statusCode = 404;
        res.end('libro no encontrado.');
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


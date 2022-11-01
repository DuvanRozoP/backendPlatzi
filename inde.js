const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index')
const { logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());


const whilelist = ['http://localhost:5500','http://localhost:8080','https://mayapp.co','http://127.0.0.1:5500']

const options = {
  origin: (origin,callback) => {
    if (whilelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'))
    }
  }
}
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('hello mi almacenador');
})


routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);


app.listen(port, () => {
  console.log('Conexion exitosa in port: ', port)
})


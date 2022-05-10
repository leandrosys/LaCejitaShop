const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorhandler,
} = require('./middlewares/error.handler');

const app = express();
const PORT = process.env.PORT || 3000;

const whiteList = ['http://localhost:3000'];

const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Dominio no permitido para hacer peticiones'));
    }
  },
};

app.use(cors(options));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorhandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Mi port' + PORT);
});

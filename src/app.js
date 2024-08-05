const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

app = express()
const PORT = process.env.PORT ||  3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(require('./routes/tasks.routes'));

app.listen(PORT, () => console.log(`ESCUCHANDO EN EL PUERTO ${PORT}`))
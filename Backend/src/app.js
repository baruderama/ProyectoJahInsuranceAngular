const express =require('express');
//const routes= require('./routes');
const morgan = require('morgan');
const dotenv =require('dotenv');
const cors = require('cors');
const routerApi = require('./routes');
const path = require('path');


dotenv.config();
const app = express();


/*
PUERTO
Puerto en el que el servidor se va a subir
*/
app.set('port',process.env.PORT || 9000)





//middlewares
/*
Con morgan se refleja en la consola todas las peticiones que se hacen al servidor(200, 404,500)
Con cors permite que se hagan peticiones desde aplicaciones externas, como por ejemplo desde Vue
*/
//app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/img',express.static('src/uploads/images'));



// routes
/*
Se presenta las rutas de esta api
*/
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
});
//app.use('/api', routes)

routerApi(app);


//Server running
/*
Aqui se sube el servidor al puerto especificado
*/
app.listen(app.get('port'),()=>{
    console.log('server running on port',app.get('port'))
})
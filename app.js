var express = require('express');
var bodyParser = require('body-parser');

var proveedor = require('./routes/proveedor.js');

var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/erp', {promiseLibrary: require('bluebird')})          // Este puerto es el de la DB
            .then(()=>{
                console.log('Conectado a la DB')
            })
            .catch((err)=>{
                console.error(err);
            })
            app.use(function(req, res, next){
                res.header("Access-Control-Allow-Origin","*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
                res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
                next();
            })

app.use(bodyParser.json({}));                 //Para poder leer los json
app.use(bodyParser.urlencoded({'extended': false}));

app.use('/proveedor', proveedor); 

app.listen(3000, function(){                                 // Este es el puerto del servidor local
    console.log('Servidor ok en puerto 3000')
})


            



let mongoose = require( 'mongoose');

const app = require('./app');


mongoose.Promise= global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/futbol')
.then (()=>{

    console.log ('conexion a la base datos exitosa ');
    
    app.listen(app.get('port'),()  => {
         console.log( `server running at : ${
            app.get('port')
        }`);
        
    })

})
.catch(err => console.error (err));
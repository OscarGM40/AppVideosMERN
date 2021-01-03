import mongoose, { ConnectionOptions } from 'mongoose';
import config from './config';

try {
    //Para autoejecutar una function usamos (code here)()
    (async () => {
        const mongooseOptions: ConnectionOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false,
            useCreateIndex:true,
            // user:config.MONGO_USER,
            // pass:config.MONGO_PASSWORD,
        }

        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions);
        console.log('Database is connected to: ', db.connection.name);

    })()
    //Cuando llamemos a éste módulo esta funcion se autoejecutara,sirviendo la conexion
} catch (error) {
    console.error(error)
}

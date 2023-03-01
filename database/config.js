import { connect } from "mongoose";


export const dbConnection = async() => {

    try {
        
        await connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
    

        console.log('Base de datos Online');

    } catch (err) {
        console.log(err);
        throw new Error('Error a la hora de iniciar la base de datos')

    }

}



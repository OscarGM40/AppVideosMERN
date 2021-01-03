//Lo primero es importar las clases del ORM
import {Schema, model} from 'mongoose';

const videoSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:false,
        trim:true
    },
    url:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
},{
    versionKey:false,
    timestamps:true
})

//Si no le hemos pasado una coleccion al constructor Schema va a crear una que coincidirá con el argumento name:string  que le pasemos al metodo model y en pluraly minusculas.
export default model('Video', videoSchema);
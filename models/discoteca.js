import { Schema, model } from 'mongoose'

const DiscotecaSchema = Schema({

    name: {
        type: String,
        required: [true, 'El nombre de la discoteca es obligatorio']
    },

    img: {
        type: String,
        required: [true, 'La imagen de la discoteca es obligatoria']
    },

    description: {
        type: String,
        required: [true, 'La descripcion de la discoteca es obligatoria']
    },

    filter: {
        type: String,
        required: [true, 'El filtro de la discoteca es obligatorio']
    }

})

export default model( 'Discoteca', DiscotecaSchema )

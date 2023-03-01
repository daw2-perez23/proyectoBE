import { response, request } from 'express'
import { genSaltSync, hashSync } from 'bcryptjs'

import Usuario, { countDocuments, find, findByIdAndUpdate } from '../models/usuario.js'



const usuariosGet = async(req = request , res = response) => {
    
    // const { q, nombre = 'NULL', apikey, page = 1, limit} =  req.query
    const { limite = 5, desde = 0 } = req.query
    const query = { state: true }

    const [ total, usuarios ] = await Promise.all([
        countDocuments( query ),
        find( query ) 
            .skip( Number( desde ) )
            .limit( Number( limite ) )
    ])

    res.json({
        total,
        usuarios 
    })
}

const usuariosPost = async(req, res = response) => {

    const { name, email, password, rol } = req.body
    const usuario = new Usuario({ name, email, password, rol })

    //Encriptar la contraseña
    const salt = genSaltSync()
    usuario.password = hashSync( password, salt )
    //Guarda en DB
    await usuario.save()

    res.json(usuario)
}

const usuariosPut = async(req, res = response) => {

    const { id } = req.params.id
    const { password, google, email, ...resto } = req.body

    //TODO validar contraseña bd
    if( password ) {
        //Encriptar la contraseña
        const salt = genSaltSync()
        resto.password = hashSync( password, salt )
    }

    const usuario = await findByIdAndUpdate( id, resto )

    res.json(usuario)
} 

const usuariosDelete = async(req, res = response) => {
    
    const { id } = req.params
    
    //Borrado físico
    //const usuario = await Usuario.findByIdAndDelete( id )

    const usuario = await findByIdAndUpdate( id, { state: false } )
    const usuarioAutenticado =  req.usuario


    res.json({usuario, usuarioAutenticado})
}



export default {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete

}
import { Router } from 'express'
import { check } from 'express-validator'

import { 
    validarCampos, 
    validarJWT, 
    tieneRole } from '../middlewares'

import { esRoleValido, esEmailValido, existeUsuarioPorId } from '../helpers/dbValidators.js'

import { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } from '../controllers/usuarios'

const router = Router()


router.get('/', usuariosGet )

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    check('rol').custom( esRoleValido ),
    validarCampos
] ,usuariosPut )

router.post('/',[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña ha de tener más de 6 letras').isLength({ min: 6 }),
    check('email', 'El correo no es válido').isEmail(),
    check('rol').custom( esRoleValido ),
    check('email').custom( esEmailValido ),
    validarCampos
], usuariosPost )

router.delete('/:id', [
    validarJWT,
    tieneRole('ADMIN_ROLE'),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    validarCampos
] ,usuariosDelete )




export default router
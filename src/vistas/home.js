import { login } from "./login"
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

export const home = {
    template: `<div class="col-12 background-radial-gradient overflow-hidden">
    <style>
        
        }
    
        #radius-shape-1 {
          height: 220px;
          width: 220px;
          top: -60px;
          left: -130px;
          background: radial-gradient(#44006b, #ad1fff);
          overflow: hidden;
        }
    
        #radius-shape-2 {
          border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
          bottom: -60px;
          right: -110px;
          width: 300px;
          height: 300px;
          background: radial-gradient(#44006b, #ad1fff);
          overflow: hidden;
        }
    
        .bg-glass {
          background-color: hsla(0, 0%, 100%, 0.9) !important;
          backdrop-filter: saturate(200%) blur(25px);
        }
      </style>
    
      <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div class="row gx-lg-5 align-items-center mb-5">
          <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
            <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
              Tu App para salir de fiesta <br />
              <span style="color: hsl(218, 81%, 75%)">Salimos <strong>Tonight ?</strong></span>
            </h1>
            <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
              
            </p>
          </div>
    
          <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
    
            <div class="card bg-glass">
              <div class="card-body px-4 py-5 px-md-5">
                <form>
                  <!-- 2 column grid layout with text inputs for the first and last names -->
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="text" id="form3Example1" class="form-control" />
                        <label class="form-label" for="form3Example1">Nombre</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="text" id="form3Example2" class="form-control" />
                        <label class="form-label" for="form3Example2">Apellidos</label>
                      </div>
                    </div>
                  </div>
    
                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <input type="email" id="form3Example3" class="form-control" />
                    <label class="form-label" for="form3Example3">Correo Electronico</label>
                  </div>
    
                  <!-- Password input -->
                  <div class="form-outline mb-4">
                    <input type="password" id="form3Example4" class="form-control" />
                    <label class="form-label" for="form3Example4">Contraseña</label>
                  </div>
    
                  <!-- Checkbox -->
                  <div class="form-check d-flex justify-content-center mb-4">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                    <label class="form-check-label" for="form2Example33">
                      No recuerdo mi contraseña
                    </label>
                  </div>
    
                  <!-- Submit button -->
                  <div class="justify-content-center d-flex">
                    <button type="submit" class="btn btn-primary btn-block mb-4 justify-content-center" id="registro">
                      Registrate
                    </button>
                  </div>
    
                  <!-- Register buttons -->
                  <div class="text-center">
                   <button id="buton1" class="transparent-bottons"><a><p class="text">Ya tengo cuenta, iniciar sesion</p></a></button> 
                   
    
                  
    
                   
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
`,
  script: ()=>{
    document.querySelector('#buton1').addEventListener("click", (event)=>{
      event.preventDefault();
      document.querySelector('main').innerHTML = login.template;
      
    })
    document.querySelector('#registro').addEventListener("click", (event)=>{
      event.preventDefault()
      console.log("Hola mundo");
      Swal.fire({
        title: 'Seguro que quieres registrarte con el usuario + ',
        text: "Podras cambiarlo más adelante",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#008000',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si crealo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Nombre usuario a sido creado correctamente',

          )
        }
      })
    })
  }

}

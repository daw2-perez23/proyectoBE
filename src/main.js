// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

import { header } from "./components/header";
import { home } from './vistas/home';


document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = home.template
header.script()
home.script()
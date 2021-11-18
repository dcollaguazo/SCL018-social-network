// Este es el punto de entrada de tu aplicacion
import { menu } from './lib/views/templateMenu.js'
import { changerRoute } from './lib/router.js'

const init = () => {
    document.getElementById('root').innerHTML = menu();
    window.addEventListener('hashchange',() => {
        changerRoute(window.location.hash);
    })
}

window.addEventListener('load',init);

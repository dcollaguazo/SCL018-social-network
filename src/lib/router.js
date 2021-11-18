import { home } from './views/templateHome.js';
import { agents } from './views/templateAgents.js';
import { menu } from './views/templateMenu.js';
import { login } from './views/templateLogin.js';
import { feed } from './views/templateFeed.js';

export const changerRoute = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = menu();

    switch(hash){
        case '#/':
            containerRoot.appendChild(home());
            break;
        case '#/agents':
            containerRoot.appendChild(agents());
            break;
        case '#/login':
            containerRoot.appendChild(login());
            break;
        case '#/feed':
            containerRoot.appendChild(feed());
            break;
        default:
            containerRoot.innerHTML = '<h2>This page doesn\'t exist</h2>'
    }
}
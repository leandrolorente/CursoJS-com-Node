import GeraSenha from './assets/modules/GeraSenha';

import './assets/css/style.css';

(function(){
    const gera = new GeraSenha();
    const senhaGerada = document.querySelector('.senha-gerada');
    senhaGerada.innerHTML = gera.geraNovaSenha();
})();
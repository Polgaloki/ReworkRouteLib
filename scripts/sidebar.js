// Seleciona todos os elementos com a classe 'item-menu'
var menuitem = document.querySelectorAll('.item-menu');

// Define uma função para selecionar o link clicado
function selectLink(event) {
    // Remove a classe 'ativo' de todos os elementos com a classe 'item-menu'
    menuitem.forEach(item => {
        item.classList.remove('ativo');
    });
    // Adiciona a classe 'ativo' ao elemento clicado
    this.classList.add('ativo');
}

// Adiciona um ouvinte de evento de clique a cada elemento com a classe 'item-menu'
menuitem.forEach(item => {
    item.addEventListener('click', selectLink);
});

// Seleciona o botão de expansão
var btnExp = document.querySelector('#btn-exp');

// Seleciona o menu lateral
var menuSide = document.querySelector('.menu-lateral');

// Adiciona um ouvinte de evento de clique ao botão de expansão
btnExp.addEventListener('click', function(){
   // Alterna a classe 'expandir' no menu lateral quando o botão é clicado
   menuSide.classList.toggle('expandir');
});


function selectLink(event) {
    // Verifica se o menu lateral está expandido
    if (menuSide.classList.contains('expandir')) {
        // Remove a classe 'ativo' de todos os elementos com a classe 'item-menu'
        menuitem.forEach(item => {
            item.classList.remove('ativo');
        });
        // Adiciona a classe 'ativo' ao elemento clicado
        this.classList.add('ativo');
    }
}

// Adiciona um ouvinte de evento de clique a cada elemento com a classe 'item-menu'
menuitem.forEach(item => {
    item.addEventListener('click', selectLink);
});

document.addEventListener('click', function(event) {
    // Verifica se o clique ocorreu dentro do menu lateral
    if (!menuSide.contains(event.target) && !btnExp.contains(event.target)) {
        // Fecha a aba
        menuSide.classList.remove('expandir');
    }
});
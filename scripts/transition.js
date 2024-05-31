document.addEventListener("DOMContentLoaded", function(){
    const homeLink = document.getElementById('home');
    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        fadeOutEffect('index.html');
    });

    const mapaLink = document.getElementById('mapa');
    mapaLink.addEventListener('click', function(event) {
        event.preventDefault();
        fadeOutEffect('routelib.html');
    });

    const infra1Link = document.getElementById('infra1');
    infra1Link.addEventListener('click', function(event) {
        event.preventDefault();
        fadeOutEffect('infra1.html');
    });

    const infra2Link = document.getElementById('infra2');
    infra2Link.addEventListener('click', function(event) {
        event.preventDefault();
        fadeOutEffect('infra2.html');
    });

    const informaLink = document.getElementById('informa');
    informaLink.addEventListener('click', function(event) {
        event.preventDefault();
        fadeOutEffect('info.html');
    });

    

    function fadeOutEffect(destination) {
        const body = document.body;
        body.style.filter = 'blur(3px)'; // Aplica o efeito de desfoque
        setTimeout(function() {
            setTimeout(function() {
                window.location.href = destination;
            }, 700); // Tempo (em milissegundos) para aguardar antes de redirecionar
        }, 100); // Pequeno atraso para garantir que o desfoque seja aplicado antes da transição de opacidade
    }
});
 

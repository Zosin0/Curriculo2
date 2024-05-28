// // Animação de parallax para os itens dentro da seção hero
// document.addEventListener('mousemove', function(e) {
//     const items = document.querySelectorAll('.hero p, .hero .btn');
//     const speed = 0.05;  // Ajuste a velocidade conforme necessário
//     items.forEach(item => {
//         const x = (window.innerWidth - e.pageX * speed) / 10;
//         const y = (window.innerHeight - e.pageY * speed) / 10;
//         item.style.transform = `translateX(${x}px) translateY(${y}px)`;
//     });
// });

// Alternar menu de navegação em dispositivos móveis
document.getElementById('menu-icon').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Animações de rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Envio de formulário com AJAX
document.querySelector('[data-form]').addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const object = {};
    data.forEach((value, key) => object[key] = value);
    const json = JSON.stringify(object);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        });

        if (response.ok) {
            form.innerHTML = '<h1 class="success">Mensagem Enviada!</h1>';
        } else {
            form.innerHTML = '<h1 class="error">Não foi possível enviar sua mensagem :/</h1>';
        }
    } catch (error) {
        form.innerHTML = '<h1 class="error">Não foi possível enviar sua mensagem :/</h1>';
    }
});

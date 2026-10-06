document.addEventListener('DOMContentLoaded', () => {

    const botonTema = document.getElementById('toggle-tema');

    if (botonTema) {
        botonTema.addEventListener('click', () => {
            document.body.classList.toggle('modo-oscuro');

            if (document.body.classList.contains('modo-oscuro')) {
                botonTema.textContent = '☀️'; 
            } else {
                botonTema.textContent = '🌙'; 
            }
        });
    }

    const botonMenu = document.getElementById('toggle-menu');
    const menuNavegacion = document.querySelector('.menu');

    if (botonMenu && menuNavegacion) {
        botonMenu.addEventListener('click', () => {
            menuNavegacion.classList.toggle('activo');
        });

        const enlacesMenu = menuNavegacion.querySelectorAll('a');
        enlacesMenu.forEach(enlace => {
            enlace.addEventListener('click', () => {
                menuNavegacion.classList.remove('activo');
            });
        });
    }

    const formulario = document.getElementById('formulario-contacto');

    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const nombre = document.getElementById('nombre')?.value.trim();
            const correo = document.getElementById('correo')?.value.trim();
            const mensaje = document.getElementById('mensaje')?.value.trim();

            if (!nombre || !correo || !mensaje) {
                alert('Por favor, completa todos los campos requeridos antes de enviar.');
                return;
            }

            const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!expresionCorreo.test(correo)) {
                alert('Por favor, ingresa un correo electrónico válido.');
                return;
            }

            alert(`¡Gracias por tu mensaje, ${nombre}! Nos pondremos en contacto contigo pronto.`);
            
            formulario.reset();
        });
    }

   
    const enlacesInternos = document.querySelectorAll('a[href^="#"]');

    enlacesInternos.forEach(enlace => {
        enlace.addEventListener('click', function (evento) {
            const idDestino = this.getAttribute('href');
            
            if (idDestino !== '#') {
                const elementoDestino = document.querySelector(idDestino);
                if (elementoDestino) {
                    evento.preventDefault();
                    elementoDestino.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});
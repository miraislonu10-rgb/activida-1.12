so de HTML Semántico: Preferí usar etiquetas como <header>, <nav>, <section>, <article> y <footer> en lugar de llenar todo el código de puros <div>. Esto ayuda mucho a que la estructura sea clara, accesible para lectores de pantalla y más fácil de leer.

Módulos separados: Dividí el proyecto en tres archivos principales: index.html para la estructura, css/estilos.css para los estilos y js/main.js para la interacción. Así mantengo el código súper limpio y ordenado.

Colores y estilo: Elegí una paleta de colores suave e inspirada en tonos naturales (verde salvia, beige/blanco cálido y gris oscuro). Quería que el sitio transmitiera serenidad y se viera limpio, sin colores fosforescentes o contrastes que cansen la vista al leer.

Layouts con Grid y Flexbox: Organicé las secciones de Habilidades y Proyectos usando tarjetas con CSS Grid y Flexbox. Esto hace que todo el contenido se vea simétrico, moderno y fácil de revisar.

Botón de Modo Oscuro / Claro: Implementé la función para cambiar de tema usando clases en el body. Decidí poner explícitamente el texto "Modo Oscuro" y "Modo Claro" en el botón para que sea totalmente obvio para quien navegue el sitio qué acción va a realizar al hacer clic.

Menú Móvil: Agregué el botón de hamburguesa para que el menú de navegación se pueda abrir y cerrar en celulares sin estorbar el contenido principal.

Scroll Suave (Smooth Scroll): Hice que al dar clic en cualquier enlace del menú la página se desplace suavemente hacia esa sección, lo que le da un toque mucho más fluido y cómodo.

Validación de Formulario: En el formulario de contacto utilicé preventDefault() para evitar que la página se reinicie sola al dar enviar, validando que el correo y los campos estén bien llenos antes de dar la confirmación.

Media Queries: Configuré reglas específicas para pantallas de menos de 768px. De esta forma, si entran a mi página desde un teléfono o una tableta, las columnas se reacomodan a una sola fila y los textos se ajustan para que todo se lea perfecto sin salirse de la pantalla.
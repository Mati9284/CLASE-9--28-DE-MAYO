// Seleccionar elementos
    const hamburguesa = document.getElementById('hamburguesa');
    const nav = document.getElementById('navegacion');

    // Evento click en el botón hamburguesa
hamburguesa.addEventListener('click', () => {
    nav.classList.toggle('activo');   // Muestra/oculta el menú
    hamburguesa.classList.toggle('activo'); // Anima el botón (opcional)
});

    // Opcional: cerrar menú al hacer clic en un enlace
    document.querySelectorAll('#navegacion a').forEach(enlace => {
        enlace.addEventListener('click', () => {
            nav.classList.remove('activo');
            hamburguesa.classList.remove('activo');
        });
    });
    const hamburguesa = document.getElementById('hamburguesa');
    const nav = document.getElementById('navegacion');

hamburguesa.addEventListener('click', () => {
    nav.classList.toggle('activo');   
    hamburguesa.classList.toggle('activo');
});


    document.querySelectorAll('#navegacion a').forEach(enlace => {
        enlace.addEventListener('click', () => {
            nav.classList.remove('activo');
            hamburguesa.classList.remove('activo');
        });
    });
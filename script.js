// Este evento se asegura de que el código se ejecute solo después de que
// todo el contenido de la página (el HTML) se haya cargado completamente.
document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleccionar todos los elementos que representan un ramo.
    // querySelectorAll crea una lista (NodeList) con todos los elementos
    // que tienen la clase 'ramo'.
    const ramos = document.querySelectorAll('.ramo');

    // 2. Recorrer cada uno de los ramos que encontramos.
    // forEach es un bucle que ejecuta una función para cada elemento de la lista 'ramos'.
    ramos.forEach(ramo => {

        // 3. Añadir un "oyente de eventos" para el clic a cada ramo.
        // Esto significa que cada vez que un usuario haga clic en un elemento 'ramo',
        // la función que definimos a continuación se ejecutará.
        ramo.addEventListener('click', () => {

            // 4. Alternar la clase 'aprobado'.
            // classList.toggle('aprobado') es la magia principal:
            // - Si el elemento NO tiene la clase 'aprobado', se la añade.
            // - Si el elemento YA TIENE la clase 'aprobado', se la quita.
            // Esto permite marcar y desmarcar el ramo con un solo clic.
            ramo.classList.toggle('aprobado');

        });
    });

});

document.getElementById('tipoViaje').addEventListener('change', function() {
    const fechaVuelta = document.getElementById('fechaVuelta');
    if (this.value === 'idavuelta') {
        fechaVuelta.disabled = false;
    } else {
        fechaVuelta.disabled = true;
        fechaVuelta.value = ''; // Limpia la fecha de vuelta si se desactiva
    }
});

document.getElementById('buscarVuelos').addEventListener('click', function() {
    const destino = document.getElementById('destino').value.toLowerCase();
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = '';

    const vuelos = [
        { aerolinea: 'Eleven Airline', vuelo: 'FL139', salida: '09:27', llegada: '08:25', origen: 'SANTIAGO', destino: 'ITALIA', precio: '$1200', duracion: '17 h 42 m', img: 'https://via.placeholder.com/50' },
        { aerolinea: 'Eleven Airline', vuelo: 'FL984', salida: '19:49', llegada: '23:27', origen: 'SANTIAGO', destino: 'ITALIA', precio: '$1500', duracion: '17 h 42 m', img: 'https://via.placeholder.com/50' },
        { aerolinea: 'Eleven Airline', vuelo: 'FL84', salida: '15:24', llegada: '02:27', origen: 'SANTIAGO', destino: 'ITALIA', precio: '$1000', duracion: '17 h 42 m', img: 'https://via.placeholder.com/50' },
    ];

    vuelos.forEach(vuelo => {
        if (vuelo.destino.toLowerCase() === destino) {
            const div = document.createElement('div');
            div.classList.add('vuelo');
            div.innerHTML = `
                <img src="${vuelo.img}" alt="${vuelo.aerolinea}">
                <div class="vuelo-info">
                    <p>${vuelo.aerolinea} - ${vuelo.vuelo}</p>
                    <p><strong>${vuelo.salida}</strong> ${vuelo.origen} <strong>${vuelo.llegada}</strong> ${vuelo.destino}</p>
                    <p>Duración: ${vuelo.duracion}</p>
                </div>
                <div class="vuelo-precio">
                    <p>${vuelo.precio}</p>
                    <button>Seleccionar</button>
                </div>
            `;
            resultados.appendChild(div);
        }
    });

    document.getElementById('opcionesVuelos').classList.remove('oculto');
});

function obtenerFechaActual() {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const día = String(hoy.getDate()).padStart(2, '0');
    return `${año}-${mes}-${día}`; // Formato para el input
}

function formatearFecha(fecha) {
    const partes = fecha.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`; // Formato DD/MM/AAAA
}

// Establecer la fecha mínima y mostrarla en formato DD/MM/AAAA
const fechaMinima = obtenerFechaActual();
document.getElementById('fechaIda').min = fechaMinima;
document.getElementById('fechaVuelta').min = fechaMinima;


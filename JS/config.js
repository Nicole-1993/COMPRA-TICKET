document.getElementById('tipoViaje').addEventListener('change', function() {
    const fechaVuelta = document.getElementById('fechaVuelta');
    if (this.value === 'idavuelta') {
        fechaVuelta.disabled = false;
    } else {
        fechaVuelta.disabled = true;
        fechaVuelta.value = ''; 
    }
});

document.getElementById('buscarVuelos').addEventListener('click', function() {
    const destino = document.getElementById('destino').value;
    const origen = document.getElementById('origen').value;
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = '';

    // Verificar si el destino es el mismo que el origen
    if (origen.toLowerCase() === destino.toLowerCase()) {
        alert('El destino no puede ser el mismo que el origen.');
        return; // Detener la ejecución si son iguales
    }
    const vuelos = [
        { aerolinea: 'Eleven Airline', vuelo: 'FL139', salida: '09:27', llegada: '08:25', origen: origen, destino: destino, precio: '$1200', duracion: '12 h 30 m', img: 'avion.JPG' },
        { aerolinea: 'Eleven Airline', vuelo: 'FL984', salida: '19:49', llegada: '23:27', origen: origen, destino: destino, precio: '$1500', duracion: '13 h 10 m', img: 'avion.JPG' },
        { aerolinea: 'Eleven Airline', vuelo: 'FL84', salida: '15:24', llegada: '02:27', origen: origen, destino: destino, precio: '$1000', duracion: '14 h 05 m', img: 'avion.JPG' },
    ];

    vuelos.forEach(vuelo => {
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
    });

    document.getElementById('opcionesVuelos').classList.remove('oculto');
});

function obtenerFechaActual() {
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const día = String(hoy.getDate()).padStart(2, '0');
    return `${año}-${mes}-${día}`; 
}

function formatearFecha(fecha) {
    const partes = fecha.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

const fechaMinima = obtenerFechaActual();
document.getElementById('fechaIda').min = fechaMinima;
document.getElementById('fechaVuelta').min = fechaMinima;

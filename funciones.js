// Convierte el string en un array de números, ignorando los trozos que no sean válidos[cite: 16]
function textoAArray(texto) {
    const trozos = texto.split(",");
    let numeros = [];
    for (let trozo of trozos) {
        let num = Number(trozo.trim());
        // Filtramos con !isNaN y evitamos espacios vacíos[cite: 16]
        if (!isNaN(num) && trozo.trim() !== "") {
            numeros.push(num);
        }
    }
    return numeros;
}
// Obtiene el máximo usando un bucle (SIN Math.max)[cite: 16]
function obtenerMaximo(numeros) {
    let max = numeros[0]; // Empieza en el índice 1 (o valor inicial 0)[cite: 16]
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i];
        }
    }
    return max;
}
// Obtiene el mínimo usando un bucle (SIN Math.min)[cite: 16]
function obtenerMinimo(numeros) {
    let min = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < min) {
            min = numeros[i];
        }
    }
    return min;
}
// Función principal que procesa la lista y actualiza el DOM
function procesarLista() {
    const texto = document.getElementById("lista").value;
    const pResultado = document.getElementById("resultado");
    const numeros = textoAArray(texto);
    // Si el array queda vacío (o no hay números válidos), muestra un aviso[cite: 16]
    if (numeros.length === 0) {
        pResultado.textContent = "Aviso: Introduce al menos un número válido separado por comas.";
        pResultado.style.color = "red";
        return;
    }
    const max = obtenerMaximo(numeros);
    const min = obtenerMinimo(numeros);
    const cantidad = numeros.length;
    // Mostramos el resultado con el formato exacto requerido[cite: 16]
    pResultado.style.color = "black";
    pResultado.textContent = `Máximo: ${max} · Mínimo: ${min} · Cantidad: ${cantidad}`;
}
// Asociamos el evento de clic al botón usando addEventListener
document.getElementById("btnCalcular").addEventListener("click", procesarLista);
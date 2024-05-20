const botonConvertir = document.getElementById('botonConvertir');
const numeroBinario = document.getElementById('numeroBinario');
const botonCerrar = document.getElementById('botonCerrar');
const resultado = document.getElementById('labelResultado')
const validacion = document.getElementById('validacion')

botonConvertir.addEventListener('click', () => {
    const dato = numeroBinario.value;

    if (!isNaN(dato) && dato.trim() !== "" && dato.length < 9) {
        const arrayNumeros = dato.split('');
        let resultadoDecimal = 0;
        let datosCorrectos = true;

        for (let i = 0; i < arrayNumeros.length; i++) {
            const bit = parseInt(arrayNumeros[i]);

            if (bit === 0 || bit === 1) {
                resultadoDecimal += bit * Math.pow(2, arrayNumeros.length - 1 - i);
            } else {
                datosCorrectos = false;
                break; 
            }
        }

        if (datosCorrectos) {
            validacion.textContent = ""; 
            resultado.textContent = resultadoDecimal;
        } else {
            validacion.textContent = "Los datos ingresados son incorrectos";
            resultado.textContent = ""; 
        }

        numeroBinario.value = "";
    } else {
        validacion.textContent = "Los datos ingresados son incorrectos";
        resultado.textContent = ""; 
    }
});

botonCerrar.addEventListener('click', ()=>{
    numeroBinario.value = ""
    resultado.textContent = ""
})


 
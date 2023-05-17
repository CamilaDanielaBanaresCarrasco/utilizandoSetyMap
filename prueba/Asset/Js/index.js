document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.input'); // Obtener todos los elementos de clase 'input'
  const checkboxes = document.querySelectorAll('.form-check-input'); // Obtener todos los elementos de clase 'form-check-input'
  const activitiesSet = new Set(); // Crear un Set para almacenar las actividades seleccionadas
  const checkboxesMap = new Map(); // Crear un Map para almacenar las relaciones entre las actividades y los checkboxes

  checkboxes.forEach((checkbox, index) => {
    const input = inputs[index]; // Obtener el input correspondiente al checkbox actual

    input.addEventListener('input', function() {
      if (input.value !== "") {
        checkbox.disabled = false; // Habilitar el checkbox si se ha ingresado un valor en el input
      } else {
        checkbox.disabled = true; // Deshabilitar el checkbox si no se ha ingresado ningún valor en el input
        checkbox.checked = false; // Asegurarse de que el checkbox esté desmarcado
      }
    });

    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        const inputValue = input.value; // Obtener el valor del input
        input.disabled = true; // Deshabilitar el input
        input.classList.add('text-decoration-line-through'); // Aplicar el estilo de línea cruzada al input
        activitiesSet.add(inputValue); // Agregar el valor del input al Set de actividades seleccionadas
        checkboxesMap.set(checkbox.id, inputValue); // Asociar el valor del input con el ID del checkbox en el Map
        console.log(`Se almacenó "${inputValue}" en el Set y Map. Número de casilla del checkbox: ${checkbox.id}`);
        console.log("-------------------")
        console.log(checkboxesMap)
        console.log("-------------------")
        console.log(activitiesSet)
      } else {
        input.disabled = false; // Habilitar el input
        input.classList.remove('text-decoration-line-through'); // Eliminar el estilo de línea cruzada del input
        const inputValue = input.value; // Obtener el valor del input
        activitiesSet.delete(inputValue); // Eliminar el valor del input del Set de actividades seleccionadas
        checkboxesMap.delete(inputValue); // Eliminar la asociación del valor del input en el Map
        console.log(`Se eliminó "${inputValue}" del Set y Map. Número de casilla del checkbox: ${checkbox.id}`);
      }
    });
  }); //Aqui termina la funcion

  function mostrarFrasesTarjadas() {
    const frasesTarjadas = Array.from(inputs).filter(input => input.disabled).map(input => input.value);
    console.log("Frases tarjadas:");
    console.log(frasesTarjadas);
  }
});
/******** 
 regular expresion group ranges
 const REGEXP = /blue|red/

"red flag".match(REGEXP)  // red
"blue flag".match(REGEXP)  // blue

// Matches "blue" in "blue flag" and "red" in "red 
*/

const text = "red flag blue flag green flag";
const result = text.match(/red flag|green flag/gi);
console.log(result);


const story = `La terapia recibió una autorización de uso de emergencia por parte de la Administración de Medicamentos y Alimentos de EE.UU. (FDA, por sus siglas en inglés) para que se utilice en pacientes de 12 años o más que tengan un caso leve o moderado de covid-19 y que tengan un riesgo alto de avanzar hacia una forma más grave de la enfermedad.

El presidente Donald Trump recibió la terapia, llamada REGEN-COV2, cuando fue hospitalizado por coronavirus. El tratamiento tiene que ser infundido en el torrente sanguíneo y está destinado a imitar una respuesta inmune a la infección.`;

const newArr = story.match(/el tratamiento|tiene que/gi);
console.log(newArr);
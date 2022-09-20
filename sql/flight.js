const startHours = Math.round(Math.random() * 24);
const startMinutes = Math.round(Math.random() * 60);
const startSeconds = Math.round(Math.random() * 60);
const duration = Math.round(Math.random() * 8);
const finishHours = startHours + duration;
const finishMinutes = Math.round(Math.random() * 60);
const finishSeconds = Math.round(Math.random() * 60);

console.log(finishHours)

module.exports = {
    icon: ["Iberia", "Easyjet", "Ryanair", "Qatar Airways", "Vueling", "Air Europa"],
    price: Math.round(Math.random() * 1000),
    start: `${startHours}: ${startMinutes}: ${startSeconds}`,
    finish: `${finishHours}: ${finishMinutes}: ${finishSeconds}`
};


// * Iconos de compañias
// * Hora de los vuelos
// * Precio
// * Duración del vuelo
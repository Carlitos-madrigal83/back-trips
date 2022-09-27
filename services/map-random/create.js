const randomCoordinates = require('random-coordinates');
const { saveCoordinates } = require("../../queries/map-random");
const errors = require("../../errors/commons");

module.exports = (db) => async (req, res, next) => {
  const coordinates = randomCoordinates();

  const companies = ["Iberia", "Easyjet", "Ryanair", "Qatar Airways", "Vueling", "Air Europa"]

  const durationFlights = [
    {
      start: "10:50",
      duration: "1:35",
      finish: "12:25"
    },
    {
      start: "16:15",
      duration: "2:50",
      finish: "19:05"
    },
    {
      start: "01:08",
      duration: "9:12",
      finish: "10:20"
    },
    {
      start: "23:40",
      duration: "2:40",
      finish: "02:20"
    },
    {
      start: "06:30",
      duration: "2:40",
      finish: "09:10"
    },
    {
      start: "11:25",
      duration: "5:45",
      finish: "17:10"
    },
    {
      start: "12:00",
      duration: "2:52",
      finish: "14:52"
    },
    {
      start: "08:15",
      duration: "00:25",
      finish: "08:40"
    },
    {
      start: "10:25",
      duration: "13:15",
      finish: "23:40"
    },
    {
      start: "18:15",
      duration: "2:28",
      finish: "20:43"
    }
  ]

  const { start, duration, finish } = durationFlights[Math.round(Math.random())]
  const flight = {
    icon: companies[Math.round(Math.random() * 5)],
    start, duration, finish
  }
  
  const queryResult = await saveCoordinates(db)({
    coordinates
  });

  if (!queryResult.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: {
      coordinates,
      flight
    }
  });
};

/*
    1º- Crear coordenadas al azar
    2º- Crear datos de vuelos al azar
      * Iconos de compañias
      * Hora de los vuelos
      * Precio
      * Duración del vuelo
    3º- Guardar coordenadas en la db
    4º- Devolver coordenadas y vuelos
*/ 
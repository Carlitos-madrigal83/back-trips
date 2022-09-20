const randomCoordinates = require('random-coordinates');

module.exports = (db) => async (req, res, next) => {
  const saveCoordinates = randomCoordinates();
  
  res.status(200).json({
    success: true,
    data: saveCoordinates
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


module.exports = (db) => async (req, res, next) => {
  const { email, password } = req.body;

  const queryResult = await getCorrectUser(db)({
    email,
    compareFn: hash.compare(password),
  });

  if (!queryResult.ok) return next(login[queryResult.code] || errors[500]);

  serialize(res, { email: queryResult.data.email });

  res.status(200).json({
    success: true,
  });
};

/*
    1º- Crear coordenadas al azar
    2º- Crear datos de vuelos al azar
    3º- Guardar coordenadas en la db
    4º- Devolver coordenadas y vuelos
*/ 
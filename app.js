const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Datos de ejemplo
const mitos = [
  {
    "id": 1,
    "nombre": "La Llorona",
    "origen": "México",
    "categoría": "Leyenda urbana",
    "descripción": "Espíritu que llora por sus hijos en las noches.",
    "fuente": "https://ejemplo.com/la-llorona"
  },
  {
    "id": 2,
    "nombre": "El Chupacabras",
    "origen": "Latinoamérica",
    "categoría": "Criatura mítica",
    "descripción": "Ser que ataca ganado y deja heridas extrañas.",
    "fuente": "https://ejemplo.com/el-chupacabras"
  }
];

// Endpoint para obtener todos los mitos
app.get("/mitos", (req, res) => {
  res.json(mitos);
});

// Endpoint para obtener un mito específico por ID
app.get("/mitos/:id", (req, res) => {
  const mito = mitos.find(m => m.id == req.params.id);
  if (mito) {
    res.json(mito);
  } else {
    res.status(404).json({ error: "Mito no encontrado" });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});

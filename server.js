const express = require("express");
const https = require("https");
const app = express();


const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbyM53UIlZFDkXl1HaNo6NGXSIvjb_Q2zROA0VABP1a0wBzvNs29XrRJbT-u097fTBfS/exec";


app.get("/", (req, res) => {
  res.send("Despertador de Google Sheets corriendo 24/7 de forma correcta.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor activo en puerto ${PORT}`);
});


setInterval(() => {
  https.get(GOOGLE_SHEETS_URL, (res) => {
    console.log(`[${new Date().toISOString()}] Señal enviada a Google Sheets. Status: ${res.statusCode}`);
  }).on('error', (e) => {
    console.error(`Error al conectar con Google Sheets: ${e.message}`);
  });
}, 5000);

const https = require('https');

// REEMPLAZA CON LA URL DE TU WEB APP DE GOOGLE SHEETS
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbyM53UIlZFDkXl1HaNo6NGXSIvjb_Q2zROA0VABP1a0wBzvNs29XrRJbT-u097fTBfS/exec";

console.log("Despertador de Google Sheets iniciado...");

// Bucle que ejecuta la función cada 10,000 milisegundos (10 segundos)
setInterval(() => {
  https.get(GOOGLE_SHEETS_URL, (res) => {
    console.log(`[${new Date().toISOString()}] Petición enviada. Código estado: ${res.statusCode}`);
  }).on('error', (e) => {
    console.error(`Error en la petición: ${e.message}`);
  });
}, 10000);

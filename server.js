const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Route principale pour tester si le serveur fonctionne
app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

// Route pour afficher l'image (si elle est dans le même dossier)
app.get("/image", (req, res) => {
  res.sendFile(path.join(__dirname, "image.jpg"));
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});

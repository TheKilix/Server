const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/log", async (req, res) => {
    const discordWebhook = "https://discord.com/api/webhooks/TON_WEBHOOK_ID";
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    await fetch(discordWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: `Image vue par : ${ip}` }),
    });

    res.redirect("https://raw.githubusercontent.com/TON_PSEUDO/TON_REPO/main/image.png");
});

app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));

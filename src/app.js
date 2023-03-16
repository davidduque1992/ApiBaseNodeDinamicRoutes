const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const { router } = require("./routes");
const { checkJWT } = require("./middlewares/auth");

app.use(cors());
//el middleware  se puede aplicar aqui  o simplemente a cada ruta por separado en este caso es para verificar un token de {Auth} tipo {beaer} "portador"
app.use("/api", checkJWT, router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Api  corriendo por el puerto", PORT));

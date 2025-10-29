const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

let members = [
  { ci: "123456", name: "Juan Pérez", birthDate: "1990-01-01", branch: "Diseñador Gráfico", inscription: "2020-05-01" },
  { ci: "789012", name: "Ana Gómez", birthDate: "1992-03-15", branch: "Prensista", inscription: "2021-06-10" }
];

// Endpoint raíz para probar Render
app.get("/", (req, res) => {
  res.send("Servidor backend funcionando correctamente ✅");
});

// Obtener miembros
app.get("/members", (req, res) => {
  res.json(members);
});

// Agregar miembro
app.post("/members", (req, res) => {
  const newMember = req.body;
  members.push(newMember);
  res.json(members);
});

// Eliminar miembro
app.delete("/members/:ci", (req, res) => {
  const ciToRemove = req.params.ci;
  members = members.filter(m => m.ci !== ciToRemove);
  res.json(members);
});

app.listen(PORT, () => {
  console.log(`✅ Servidor backend corriendo en puerto ${PORT}`);
});

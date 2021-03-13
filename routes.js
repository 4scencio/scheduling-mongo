const express = require("express");

const router = express.Router();

//Serivces
const appointmentService = require("./services/AppointmentService");

router.get("/", (req, res) => {
  res.json({ resposta: "Página Inicial" });
});

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
    const { name, email, description, cpf, date, time } = req.body
  const newAppointment = await appointmentService.create(
      name,
      email,
      description,
      cpf,
      date,
      time
  );

      if(newAppointment) {
          res.json({message: 'Consulta agendada com sucesso'})
      } else {
          res.json({error: 'Preencha os campos corretamente'})
      }

});

module.exports = router;

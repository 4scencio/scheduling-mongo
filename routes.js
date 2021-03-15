const express = require("express");

const router = express.Router();

//Serivces
const appointmentService = require("./services/AppointmentService");

// HomePage
router.get("/", (req, res) => {
  res.render('index')
});

// View Create Appointment
router.get("/create", (req, res) => {
  res.render("create");
});

// Form to Create Appointment
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

// List all appointments
router.get('/getcalendar', async (req, res) => {
  const consultas = await appointmentService.getAll(false)

  res.json(consultas)
})

module.exports = router;

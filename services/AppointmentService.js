const appointment = require('../models/Appointment')
const mongoose = require('mongoose')
const AppointmentFactory = require('../factories/AppointmentFactory')

const Appo = mongoose.model('Appointment', appointment)

class AppointmentService {
    async create(name, email, description, cpf, date, time) {
        const newAppo = new Appo({
            name,
            email,
            description,
            cpf,
            date,
            time,
            finished: false
        })

        try {
            await newAppo.save()
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async getAll(showFinished) {
        if(showFinished) {
            return await Appo.find()
        } else {
            const appos = await Appo.find({'finished': false})

            const appointments = []

            appos.forEach(appointment => {
                appointments.push(AppointmentFactory.build(appointment))
            })

            return appointments
        }
    }
}

module.exports = new AppointmentService()
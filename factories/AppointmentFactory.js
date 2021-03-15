class AppointmentFactory {
    build(simpleAppointment) {
        let day = simpleAppointment.date.getDate()
        let month = simpleAppointment.date.getMonth()
        let year = simpleAppointment.date.getFullYear()
        let hour = Number.parseInt(simpleAppointment.time.split(':')[0])
        let minutes = Number.parseInt(simpleAppointment.time.split(':')[1])

        const startDate = new Date(year, month, day, hour, minutes, 0, 0)

        //Fuso horário em: Brasília - DF (GMT-3)
        startDate.setHours(startDate.getHours() -3)

        const AppointmentUpdated = {
            id: simpleAppointment._id,
            title: `${simpleAppointment.name} - ${simpleAppointment.description}`,
            start: startDate,
            end: startDate
        }

        return AppointmentUpdated
    }
}

module.exports = new AppointmentFactory()
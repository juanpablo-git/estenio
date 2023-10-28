function addApointment() {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const notes = document.getElementById("notes").value;

    const apointment = {
        id: Date.now(),
        name,
        date,
        time,
        notes
    }

    let apointments = JSON.parse(localStorage.getItem("appointments")) || [] ;
    apointments.push(apointment)

    localStorage.setItem("appointments",JSON.stringify(apointments))

    displayAppointments()
}

function displayAppointments() {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || []
    const list = document.getElementById("appointment-list");
    list.innerHTML = ""

    appointments.forEach( appointment => {
        list.innerHTML += `
            <li>
                ${appointment.name} - ${appointment.date} - ${appointment.time}
                <p>${appointment.notes}</p>
            </li>
        `
    });
}

window.onload = displayAppointments ;
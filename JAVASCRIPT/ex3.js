const events = [
    {
        name: "Music Fest",
        date: "2026-06-10",
        seats: 20
    },
    {
        name: "Tech Workshop",
        date: "2025-01-15",
        seats: 15
    },
    {
        name: "Food Carnival",
        date: "2026-07-01",
        seats: 0
    }
];
const today = new Date();
const cont = document.getElementById("eventContainer");

events.forEach(event => {
    const eventDate = new Date(event.date);
    if (eventDate >= today && event.seats > 0) {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <p>Available Seats: ${event.seats}</p>
            <button onclick="registerEvent('${event.name}', ${event.seats})">
                Register
            </button>
            <hr>
        `;

        cont.appendChild(div);

    } else {

        console.log(event.name);

    }
});
function registerEvent(eventName,seats) {

    try {

        if (seats<=0) {
            throw new Error("No seats available");
        }
        

    } catch (error) {

        console.log("Registration Error:", error.message);
        alert(error.message);

    }
}
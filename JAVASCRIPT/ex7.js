let events = [
    { name: "Music Show", seats: 5 },
    { name: "Dance Event", seats: 2 }
];
let eventList = document.querySelector("#eventList");
events.forEach(function(event) {
    let card = document.createElement("div");
    card.innerHTML =
        "<h3>" + event.name + "</h3>" +
        "<p>Seats: <span>" + event.seats + "</span></p>" +
        "<button>Register</button> " +
        "<button>Cancel</button>";
    let registerBtn = card.querySelectorAll("button")[0];
    let cancelBtn = card.querySelectorAll("button")[1];
    let seatText = card.querySelector("span");
    registerBtn.onclick = function() {
        if (event.seats > 0) {
            event.seats--;
            seatText.textContent = event.seats;
        }
    };
    cancelBtn.onclick=function() {
        event.seats++;
        seatText.textContent = event.seats;
    };
    eventList.appendChild(card);

});
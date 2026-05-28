
let events=[
    {name:"Music Show",category:"Music",seats:5},
    {name:"Tech Talk",category:"Tech",seats:10},
    {name:"Dance Event",category:"Dance",seats:0}
];
function addEvent(name,category,seats){
    events.push({
        name: name,
        category: category,
        seats: seats
    });
    console.log("Event Added");
}
function registerUser(eventName) {
    let event = events.find(e => e.name === eventName);
    if (event && event.seats > 0) {

        event.seats--;

        console.log("Registered for " + eventName);

    } else {

        console.log("No seats available");

    }
}

function filter(category) {

    return events.filter(
        event => 
            event.category === category
    );

}
console.log(filter("Tech"));
function countRegister() {
    let count = 0;
    return function () {
        count++;
        console.log("Total Registrations:"+count);
    };
}

let rCount = countRegister();

rCount();
rCount();
function search(callback) {

    return events.filter(callback);

}

let result = search(event => event.seats > 0);

console.log(result);

addEvent("Art Show","Art",15);

registerUser("Music Show");
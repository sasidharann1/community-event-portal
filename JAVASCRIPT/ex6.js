let events = ["Music Show", "Baking Workshop", "Dance Event"];
events.push("Singing Night");
console.log(events);
let musicEvents=events.filter(function(event) {
    return event.includes("Music");
});
console.log(musicEvents);
let cards=events.map(function(event) {

    return "Event: "+event;

});
console.log(cards);

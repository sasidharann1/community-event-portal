function Event(name,category,seats) {
    this.name=name;
    this.category=category;
    this.seats=seats;
}
Event.prototype.checkAvailability=function(){
    if (this.seats>0){
        console.log("Seats Available");
    } else {
        console.log("No Seats Available");
    }
};
let event1=new Event("Music Show","Music",5);
let event2=new Event("Dance Event","Dance",0);
event1.checkAvailability();
event2.checkAvailability();
console.log(Object.entries(event1));
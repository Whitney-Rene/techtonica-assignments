//create the Ticket Type class
class TicketType {
  constructor(name, price){
      this.name = name;
      this.price = price;
  }
}

//create the Event class with 4 functions
class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }

  addAvailableTickets(nameTicType, price) {
    this.availableTickets.push(new TicketType(nameTicType, price));
}
  allTickets() {
    let ticketlist = "All Tickets: "
    this.availableTickets.forEach((ticket, index) => {
    ticketlist += `${index + 1}. ${ticket.name} ($${ticket.price}) `;
  })
  return ticketlist;
}
  searchTickets(lowerBound, upperBound) {
  const eligibleTickets = this.availableTickets.filter(ticket => {
      return ticket.price >= lowerBound && ticket.price <= upperBound;
  });
  if (eligibleTickets.length > 0) {
      let ticketList = 'Eligible tickets: ';
      eligibleTickets.forEach((ticket, index) => {
          ticketList += `${index + 1}. ${ticket.name} ($${ticket.price}) `;
      });
      return ticketList.trim();
  } else {
      return 'No tickets available.';
  }
}
}

//create an empty array
const eventArray = new Array();

// creates 3 objects
const eventObj1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);

const eventObj2 = new Event(
  'Skillet & Sevendust',
  'Victorious war tour');

const eventObj3 = new Event(
  'Jenny Lewis', 
  'On the line tour 2019');

//add Ticket Types
eventObj1.addAvailableTickets("GA", 100);
eventObj1.addAvailableTickets("Premium", 150);
eventObj1.addAvailableTickets("VIP", 300);

eventObj2.addAvailableTickets("Sunflower", 100);
eventObj2.addAvailableTickets("Lily", 150);
eventObj2.addAvailableTickets("SnakePlant", 300);

eventObj3.addAvailableTickets("Balcony", 100);
eventObj3.addAvailableTickets("Mezzanine", 150);
eventObj3.addAvailableTickets("Orchestra", 300);

//push the event objects to the empty array, so we can iterate through them
eventArray.push(eventObj1, eventObj2, eventObj3);
console.log(eventArray);


//forEach() = another form of a for loop, shorter, more consice 
document.addEventListener('DOMContentLoaded', () => {
  let html = '';
  eventArray.forEach((item) => {
    const eligibleTickets = item.searchTickets(0, 250);
      html += `<li>${item.name} - ${item.description} - ${item.allTickets()} - ${eligibleTickets}</li>`;
  });
  document.querySelector('#event').innerHTML = html;
});



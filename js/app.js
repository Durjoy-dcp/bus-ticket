function check() {
    const email = document.getElementById('exampleInputEmail1');
    const pass = document.getElementById('exampleInputPassword1');
    console.log("its working ");
    window.location.href = 'booking.html';


}
function bookTicket(id) {


    // console.log(e.options[e.selectedIndex].text);
}

function showDate() {
    let dateString = new Date();
    let actualDate = new Date(dateString);
    let newDate;

    for (var i = 1; i <= 4; i++) {
        newDate = new Date(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDate() + i);
        // console.log(newDate);
        const option = document.createElement('option');
        option.setAttribute('value', i - 1);
        option.innerText = newDate.toDateString();
        document.getElementById('date').appendChild(option);
    }
}
const loc = window.location.href.split('/');
if (loc[loc.length - 1].split('.')[0] == 'booking') {
    console.log("here");
    showDate();
}



function busSelected(booked) {
    console.log("working");

    getData();
}

function getData() {
    let fromBus = document.getElementById('fromBus');
    const from = fromBus.options[fromBus.selectedIndex].text;
    let toBus = document.getElementById('toBus');
    const to = toBus.options[toBus.selectedIndex].text;
    let dateSelect = document.getElementById('date');
    const date = dateSelect.options[dateSelect.selectedIndex].text;
    let timeSelect = document.getElementById('time');
    const time = timeSelect.options[timeSelect.selectedIndex].text;
    let busSelect = document.getElementById('bus');
    const bus = busSelect.options[busSelect.selectedIndex].text;
    // let seatSelect = document.getElementById('seat');
    // const seat = seatSelect.options[seatSelect.selectedIndex].text;
    console.log(from);
    console.log(to);
    console.log(date);
    console.log(time);
    console.log(bus);

    // saveDataOnLocalStorage(from, to, date, time, bus, seat);
    let tickets = getDataFromLocalstorage();
    let seats = tickets.filter(x => x.fromBus == from && x.toBus == to && x.date == date && x.time == time && x.bus == bus).map(x => x.seat);
    console.log(seats);
    const seatsField = document.getElementById('seat');
    seatsField.innerText = '';
    for (let i = 1; i <= 40; i++) {

        if (seats.includes(i + '')) {
            // console.log('no');
            continue;
        } else {
            const option = document.createElement('option');
            option.setAttribute('value', i);
            option.innerText = i;
            seatsField.appendChild(option);
        }


    }

    // let datas = localStorage
}
document.getElementById('seat').addEventListener('focus', busSelected);
function getDataFromLocalstorage() {
    let ticketString = localStorage.getItem('tickets');
    let tickets = [];
    if (ticketString) {
        tickets = JSON.parse(ticketString);
    }
    return tickets;
}
function saveDataOnLocalStorage(from, to, date, time, bus, seat) {
    let seats = getDataFromLocalstorage();
    seats.push({ fromBus: from, toBus: to, date: date, time: time, bus: bus, seat: seat });
    localStorage.setItem('tickets', JSON.stringify(seats));
}
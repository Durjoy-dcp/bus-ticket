let bus = {
    from: '',
    to: '',
    date: '',
    time: '',
    bus: '',
    seat: ''
};

function check(event) {
    console.log(event)
    event.preventDefault()
    const email = document.getElementById('exampleInputEmail1');
    const pass = document.getElementById('exampleInputPassword1');
    // console.log(email.value, pass.value)
    if (email.value === 'user@gmail.com' && pass.value === 'bangladesh') {
        window.location.href = 'booking.html';
        console.log(window.location.href)
        console.log('working')
    } else {
        alert("Wrong User!")
        console.log(event)
        event.target.reset();
    }

}

function bookTicket(id) {

    let seatSelect = document.getElementById('seat');
    bus.seat = seatSelect.options[seatSelect.selectedIndex].text;
    const Ans = confirm(`You are going to book ticket for From: ${bus.from} To: ${bus.to} on ${bus.date} at ${bus.time} in ${bus.bus} .Seat No: ${bus.seat}`)
    console.log(Ans)
    if (Ans) {
        saveDataOnLocalStorage(bus.from, bus.to, bus.date, bus.time, bus.bus, bus.seat);
    }


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
    // console.log("here");
    showDate();
}



function busSelected(booked) {
    console.log("working");
    getData();
}

function getData() {
    let fromBus = document.getElementById('fromBus');
    bus.from = fromBus.options[fromBus.selectedIndex].text;
    let toBus = document.getElementById('toBus');
    bus.to = toBus.options[toBus.selectedIndex].text;
    let dateSelect = document.getElementById('date');
    bus.date = dateSelect.options[dateSelect.selectedIndex].text;
    let timeSelect = document.getElementById('time');
    bus.time = timeSelect.options[timeSelect.selectedIndex].text;
    let busSelect = document.getElementById('bus');
    bus.bus = busSelect.options[busSelect.selectedIndex].text;
    // console.log(from);
    // console.log(to);
    // console.log(date);
    // console.log(time);
    // console.log(bus);

    let tickets = getDataFromLocalstorage();
    let seats = tickets.filter(x => x.fromBus == bus.from && x.toBus == bus.to && x.date == bus.date && x.time == bus.time && x.bus == bus.bus).map(x => x.seat);
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

function showBooked() {
    const container = document.getElementById('display-booked');
    for (let i = 1; i <= 40; i = i + 4) {

        const div = document.createElement('div');
        div.classList.add('row');
        div.innerHTML = `<div class="col-3">
        <div class="bg-success px-2 m-2">${i}</div>
    </div>
    <div class="col-3">
        <div class="bg-success px-2 m-2">${i + 1}</div>
    </div>
    <div class="col-3">
        <div class="bg-success px-2 m-2">${i + 2}</div>
    </div>
    <div class="col-3">
        <div class="bg-success px-2 m-2">${i + 3}</div>
    </div>`
        container.appendChild(div);
    }
}
showBooked();
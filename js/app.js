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



function busSelected() {
    console.log("working");
    const seats = document.getElementById('seat');
    const option = document.createElement('option');
    option.setAttribute('value', 1);
    option.innerText = '1';
    seats.appendChild(option);
}
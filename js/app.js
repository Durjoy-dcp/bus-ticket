function check() {
    const email = document.getElementById('exampleInputEmail1');
    const pass = document.getElementById('exampleInputPassword1');
    console.log("its working ");
    window.location.href = 'booking.html';


}
function bookTicket() {
    const e = document.getElementById('fromBus');
    console.log(e.options[e.selectedIndex].text);
}
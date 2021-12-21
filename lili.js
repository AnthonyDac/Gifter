var connected = true;

function connect() {
    var connected = localStorage.getItem("connected-as-lili");
    if(connected) {
        
    }
    else {
        window.location.href = "index.html";
    }
}
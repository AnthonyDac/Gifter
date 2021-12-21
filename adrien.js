var connected = true;

function connect() {
    var connected = localStorage.getItem("connected-as-adrien");
    if(connected) {
        
    }
    else {
        window.location.href = "index.html";
    }
}
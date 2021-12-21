var afirst = "bd";
var asecond = 56;
var athird = "zH";
var vfirst = "vo";
var vsecond = 23;
var vthird = "dz";
var lfirst = "Sm";
var lsecond = 48;
var lthird = "dM";
var input = document.getElementById("password");
var icon = document.getElementById("show");
var validator = document.getElementById("valid");
var showing = false;
var connected = false;

function shower() {
    if(showing) {
        input.type = "password";
        showing = false;
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
    else {
        input.type = "text";
        showing = true;
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}
validator.addEventListener('click', function(e) {
    if(input.value == afirst + asecond + athird) {
        window.location.href = "adrien.html";
        localStorage.setItem("connected-as-adrien", true);
    }
    if(input.value == vfirst + vsecond + vthird) {
        window.location.href = "valentin.html";
        localStorage.setItem("connected-as-valentin", true);
    }
    if(input.value == lfirst + lsecond + lthird) {
        window.location.href = "lili.html";
        localStorage.setItem("connected-as-lili", true);
    }
});
var e="bd",t="zH",a="vo",l="dz",n="Sm",o="dM",s=48,d=23,c=56,input=document.getElementById("password"),icon=document.getElementById("show"),validator=document.getElementById("valid"),showing=!1,connected=!1;function shower(){showing?(input.type="password",showing=!1,icon.classList.remove("fa-eye-slash"),icon.classList.add("fa-eye")):(input.type="text",showing=!0,icon.classList.remove("fa-eye"),icon.classList.add("fa-eye-slash"))}validator.addEventListener("click",(function(e){input.value==e+s+t&&(window.location.href="adrien.html",localStorage.setItem("connected-as-adrien",!0)),input.value==a+d+l&&(window.location.href="valentin.html",localStorage.setItem("connected-as-valentin",!0)),input.value==n+c+o&&(window.location.href="lili.html",localStorage.setItem("connected-as-lili",!0))}));
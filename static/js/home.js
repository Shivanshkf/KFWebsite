var countDownDate = new Date("sep 1, 2023 19:00:00").getTime(),
  x = setInterval(function () {
    var e = new Date().getTime(),
      n = countDownDate - e,
      t = Math.floor(n / 864e5);
    (dayselect = document.getElementById("days")),
      (hourselect = document.getElementById("hours")),
      (minuteselect = document.getElementById("minutes")),
      (secondselect = document.getElementById("seconds")),
      (dayselect.innerHTML = t),
      (hourselect.innerHTML = Math.floor((n % 864e5) / 36e5)),
      (minuteselect.innerHTML = Math.floor((n % 36e5) / 6e4)),
      (secondselect.innerHTML = Math.floor((n % 6e4) / 1e3)),
      0 != t
        ? (document
            .querySelectorAll("#days-cont")
            .forEach((e) => (e.style.display = "flex")),
          document
            .querySelectorAll("#seconds-cont")
            .forEach((e) => (e.style.display = "none")))
        : (document
            .querySelectorAll("#days-cont")
            .forEach((e) => (e.style.display = "none")),
          document
            .querySelectorAll("#seconds-cont")
            .forEach((e) => (e.style.display = "flex"))),
      n < 0 &&
        (clearInterval(x),
        document
          .querySelectorAll(".dhms-title")
          .forEach((e) => (e.style.display = "none")),
        (document.getElementById("countdown").innerHTML = "Bunchup is live!"));
  }, 1e3),
  i = 0,
  txt = "Launching Soon....",
  speed = 200;
function type() {
  i < txt.length &&
    ((document.getElementById("launching").innerHTML += txt.charAt(i)),
    i++,
    setTimeout(type, speed));
}

let h = document.getElementById('hour');
let m = document.getElementById('min');
let s = document.getElementById('sec');
let hr = 0;
let min = 0;
let sec = 0;
function ss(ss) {
    s.innerHTML = (ss < 10)? "0" +ss:ss;
    (ss == 59)?s.classList.add('final'):s.classList.remove('final');
}
function mm(ss) {
    m.innerHTML = ss;
    (ss > 58)?m.classList.add('final'):m.classList.remove('final');
}
function hh(ss) {
    h.innerHTML = ss;
}

setInterval(() => {
    sec +=1;

    if(sec == 60) {
     sec= 0;
     min +=1;
    }
    if(min == 60) {
        min = 0;
        hr +=1;
    }
    ss(sec);
    mm(min);
    hh(hr);
}, 0.000001);
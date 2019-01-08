var s = document.getElementsByTagName('span');
var oneDay = 24 * 60 * 60 * 1000;
var firstDate = new Date("august 23, 2020 00:00:00");var secondDate = new Date();
var days = (firstDate.getTime() - secondDate.getTime()) / (oneDay);
var hrs = (days - Math.floor(days)) * 24;
var min = (hrs - Math.floor(hrs)) * 60;
s[0].innerHTML = Math.floor(days);
s[1].innerHTML = Math.floor(hrs);
s[2].innerHTML = Math.floor(min);
s[3].innerHTML = Math.floor((min - Math.floor(min)) * 60);
var i = setInterval(function() {n()}, 1000)
function f(d, x) {s[d].innerHTML = x;s[d - 1].innerHTML = Number(s[d - 1].innerHTML) - 1;}
function n() {s[3].innerHTML = Number(s[3].innerHTML) - 1;
if (s[3].innerHTML == -1) {f(3, 59)
if (s[2].innerHTML == -1) {f(2, 59)
if (s[1].innerHTML == -1) {f(1, 23)
}}}if(s[0].innerHTML <= -1) {clearInterval(i);document.getElementsByTagName('div')[0].innerHTML='<h2>The event is over.</h2>'}}


particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 88,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 15
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1.5,
        "opacity_min": 0.15,
        "sync": false
      }
    },
    "size": {
      "value": 2.5,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.15,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 110,
      "color": "#33b1f8",
      "opacity": 0.25,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);;


// -----------------------------------------------------------------------------

// ---------------------------------------------------

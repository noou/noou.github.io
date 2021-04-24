const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);



const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

$(window).on('load', function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})

function randomImg() {
  let imgAr = [
      '<img src="img/logos/logo01.svg" alt="logo.svg" title="Привет дружище!" onClick="randomImg();">',
      '<img src="img/logos/logo02.svg" alt="logo.svg" title="Выйди из бесконечного цикла бессмысленных перерождений и зайди как положено." onClick="randomImg();">',
      '<img src="img/logos/logo03.svg" alt="logo.svg" title="Ты страдаешь, следовательно ты существуешь." onClick="randomImg();">',
      '<img src="img/logos/logo04.svg" alt="logo.svg" title="Всё полезно, что в экзистенциальную дыру пролезло." onClick="randomImg();">',
      '<img src="img/logos/logo05.svg" alt="logo.svg" title="Сильная привязанность к люстре убивает." onClick="randomImg();">',
      '<img src="img/logos/logo06.svg" alt="logo.svg" title="После встречи с дном, начинай копать." onClick="randomImg();">',
      '<img src="img/logos/logo07.svg" alt="logo.svg" title="Если обвести труп цветными мелками, то создастся атмосфера праздника." onClick="randomImg();">',
      '<img src="img/logos/logo08.svg" alt="logo.svg" title="Ваш тлен напрасен, мир прекрасен, хоть и порой весьма ужасен!" onClick="randomImg();">',
      '<img src="img/logos/logo09.svg" alt="logo.svg" title="Artichokes play football. Purple monkeys dance invisibly." onClick="randomImg();">',
      '<img src="img/logos/logo10.svg" alt="logo.svg" title="А ты знаешь, в чем соль, %username%?" onClick="randomImg();">',
      '<img src="img/logos/logo11.svg" alt="logo.svg" title="Вообще—то я не религиозный человек, но если ты есть там наверху, спаси меня, пожалуйста." onClick="randomImg();">',
      '<img src="img/logos/logo12.svg" alt="logo.svg" title="Шоколад ни в чем не виноват!" onClick="randomImg();">',
      '<img src="img/logos/logo13.svg" alt="logo.svg" title="У вас есть такая проблема, что дерьмо прилипает к шерсти?" onClick="randomImg();">',
      '<img src="img/logos/logo14.svg" alt="logo.svg" title="Прислушивайтесь к голосам в вашей голове..." onClick="randomImg();">',
      '<img src="img/logos/logo15.svg" alt="logo.svg" title="Все что вы сдесь видете, далжно оставатся сикретам :0" onClick="randomImg();">',
      '<img src="img/logos/logo16.svg" alt="logo.svg" title="Cпасибо, что зашли :3" onClick="randomImg();">'
  ];
  let rnd = Math.floor(Math.random() * imgAr.length);
  let rndImg = imgAr[rnd];
  let imgTag = document.getElementById('logo');
  imgTag.innerHTML = rndImg;
}
window.onload = randomImg;
(function(){
    const anchorScrollOffset = 100;
    const desktopMinWidth = 500;
    const animateDurationMs = 500;
    const navUl = document.querySelector('nav ul');
    const menuTr = document.querySelector('.menu-trigger');

    function slideToggleMenu() {
        if (navUl.style.display === 'block') {
            navUl.style.display = 'none';
        } else {
            navUl.style.display = 'block';
        }
    }

    function toggleMenuMobile() {
        if (!menuTr) return;
        menuTr.addEventListener('click', function() {
            slideToggleMenu();
            menuTr.classList.toggle('cross');
        });
        window.addEventListener('resize', function() {
            if (window.innerWidth > desktopMinWidth) {
                navUl.removeAttribute('style');
                menuTr.classList.remove('cross');
            }
        });
    }

    function scrollNav() {
        document.querySelectorAll('#navigation-menu a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('#navigation-menu a.active').forEach(a => a.classList.remove('active'));
                this.classList.add('active');
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - anchorScrollOffset,
                        behavior: 'smooth'
                    });
                }
                menuTr.classList.remove('cross');
                if (getComputedStyle(menuTr).display === 'block') {
                    navUl.style.display = 'none';
                }
            });
        });
    }

    function markActiveAnchor() {
        const sections = document.querySelectorAll('section');
        const nav = document.querySelector('nav');
        const nav_height = nav ? nav.offsetHeight : 0;
        window.addEventListener('scroll', function () {
            const cur_pos = window.scrollY;
            sections.forEach(section => {
                const top = section.offsetTop - 100 - nav_height;
                const bottom = top + section.offsetHeight;
                if (cur_pos >= top && cur_pos <= bottom) {
                    nav.querySelectorAll('a.active').forEach(a => a.classList.remove('active'));
                    sections.forEach(s => s.classList.remove('active'));
                    section.classList.add('active');
                    const navLink = nav.querySelector('a[href="#'+section.id+'"]');
                    if (navLink) navLink.classList.add('active');
                }
            });
            if (window.scrollY === document.body.scrollHeight - window.innerHeight) {
                nav.querySelectorAll('a.active').forEach(a => a.classList.remove('active'));
                const navLinks = nav.querySelectorAll('a');
                if (navLinks.length) navLinks[navLinks.length-1].classList.add('active');
            }
        });
    }

    function renderSkillBars() {
        document.querySelectorAll('.skillbar').forEach(skillbar => {
            const bar = skillbar.querySelector('.skillbar-bar');
            if (bar) {
                const percent = skillbar.getAttribute('data-percent');
                bar.style.transition = 'width 2s';
                setTimeout(() => {
                    bar.style.width = percent;
                }, 100); // небольшая задержка для плавности
            }
        });
    }

    function toggleButtonState(enable) {
        const button = document.getElementById('button');
        if (button) button.disabled = !enable;
    }

    function canSendMessage() {
        const message = document.getElementById('message');
        if (!message) return;
        message.addEventListener('keyup', function() {
            toggleButtonState(this.value.length > 2);
        });
    }

    function InputStyle() {
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('blur', function() {
                this.classList.toggle('used', !!this.value);
            });
        });
        document.querySelectorAll('.ripples').forEach(ripples => {
            ripples.addEventListener('click', function(e) {
                const parent = this.parentElement;
                const circle = this.querySelector('.ripplesCircle');
                if (!parent || !circle) return;
                const rect = parent.getBoundingClientRect();
                const x = e.pageX - rect.left;
                const y = e.pageY - rect.top;
                circle.style.top = y + 'px';
                circle.style.left = x + 'px';
                this.classList.add('is-active');
            });
        });
    }

    function handleFormSubmit() {
        const form = document.getElementById('myform');
        const status = document.getElementById('form-status');
        if (!form) return;
        const nameInput = form.elements['name'];
        const emailInput = form.elements['email'];
        const messageInput = form.elements['message'];
        const submitButton = form.querySelector('button[type="submit"]');

        function validateFormFields() {
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();
            const emailValid = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
            if (name && email && message && emailValid) {
                submitButton.disabled = false;
            } else {
                submitButton.disabled = true;
            }
        }

        // Проверка при каждом вводе
        [nameInput, emailInput, messageInput].forEach(input => {
            input.addEventListener('input', validateFormFields);
        });
        // Проверка при загрузке страницы (на случай автозаполнения)
        validateFormFields();

        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            // Автоочистка email перед отправкой
            emailInput.value = emailInput.value.trim().replace(/[\u200B-\u200D\uFEFF\s]/g, '');
            const email = emailInput.value;
            // Простая проверка email
            if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
                status.textContent = 'Пожалуйста, введите корректный email!';
                status.style.color = 'tomato';
                return false;
            }
            status.textContent = 'Отправка...';
            status.style.color = '';
            const data = new FormData(form);
            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    status.textContent = 'Спасибо! Ваше сообщение отправлено.';
                    status.style.color = 'Dodgerblue';
                    form.reset();
                    validateFormFields(); // Снова заблокировать кнопку после отправки
                } else {
                    status.textContent = 'Ошибка отправки. Попробуйте позже.';
                    status.style.color = 'tomato';
                }
            } catch (err) {
                status.textContent = 'Ошибка сети. Попробуйте позже.';
                status.style.color = 'tomato';
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        toggleMenuMobile();
        scrollNav();
        markActiveAnchor();
        renderSkillBars();
        InputStyle();
        handleFormSubmit();
    });

})();

// Переключение темы
(function(){
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
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }
    toggleSwitch.addEventListener('change', switchTheme, false);
})();

// Модальные окна
(function(){
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
      if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
      }
    });
})();

// Прелоадер
window.addEventListener('load', function() {
  const status = document.getElementById('status');
  const preloader = document.getElementById('preloader');
  if (status) status.style.transition = 'opacity 0.5s';
  if (preloader) preloader.style.transition = 'opacity 0.5s';
  if (status) status.style.opacity = 0;
  setTimeout(() => {
    if (status) status.style.display = 'none';
    if (preloader) preloader.style.opacity = 0;
    setTimeout(() => {
      if (preloader) preloader.style.display = 'none';
      document.body.style.overflow = 'visible';
    }, 350);
  }, 350);
});

// Случайная смена логотипа
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
  if (imgTag) imgTag.innerHTML = rndImg;
}
document.addEventListener('DOMContentLoaded', randomImg);

// --- Смена слоя карты при смене темы ---
(function(){
    const iframe = document.querySelector('iframe[src*="openstreetmap.org/export/embed.html"]');
    if (!iframe) return;
    iframe.id = 'osm-map';
    // Ссылки для светлой и тёмной темы
    const lightSrc = 'https://www.openstreetmap.org/export/embed.html?bbox=69.2700%2C41.2000%2C69.3900%2C41.2600&layer=mapnik&marker=41.2325%2C69.3340';
    const darkSrc = 'https://www.openstreetmap.org/export/embed.html?bbox=69.2700%2C41.2000%2C69.3900%2C41.2600&layer=hot&marker=41.2325%2C69.3340';
    function setMapSkinByTheme() {
        const theme = document.documentElement.getAttribute('data-theme') || 'light';
        iframe.src = (theme === 'dark') ? darkSrc : lightSrc;
    }
    // При загрузке страницы
    setMapSkinByTheme();
    // При любом изменении атрибута темы
    const observer = new MutationObserver(setMapSkinByTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
})();

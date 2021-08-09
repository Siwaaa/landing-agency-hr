// Scroll to #
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth'
    });
  });
} // Animation


const e = document.querySelectorAll("[data-animate-on-scroll]");
const t = new IntersectionObserver(e => {
  e.forEach(e => {
    e.isIntersecting && e.target.setAttribute("data-animate-on-scroll", "animated");
  });
}, {
  threshold: 0.25
});
e.forEach(e => {
  t.observe(e);
}); // BURGER OM-NOM-NOM

const burgerBtn = document.querySelector('#burger');
const navbarMenu = document.querySelector('.navbar__menu');
const menuContent = document.querySelector('.menu');
burgerBtn.addEventListener('change', function () {
  if (this.checked) {
    navbarMenu.style.height = '292px';
    menuContent.classList.add('active');
  } else {
    navbarMenu.style.height = '0';
    menuContent.classList.remove('active');
  }
}); // QUIZ

const quizPage = document.querySelectorAll('.quiz__qu'),
      btnQuizBack = document.querySelectorAll('.btn-cancel'),
      timerText = document.querySelector('.timer__qu'),
      timeline = document.querySelector('.timeline-loading'),
      dataForm = {
  'i1': null,
  'i2': null,
  'i3': null,
  'i4': null,
  'name': null,
  'company': null,
  'tel': null
};
quizPage.forEach(el => {
  el.addEventListener('submit', e => {
    e.preventDefault();
    let num = Number(el.dataset.quizPage);
    const data = new FormData(el);

    for (const [name, value] of data) {
      console.log(name, value);
      dataForm[name] = value;
    }

    if (el.dataset.quizPage != 5) {
      el.style.display = "none";
      el.nextSibling.style.display = "block";
      timeline.style.width = timeline.clientWidth + 60 + 'px';
    } else {
      window.location.href = "https://belovamore.ru/";
    }

    timerText.innerHTML = `Вопросы ${++num} из 5`;
  });
});
btnQuizBack.forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const currentPage = el.parentElement.parentElement;
    currentPage.style.display = "none";
    currentPage.previousSibling.style.display = "block";
    let num = Number(currentPage.dataset.quizPage);
    timerText.innerHTML = `Вопросы ${--num} из 5`;
    timeline.style.width = timeline.clientWidth - 60 + 'px';
  });
}); // MODAL

const modal = document.getElementById("modal-1");
const btn = document.querySelectorAll(".btn-to-form");
btn.forEach(el => {
  el.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
  });
});

window.onclick = function (event) {
  switch (event.target) {
    case modal:
      modal.style.display = "none";
      document.body.style.overflow = "visible";
      break;

    default:
      break;
  }
}; // FORM


const sentToServer = dataForm => {
  const url = 'https://script.google.com/macros/s/AKfycbwgLzEDH0cyt-knUGxw_6w456O9RPEcLlomBxv0nFU1WuSdn1lo1e5zUicmhcp5C_J6oA/exec?';
  fetch(url + new URLSearchParams(dataForm), {
    method: 'GET',
    mode: 'no-cors'
  }).then(() => {
    switch (dataForm.type) {
      case "Форма: перезвонить":
        window.location.href = "https://belovamore.ru/thanks.html";
        break;

      case "Форма: покупка":
        window.location.href = "https://belovamore.ru/payments-full.php";
        break;

      case "Форма: бронь":
        window.location.href = "https://belovamore.ru/payments.php";
        break;

      default:
        break;
    }
  }).catch(() => {
    alert('Данные не отправлены на сервер');
  });
};

const forms = document.querySelectorAll('form:not(.quiz__qu)');
console.log(forms);
forms.forEach(el => {
  el.addEventListener('submit', e => {
    e.preventDefault();
    const data = {};
    new FormData(el).forEach((value, name) => {
      data[name] = value;
      console.log(name, value);
    }); // sentToServer(data)

    console.log(data);
  });
});
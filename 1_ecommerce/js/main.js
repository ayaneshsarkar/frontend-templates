// MENU SHOW
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if(toggle &&  nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
}

showMenu('nav-toggle', 'nav-menu');

// REMOVE MENU
const navLink = document.querySelectorAll('.nav__link');
const navMenu = document.getElementById('nav-menu');

const linkaction = () => {
  navMenu.classList.remove('show');
}

navLink.forEach(link => link.addEventListener('click', linkaction));

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;

    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= screenTop + sectionHeight) {
      // document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
      // console.log(document.querySelector('.nav__menu a[href*=' + sectionId + ']'));
    } else {
      // document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
    }

  });
};

window.addEventListener('scroll', scrollActive);

// Change Color Header
window.onscroll = () => {
  const nav = document.getElementById('header');

  if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}

const date = new Date();

const footerContent = document.querySelector('.footer__copy');
footerContent.textContent = "© " + date.getFullYear() + " Heisenberg. All Rights Reserved.";
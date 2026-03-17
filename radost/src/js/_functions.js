// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";
console.log(mobileCheck());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
//  import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
//     const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     loop: true,
//     //Указывается значения для самого малого разрешения

//     slidesPerView: 1,
//     spaceBetween: 20,
//     // Навигация
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // Пагинация
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },

//     breakpoints: {
//     // when window width is >= 320px
//     576: {
//         slidesPerView: 1,
//         spaceBetween: 20
//     },
//     // when window width is >= 480px
//     768: {
//         slidesPerView: 2,
//         spaceBetween: 30
//     },
//     // when window width is >= 640px УКАЗЫВАЕТСЯ КОЛ-ВО СЛАЙДОВ ДЛЯ ЗНАЧЕНИЙ БОЛЬШЕ 640px
//     1025: {
//         slidesPerView: 3,
//         spaceBetween: 40
//     },
//     // when window width is >= 640px
//     1440: {
//         slidesPerView: 3,
//         spaceBetween: 100
//     },
//     },

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение увеличения при клике lightbox
// import fslightbox from "fslightbox";

// Инициализация accordion
// import Accordion from 'accordion-js';
// new Accordion('.accordion');

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

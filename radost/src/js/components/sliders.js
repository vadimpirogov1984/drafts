import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

// Функция для получения конфига по классам
function getSwiperConfig(element) {
  const baseConfig = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 3000,
    dynamicBullets: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  // Определяем конфиг на основе классов
  if (element.classList.contains("feel-more__swiper")) {
    return {
      ...baseConfig,
      loop: true,
      autoplay: { delay: 5000 },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2.25,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        1025: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    };
  }

  if (element.classList.contains("world__swiper")) {
    return {
      ...baseConfig,
      autoplay: false,
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        1025: {
          slidesPerView: 2.25,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        1440: {
          slidesPerView: 2.25,
          spaceBetween: 40,
        },
      },
    };
  }
  if (element.classList.contains("torts-fillings__swiper")) {
    return {
      ...baseConfig,
      centeredSlides: true,
      autoplay: { pauseOnMouseEnter: true, delay: 3000 },
      breakpoints: {
        1024: {
          slidesPerView: 2.2,
          spaceBetween: 0,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };
  }
  // Для всех остальных - базовый конфиг
  return baseConfig;
}

document.addEventListener("DOMContentLoaded", () => {
  // Инициализация всех слайдеров
  const swipers = Array.from(document.querySelectorAll(".swiper")).map(
    (element, index) => {
      // Создаем слайдер
      const swiper = new Swiper(element, getSwiperConfig(element));

      // Настраиваем Observer для автоплея
      if (swiper.autoplay) {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              swiper.autoplay.start();
            } else {
              swiper.autoplay.stop();
            }
          },
          { threshold: 0.1 },
        );
        observer.observe(element);
      }

      return swiper;
    },
  );
});

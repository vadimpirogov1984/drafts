// Функция загрузки reCAPTCHA
function loadRecaptcha() {
  if (document.querySelector('script[src*="recaptcha"]')) {
    console.log("reCAPTCHA уже загружена");
    initRecaptcha();
    return;
  }
 console.log("Загружаем reCAPTCHA...");
  const script = document.createElement("script");
  script.src =
    "https://www.google.com/recaptcha/api.js?render=6LcNyIUsAAAAAEfog5-LdKZ-Q5rIazaUhrXGi-5F";
  script.async = true;
  script.defer = true;

  script.onload = () => {
    initRecaptcha();
  };

  script.onerror = () => {
    console.error("Ошибка загрузки reCAPTCHA");
  };

  document.head.appendChild(script);
}

function initRecaptcha() {
  if (typeof grecaptcha === "undefined") return;
  grecaptcha.ready(() => {
    updateAllRecaptchaTokens();
    setInterval(updateAllRecaptchaTokens, 115000);
  });
}

function updateAllRecaptchaTokens() {
  const forms = document.querySelectorAll(".form");
  forms.forEach((form) => {
    const recaptchaInput = form.querySelector(
      'input[name="recaptchaResponse"]',
    );
    if (recaptchaInput && typeof grecaptcha !== "undefined") {
      grecaptcha.ready(() => {
        grecaptcha
          .execute("6LcNyIUsAAAAAEfog5-LdKZ-Q5rIazaUhrXGi-5F", {
            action: "contact",
          })
          .then((token) => {
            recaptchaInput.value = token;
          })
          .catch(console.error);
      });
    }
  });
}

// Загружаем reCAPTCHA при открытии попапа (если он есть на странице)
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".sign-up__popup");
  if (!popup) return; // если попапа нет на странице, ничего не делаем

  // Функция, которая будет вызвана при открытии попапа
  const onPopupOpen = () => {
    loadRecaptcha();
    // удаляем обработчик, чтобы не грузить повторно
    popup.removeEventListener("click", onPopupOpen); // осторожно: клик может быть не только открытие
    // Лучше повесить на кнопку открытия, но если не знаем, можно так
  };

  // Если попап уже открыт при загрузке (например, с классом open)
  if (popup.classList.contains("open")) {
    loadRecaptcha();
  } else {
    // Следим за изменением класса (например, MutationObserver)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          if (popup.classList.contains("open")) {
            loadRecaptcha();
            observer.disconnect();
            console.log("загружена");
          }
        }
      });
    });
    observer.observe(popup, { attributes: true });
  }
});

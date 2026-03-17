// Функция загрузки reCAPTCHA
function loadRecaptcha() {
  if (document.querySelector('script[src*="recaptcha"]')) {
    console.log("reCAPTCHA уже загружена");
    initRecaptcha();
    return;
  }
  console.log("Загружаем reCAPTCHA...");
  const script = document.createElement("script");
  script.src = "https://www.google.com/recaptcha/api.js?render=";
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
    // Добавляем обработчики отправки форм
    attachSubmitHandlers();
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
          .execute("", {
            action: "contact", // есть еще вариант submit
          })
          .then((token) => {
            recaptchaInput.value = token;
          })
          .catch(console.error);
      });
    }
  });
}

// Новая функция: обработка отправки форм
function attachSubmitHandlers() {
  const forms = document.querySelectorAll(".form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Останавливаем стандартную отправку

      const recaptchaInput = this.querySelector(
        'input[name="recaptchaResponse"]',
      );
      if (!recaptchaInput) {
        console.error("Нет поля recaptchaResponse, отправляем без токена");
        this.submit(); // отправляем как есть
        return;
      }

      // Получаем свежий токен с action "submit"
      grecaptcha.ready(() => {
        grecaptcha
          .execute("", {
            action: "submit",
          })
          .then((token) => {
            recaptchaInput.value = token;
            // Отправляем форму нативно (не вызовет повторный обработчик)
            this.submit();
          })
          .catch((error) => {
            console.error("Ошибка получения токена:", error);
            alert(
              "Не удалось выполнить проверку безопасности. Пожалуйста, попробуйте ещё раз.",
            );
            // В случае ошибки отправляем с предыдущим токеном (или без)
            // this.submit(); Закоментировал 13.03
          });
      });
    });
  });
}

// Загружаем reCAPTCHA при открытии попапа (как у вас было)
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".sign-up__popup");
  if (!popup) return;

  // Если попап уже открыт при загрузке
  if (popup.classList.contains("open")) {
    loadRecaptcha();
  } else {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          if (popup.classList.contains("open")) {
            loadRecaptcha();
            observer.disconnect();
            console.log("reCAPTCHA загружена при открытии попапа");
          }
        }
      });
    });
    observer.observe(popup, { attributes: true });
  }
});

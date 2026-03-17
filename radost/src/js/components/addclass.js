// Получаем текущий URL страницы
const currentPage = window.location.pathname.split("/").pop() || "index.html";

// Находим все ссылки в header__list
const headerLinks = document.querySelectorAll(".header__list-link");

// Перебираем ссылки
headerLinks.forEach((link) => {
  // Получаем href ссылки и извлекаем имя файла
  const linkHref = link.getAttribute("href");
  const linkPage = linkHref.split("/").pop();

  // Сравниваем с текущей страницей
  if (linkPage === currentPage) {
    link.classList.add("header-active");
  }

  // Особая обработка для главной страницы (index.html)
  if (
    currentPage === "index.html" &&
    (linkPage === "index.html" ||
      linkPage === "" ||
      linkHref === "/" ||
      linkHref === "#")
  ) {
    link.classList.add("header-active");
  }
});

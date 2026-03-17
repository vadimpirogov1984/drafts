// Вешаем обработчик на все кнопки "Заказать"
document.querySelectorAll(".popup-link").forEach((btn) => {
  btn.addEventListener("click", function () {
    // 1. Находим родительскую карточку (поднимаемся по DOM)
    const card = this.closest(".catalog-card");
    if(card) {
    // 2. Забираем данные прямо из верстки
    const productName = card.querySelector(
      ".catalog-card__top-title",
    ).textContent;
    const productPrice = card.querySelector(
      ".catalog-card__bottom-price",
    ).textContent;

    // 3. Заполняем попап этими данными
    document.getElementById("popup-product-name").textContent = productName;
    document.getElementById("popup-product-price").textContent = productPrice;

    console.log(productName, productPrice);
    }
  });
});

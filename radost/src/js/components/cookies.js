
// Баннер
document.addEventListener("DOMContentLoaded", function () {
  const cookiesBanner = document.getElementById("cookiesBanner");
  const acceptCookies = document.getElementById("acceptCookies");

  // Если баннера нет на странице - ничего не делаем
  if (!cookiesBanner || !acceptCookies) return;
  if (!localStorage.getItem("cookiesAccepted")) {
    cookiesBanner.style.display = "block";
  } else {
    cookiesBanner.style.display = "none";
  }
  acceptCookies.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookiesBanner.style.display = "none";
  });
});
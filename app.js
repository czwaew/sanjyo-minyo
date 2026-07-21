const menuButton = document.getElementById("menuButton");
const globalNav = document.getElementById("globalNav");
const contactForm = document.getElementById("contactForm");

menuButton.addEventListener("click", () => {
  const isOpen = globalNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});

globalNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    globalNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // 実際に使用するメールアドレスへ変更してください。
  const destination = "example@example.com";
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const category = document.getElementById("category").value;
  const message = document.getElementById("message").value.trim();

  const subject = `【三条民謡保存会】${category}`;
  const body = [
    `お名前：${name}`,
    `メールアドレス：${email}`,
    `お問い合わせ項目：${category}`,
    "",
    "お問い合わせ内容：",
    message
  ].join("\n");

  location.href = `mailto:${destination}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch((error) => {
      console.log("Service Worker registration failed:", error);
    });
  });
}

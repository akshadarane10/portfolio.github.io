document.addEventListener("DOMContentLoaded", function () {
  // Project category filters
  const filterButtons = document.querySelectorAll(".filter-button");
  const projectCards = document.querySelectorAll(".project-card");
  const noProjects = document.getElementById("no-projects");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const filter = button.dataset.filter;
      let visibleCount = 0;

      filterButtons.forEach(function (item) {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", active ? "true" : "false");
      });

      projectCards.forEach(function (card) {
        const show = filter === "all" || card.dataset.category === filter;
        card.hidden = !show;
        if (show) visibleCount += 1;
      });

      if (noProjects) noProjects.hidden = visibleCount > 0;
    });
  });

  // GitHub Pages is static: prepare a message in the visitor's email application.
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !message) return;

      const subject = encodeURIComponent("Portfolio message from " + name);
      const body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\n\n" + message
      );
      const status = document.getElementById("contact-status");
      if (status) status.textContent = "Opening your email application…";
      window.location.href = "mailto:akshadarane10@gmail.com?subject=" + subject + "&body=" + body;
    });
  }

  // Keep the footer year current.
  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();
});

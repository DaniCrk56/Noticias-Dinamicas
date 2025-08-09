document.addEventListener("DOMContentLoaded", function () {
  const newsContainer = document.getElementById("news-container");

  fetch("news.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(noticia => {
        const card = document.createElement("div");
        card.classList.add("card", "mb-3");
        card.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${noticia.titulo}</h5>
            <p class="card-text"><small class="text-muted">Publicado el ${noticia.fecha}</small></p>
          </div>
        `;
        newsContainer.appendChild(card);
      });
    });

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("message").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un correo válido.");
      return;
    }

    alert("¡Mensaje enviado correctamente!");
    this.reset();
  });
});
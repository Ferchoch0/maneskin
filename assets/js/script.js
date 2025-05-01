// Cambiar el color del cursor al pasar por encima de los enlaces

const cursor = document.createElement("div");
cursor.id = "maneskin-cursor";
document.body.appendChild(cursor);

window.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

//mantener activa la sección del menú al hacer scroll

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav-list a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

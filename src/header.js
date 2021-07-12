import { makeElement } from "./make-items";

const content = document.getElementById("content");

const makeNavbar = () => {
  const navBar = makeElement({ type: "ul", id: "navbar", className: "navbar" });
  content.appendChild(navBar.element);

  const hamburgerLink = makeElement({ type: "a", href: "#" });
  hamburgerLink.element.addEventListener("click", () => {
    document.getElementById("sidenav").classList.toggle("sidenav--active");
    if (
      document.getElementById("sidenav").classList.contains("widenav--active")
    ) {
      // nothing required
    }
  });
  navBar.element.appendChild(hamburgerLink.element);

  const hamburger = makeElement({
    type: "i",
    id: "hamburger",
    className: "fal fa-bars",
  });
  hamburgerLink.element.appendChild(hamburger.element);

  const navLogo = makeElement({
    type: "i",
    id: "navLogo",
    className: "far fa-check-square",
  });
  navBar.element.appendChild(navLogo.element);

  const navItems = makeElement({ type: "li", id: "nav", className: "nav" });
  navItems.element.innerHTML = "To-Do List";
  navBar.element.appendChild(navItems.element);

  const taskLink = makeElement({ type: "a", href: "#" });
  navBar.element.appendChild(taskLink.element);
};

export { makeNavbar, content };

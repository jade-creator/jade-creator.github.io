// custom cursor

const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll(".link-effect");
const images = document.querySelectorAll(".project-image");
const turbulence = document.querySelector("feTurbulence");
const circle = document.querySelector(".cursor-circle");
const durationTime = 0.4;

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

document.addEventListener("mouseover", (e) => {
  if (!e.target.matches(".link-effect")) return;
  gsap.to(turbulence, {
    duration: durationTime,
    startAt: { attr: { baseFrequency: 0.05 } },
    attr: { baseFrequency: 0 },
  });

  gsap.to(circle, {
    duration: durationTime,
    startAt: { attr: { r: 67 } },
    attr: { r: 50 },
  });
});

document.addEventListener("mouseout", (e) => {
  if (!e.target.matches(".link-effect")) return;
  gsap.to(circle, {
    duration: durationTime,
    startAt: { attr: { r: 50 } },
    attr: { r: 67 },
  });
});

document.addEventListener("mouseover", (e) => {
  if (!e.target.matches(".project-image")) return;

  cursor.style.fill = "#feead8";
});

document.addEventListener("mouseout", (e) => {
  if (!e.target.matches(".project-image")) return;

  cursor.style.fill = "none";
});


// navbar

function checkIfElementTopTouchedViewPort(elem) {
  let scrollY = window.scrollY;
  const elemTop = elem.offsetTop;

  if (scrollY >= elemTop) return true;

  return false;
}

function highlight(touchedElem, highlightedElem, className = "highlight") {
  if (checkIfElementTopTouchedViewPort(touchedElem))
    return highlightedElem.classList.add(className);

  return highlightedElem.classList.remove(className);
}

window.addEventListener("scroll", () => {
  // logo
  highlight(
    document.getElementById("about"),
    document.getElementById("logo-link")
  );

  // project background
  highlight(
    document.querySelector(".second-paragraph"),
    document.querySelector(".projects"),
    "highlight-projects"
  );
});

// custom marquee jsmarquee

const m = new Marquee({
  element: "#marquee-demo",
  velocity: 2.5,
});

m.run();

// project nav bar

const projectNavLinks = document.querySelectorAll(".project-nav-link");
const projectNavLinkIcons = document.querySelectorAll(".icon-tabler-arrow-narrow-right");
const projects = document.querySelectorAll(".project-grid");

projectNavLinks.forEach((item, index) => {

  item.addEventListener("click", () => {
    projectNavLinks.forEach(element => {
      element.classList.toggle("highlight");
    });

    projectNavLinkIcons.forEach(element => {
      element.style.width = "0px";
    });

    projectNavLinkIcons[index].style.width = "24px";

    projects.forEach(element => {
      setTimeout(function () {
        element.classList.toggle("hidden");
      }, 500);
    });
  });
});

(function () {
  function animateMe(e) {
    const span = this;
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this;

    move = 20;
    xMove = x / width * (move * 5) - move;
    yMove = y / height * (move * 5) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') span.style.transform = '';
  };

  const links = document.querySelectorAll('.hover-me');

  links.forEach(link => link.addEventListener('mousemove', animateMe));
  links.forEach(link => link.addEventListener('mouseleave', animateMe));
})();

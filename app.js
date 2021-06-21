const sections = document.querySelectorAll("section");
const trans = document.querySelector(".trans");
const gradients = ["coral", "chartreuse", "chocolate", "cadetblue"];
const mouseCursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li")

const options = {
    threshold: 0.7,
};
let observer = new IntersectionObserver(navScroll, options);

function navScroll(entries) {
    entries.forEach(function(entry) {
        console.log(entry);
        const className = entry.target.className;
        const activeLink = document.querySelector(`[data-page="${className}"]`);
        const elementIndex = entry.target.getAttribute("data-index");
        const coordinates = activeLink.getBoundingClientRect();
        const directions = {
            height: coordinates.height,
            width: coordinates.width,
            top: coordinates.top,
            left: coordinates.left,
        };

        if (entry.isIntersecting) {
            trans.style.setProperty("height", `${directions.height}px`);
            trans.style.setProperty("width", `${directions.width}px`);
            trans.style.setProperty("top", `${directions.top}px`);
            trans.style.setProperty("left", `${directions.left}px`);
            trans.style.backgroundColor = gradients[elementIndex];
        }
    });
}

sections.forEach(function(section) {
    observer.observe(section);
})

const scroll = new SmoothScroll('.navbar a[href*="#"]', {speed: 800, });

window.addEventListener("mousemove", cursor);
window.addEventListener("pageshow", cursor);
window.addEventListener("", cursor);


//add cursor stylization
function cursor(e) {
    console.log(e);
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach(function(link) {
    link.addEventListener("mouseout", function() {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    });

    link.addEventListener("mouseover", function() {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    })
});
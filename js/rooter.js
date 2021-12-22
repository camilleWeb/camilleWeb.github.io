const routes = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState(
        {},
        "",
        event.target.href
    );
    handleLocation();
};
const roots = {
    404:"/404/404.html",
    "/": "/pages/index.html",
    "/about":"/pages/about.html",
    "/projet":"/pages/projet.html",
    "/contact":"/pages/contact.html",

};

const handleLocation = async () => {
    const path = window.location.pathname;
    const routes = roots[path] || roots[404];
    const html = await fetch(routes).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};
window.onpopstate = handleLocation;
window.routes = routes;
handleLocation();
function showNavbar(page) {
    var links = {
        home: "",
        research: "",
        people: "",
        publications: "",
        projects: "",
        teaching: "",
        news: "",
        openings: ""
    };
    links[page] = 'id="current"';

    var nav = document.getElementById("mi-navbar");
    nav.classList.add("navbar", "fixed-top", "navbar-expand-lg");
    nav.innerHTML =
        '<a class="navbar-brand" href="index.html">' +
            '<img src="images/navbar/paia-logo.png" alt="PAIA Lab">' +
        "</a>" +
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">' +
            '<span class="menu-bars" aria-hidden="true"></span>' +
        "</button>" +
        '<div class="collapse navbar-collapse" id="navbarText">' +
            '<ul class="navbar-nav ml-auto">' +
                '<li class="nav-item"><a ' + links.home + ' class="nav-link" href="index.html">Home</a></li>' +
                '<li class="nav-item"><a ' + links.research + ' class="nav-link" href="research.html">Research</a></li>' +
                '<li class="nav-item"><a ' + links.people + ' class="nav-link" href="people.html">People</a></li>' +
                '<li class="nav-item"><a ' + links.publications + ' class="nav-link" href="publications.html">Publications</a></li>' +
                '<li class="nav-item"><a ' + links.projects + ' class="nav-link" href="projects.html">Projects</a></li>' +
                '<li class="nav-item"><a ' + links.teaching + ' class="nav-link" href="teaching.html">Teaching</a></li>' +
                '<li class="nav-item"><a ' + links.news + ' class="nav-link" href="news.html">News</a></li>' +
                '<li class="nav-item"><a ' + links.openings + ' class="nav-link" href="openings.html">Openings</a></li>' +
            "</ul>" +
        "</div>";
}

function showFooter() {
    var host = document.getElementById("site-footer");
    if (!host) {
        return;
    }

    fetch("footer.html")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Could not load footer");
            }
            return response.text();
        })
        .then(function (html) {
            host.innerHTML = html;
        })
        .catch(function () {
            host.innerHTML =
                '<footer class="site-footer"><p>PAIA Lab · University of Texas Rio Grande Valley</p></footer>';
        });
}

window.onload = function() {
    showStoredData();
}

sites = [
    {
        id: 1,
        title: "Google",
        url: "http://www.google.com",
        visits: []
    }, {
        id: 2,
        title: "G1",
        url: "http://www.g1.com.br",
        visits: []
    }, {
        id: 3,
        title: "DW",
        url: "http://www.dw.com",
        visits: []
    }];


function showStoredData() {
    let ul = document.getElementById("urls");
    ul.innerHTML = "";

    for (let i = 0; i < sites.length; i++) {

        let li = createListElement(sites[i]);

        ul.appendChild(li);
    }
}


function createListElement(site) {
    let li = document.createElement("li");
    let lastVisit = getLastVisit(site);
    let html = "";

    html = `<a href=${site.url} target=blank>${site.title}</a>`

    if (lastVisit) {
        html += `| ${lastVisit.toLocaleDateString("pt-br")}`;
    } else {
        html += `| Never visited`;
    }

    li.innerHTML = html;

    let visitTodayButton = document.createElement("button");
    visitTodayButton.onclick = function() {

        visitSite(site);
        
        showStoredData();
    }
    let visitTodayIcon = document.createElement("i");
    visitTodayIcon.className = "fa fa-calendar-check-o";
    visitTodayButton.appendChild(visitTodayIcon);

    li.appendChild(visitTodayButton);

    let deleteButton = document.createElement("button");
    deleteButton.onclick = function() {
        deleteSite(site.id);

        showStoredData();
    }
    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fa fa-trash-o";
    deleteButton.appendChild(deleteIcon);

    li.appendChild(deleteButton);

    return li;
}


function addSite() {}


function deleteSite(id) {
    
    for (let i = 0; i < sites.length; i++) {
        if (sites[i].id != id) continue;

        sites.splice(i, 1);
    }
}


function visitSite(site) {

    if (site.visits.includes(new Date())) return;

    if (site.visits.length >= 5) site.visits.shift();

    site.visits.push(new Date());
}


function getLastVisit(site) {

    let size = site.visits.length;

    if (size == 0) return false;

    return site.visits[size - 1];
}
window.onload = function() {
    showStoredData();
}


sites = [
    {
        id: 1,
        title: "Google",
        url: "http://www.google.com",
        lastVisit: new Date()
    }, {
        id: 2,
        title: "G1",
        url: "http://www.g1.com.br",
        lastVisit: new Date()
    }, {
        id: 3,
        title: "DW",
        url: "http://www.dw.com",
        lastVisit: new Date()
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
    
    li.innerHTML = `<a href=${site.url} target=blank>${site.title}</a> | ${site.lastVisit.toLocaleDateString("pt-br")}`;

    return li;
}

function addSite() {}

function deleteSite() {}

function updateSite() {}
window.onload = function() {
    showStoredData();
}

sites = [
    {
        id: 1,
        title: "Google",
        url: "http://www.google.com",
        lastVisit: new Date("05/05/2005")
    }, {
        id: 2,
        title: "G1",
        url: "http://www.g1.com.br",
        lastVisit: new Date("10/10/2010")
    }, {
        id: 3,
        title: "DW",
        url: "http://www.dw.com",
        lastVisit: new Date("12/12/2012")
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

    // TODO metodo visitar: se nao tiver hj na pilha, adiciona
    let todayButton = document.createElement("button");
    todayButton.innerText = "Today";
    todayButton.onclick = function() {
        site.lastVisit = new Date();
        
        showStoredData();
    }
    li.appendChild(todayButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        deleteSite(site.id);

        showStoredData();
    }
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
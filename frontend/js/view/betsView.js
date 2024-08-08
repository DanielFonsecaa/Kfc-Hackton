import router from "../router.js";
import routes from "../routes.js";



export let pathIdentifier = 0;

function filterByType(data, type) {
    return data.filter(athlete =>
        athlete.competitions.some(competition => competition.type === type))
}

function render(athletes) {

    const athletismCompetitions = filterByType(athletes, 'run');
    const typesAthletics = [{
        id: 1,
        modality: "100m",
        gender: "Masculine"
    },
    {
        id: 2,
        modality: "200m",
        gender: "Masculine"
    },
    {
        id: 3,
        modality: "100m",
        gender: "Feminine"
    },
    {
        id: 4,
        modality: "200m",
        gender: "Feminine"
    },];

    const swimCompetitions = filterByType(athletes, 'swim');

    console.log(athletismCompetitions);
    console.log(swimCompetitions);
    const container = document.querySelector("#container");
    container.innerHTML = '<br>'; //removes the previous elements

    const nav = document.createElement('nav');
    nav.innerHTML = `<div class="container-fluid">

    <a class="navbar-brand" href="/" id="anchor"> <i class="fa-solid fa-arrow-left"></i> Go Back</a>
    </div>`;

    nav.classList = "navbar sticky-top navbar-expand-lg bg-body-tertiary";
    container.prepend(nav);

    const list = document.createElement('div');
    list.className = `text-center`;
    const atletismTitle = document.createElement('div');
    atletismTitle.innerHTML = "<h2>ATHLETICS</h2>";
    atletismTitle.className = "olympicContainer"
    const miniContainer = document.createElement('div');
    miniContainer.id = "miniContainer";


    typesAthletics.forEach((type) => {


        const item = document.createElement('div');
        item.id = "card";
        item.style.fontSize = "x-small";
        item.style = "margin: 1%;";
        item.innerHTML = ` <div class="card text-bg-dark mb-3" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">Athletics</h5>
                                    <p class="card-text">${type.modality} ${type.gender}</p>
                                    <button id="id-${type.id}" class="btn btn-primary betAnchor">Bet on me</button> 
                                </div>
                            </div>
                        <br/>`;
        miniContainer.appendChild(item);
    });
    atletismTitle.appendChild(miniContainer);
    list.appendChild(atletismTitle);

    const list2 = document.createElement('div');
    list2.className = `text-center`;

    const swimTitle = document.createElement('div');
    swimTitle.innerHTML = "<h2>SWIMMING</h2>";

    const otherContainer = document.createElement('div');
    otherContainer.id = "miniContainer";

    const typesSwim = [{
        id: 5,
        modality: "100m freestyle",
        gender: "Masculine"
    },
    {
        id: 6,
        modality: "200m freestyle",
        gender: "Masculine"
    },
    {
        id: 7,
        modality: "100m freestyle",
        gender: "Feminine"
    },
    {
        id: 8,
        modality: "200m freestyle",
        gender: "Feminine"
    },];


    typesSwim.forEach((type) => {

        const item = document.createElement('div');
        item.style.fontSize = "x-small";
        item.id = "card";
        item.style = "margin: 1%;";
        item.innerHTML = ` <div class="card text-bg-dark mb-3" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">Swimming</h5>
                                    <p class="card-text">${type.modality} ${type.gender}</p>
                                    <button id="id-${type.id}" class="btn btn-primary betAnchor">Bet on me</button> 
                                </div>
                                </div>
                            </div>
                        <br/>`;

        otherContainer.appendChild(item);
    });
    swimTitle.appendChild(otherContainer);
    list2.appendChild(swimTitle);

    container.appendChild(list);
    container.appendChild(list2);

    /* 
<!--button id="info-${id}" class="btn btn-primary betButton">Bet on it</button-->
    ---- only if we have a lot of sports ----

    const buttonDiv = document.createElement('div');
    buttonDiv.style = "display: flex; width: 100%; justify-content: center;";
    const button = document.createElement('button');
    button.className = "btn btn-danger";
    button.innerHTML = "Load more";
    buttonDiv.appendChild(button);
    container.appendChild(buttonDiv);
    button.onclick = onClick;
    */

    const betAnchor = document.getElementsByClassName(`betAnchor`); // Get specific button
    [...betAnchor].forEach(elem => {
        elem.addEventListener('click', (e) => {

            const target = e.target;
            if (target.classList.contains('betAnchor')) {
                const idMatch = target.id.match(/id-(\d+)/);
                if (idMatch) {
                    const id = idMatch[1];
                    pathIdentifier = "id" + id;

                    //console.log("just add this id", singleId)
                    //const dinamicPath = routes.singleBet.path;
                    router.navigate(routes[pathIdentifier].path);
                }
            }
        })
    })

};



export default { render };
import router from "../router.js";
import routes from "../routes.js";



export let singleId = 0;

function filterByType(data, type) {
    return data.competitions.filter(competition => competition.type === type);
}

function render(athlete) {

    // Example usage:
    const athletimsCompetitions = filterByType(athlete, 'athletims');
    const swimCompetitions = filterByType(athlete, 'swim');

    console.log(athletimsCompetitions);
    console.log(swimCompetitions);
    const container = document.querySelector("#container");
    container.innerHTML = '<br>'; //removes the previous elements

    const list = document.createElement('div');
    list.className = `text-center`;
    const atletismTitle = document.createElement('div');
    atletismTitle.innerHTML = "<h2>ATLETISM</h2>";
    atletismTitle.className = "olympicContainer"
    const miniContainer = document.createElement('div');
    miniContainer.id = "miniContainer";


    athletimsCompetitions.forEach(({ type, competitionName, id }) => {



        const item = document.createElement('div');
        item.id="card";
        item.style.fontSize = "x-small";
        item.style = "margin: 1%;";
        item.innerHTML = ` <div class="card text-bg-dark mb-3" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">${type}</h5>
                                    <p class="card-text">Distance: ${competitionName}</p>
                                    <button id="info-${id}" class="btn btn-primary betAnchor">Bet on me</button> 
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
    swimTitle.innerHTML = "<h2>SWIM</h2>";

    const otherContainer = document.createElement('div');
    otherContainer.id = "miniContainer";


    swimCompetitions.forEach(({ type, competitionName, id }) => {

        const item = document.createElement('div');
        item.style.fontSize = "x-small";
        item.id="card";
        item.style = "margin: 1%;";
        item.innerHTML = ` <div class="card text-bg-dark mb-3" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">${type}</h5>
                                    <p class="card-text">Distance: ${competitionName}</p>
                                    <button id="info-${id}" class="btn btn-primary betAnchor">Bet on me</button> 
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
                const idMatch = target.id.match(/info-(\d+)/);
                if (idMatch) {
                    const id = idMatch[1];
                    singleId = id;
                    console.log("just add this id", singleId)
                    const dinamicPath = routes.singleBet.path;
                    router.navigate(dinamicPath);
                }
            }
        })
    })

};



export default { render };
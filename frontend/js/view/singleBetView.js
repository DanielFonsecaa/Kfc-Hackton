import router from "../router.js";
import routes from "../routes.js";

function render(bets) {

    const container = document.querySelector('#container');
    const div = document.createElement('div');

    container.innerHTML = ''; //removes the previous elements
    
    console.log("bets",bets);
        const elem = document.createElement('div');
        elem.className = `text-center`;
        elem.style = "text-align: center; justify-content: center;"
        elem.innerHTML =`<div class="card text-white bg-dark mb-3" style="width: 22rem;border: 2px solid black;">
                            <h1>${bets.sport}</h1>
                            <button id="goBack" class="btn btn-primary">Go back</button>
                        </div>
                    </div>`;
                        
        if (container.childElementCount > 1) {
            container.removeChild(container.lastChild);
        }
        container.appendChild(elem);  

    container.appendChild(div);

    const goBackButton = document.getElementById(`goBack`); // Get specific button
    goBackButton.addEventListener('click', () => { 
            router.navigate(routes.bet.path);
    });
}

export default { render };
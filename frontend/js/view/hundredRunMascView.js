import { athlete } from "../mockBets.js";
import router from "../router.js";
import routes from "../routes.js";


function render(athletes) {

    console.log(athletes)
    const speeds = athletes.map(athlete => athlete.competitions)
        .map(competition => competition[0].time)


    console.log(speeds)
    for (let i = 0; i < speeds.length; i++) {
        if (speeds[i] === 'OUT') {
            speeds[i] = parseInt(speeds[6]) + 20;
        }

    }


    console.log(speeds);

    const outsideContainer = document.querySelector("#container");
    outsideContainer.innerHTML = "";

    const finalImages = [
        '../frontend/rsc/img/1st.png',
        '../frontend/rsc/img/2nd.png',
        '../frontend/rsc/img/3rd.png',
        '../frontend/rsc/img/4th.jpeg',
        '../frontend/rsc/img/5th.jpeg',
        '../frontend/rsc/img/6th.jpeg',
        '../frontend/rsc/img/7th.jpeg',
        '../frontend/rsc/img/8th.jpeg',
    ];

    const placeholderImages = [
        '../frontend/rsc/img/ato.png',
        '../frontend/rsc/img/davidson.png',
        '../frontend/rsc/img/dennis.png',
        '../frontend/rsc/img/donnovan.png',
        '../frontend/rsc/img/frankie.png',
        '../frontend/rsc/img/linford.png',
        '../frontend/rsc/img/michael_green.png',
        '../frontend/rsc/img/michael.png'
    ];

    const div = document.createElement('div');
    div.classList = "game-container";
    outsideContainer.appendChild(div);


    // Create and add heading
    const heading = document.createElement('div');
    heading.id = 'heading';
    heading.innerHTML = '<h1>100 Meters Sprint Relay Men</h1>';
    div.appendChild(heading);

    // Create and add credits display
    const creditsDisplay = document.createElement('div');
    creditsDisplay.id = 'credits-display';
    creditsDisplay.innerHTML = 'Credits: <span id="credits">100</span>';
    div.appendChild(creditsDisplay);

    // Create and add message display
    const messageDisplay = document.createElement('div');
    messageDisplay.id = 'message';
    div.appendChild(messageDisplay);

    // Create and add boxes and containers
    for (let i = 1; i <= 8; i++) {
        const divSize = document.createElement('div');
        divSize.className = 'div-size';

        
        const container = document.createElement('div');
        container.id = 'containerFilipe';

        const box = document.createElement('div');
        box.className = 'box';
        box.dataset.runnerId = i;

        const img = document.createElement('img');
        img.src = '../frontend/rsc/img/test.webp';
        img.alt = 'moving image';
        box.appendChild(img);

        container.appendChild(box);
        divSize.appendChild(container);

        const positionImg = document.createElement('img');
        positionImg.className = 'position';
        positionImg.id = `img${i}`;
        positionImg.src = placeholderImages[i - 1];
        console.log(placeholderImages[i - 1])
        positionImg.onclick = () => placeBet(i);
        divSize.appendChild(positionImg);

        div.appendChild(divSize);


    }

    // Create and add buttons
    const startButton = document.createElement('button');
    startButton.id = 'start-button';
    startButton.textContent = 'Start Race';
    div.appendChild(startButton);

    const resetButton = document.createElement('button');
    resetButton.id = 'reset-button';
    resetButton.textContent = 'Reset';
    resetButton.style.display = "none";
    div.appendChild(resetButton);

    // JavaScript logic for the race
    const boxes = document.getElementsByClassName("box");
    const containers = document.querySelectorAll("#containerFilipe");
    const creditsDisplayEl = document.getElementById("credits");
    const messageDisplayEl = document.getElementById("message");

    let ids = [];
    let finishedOrder = [];
    let selectedRunnerId = null;
    let betAmount = 0;
    const containerWidth = containers[0].offsetWidth;


    const goBackButton = document.createElement(`button`); // Get specific button
    goBackButton.className = "btn-primary";
    goBackButton.innerHTML = "Go back";
    div.appendChild(goBackButton);
    goBackButton.addEventListener('click', () => {
        router.navigate(routes.bet.path);
    });

    
    function updateCredits(amount) {
        const currentCredits = parseInt(creditsDisplayEl.textContent, 10);
        creditsDisplayEl.textContent = currentCredits + amount;
    }

    function showMessage(message) {
        messageDisplayEl.textContent = message;
    }

    function placeBet(runnerId) {
        if (selectedRunnerId !== null) {
            alert("You have already placed a bet.");
            return;
        }

        const bet = parseInt(prompt("How many credits would you like to bet?", "0"), 10);

        if (!isNaN(bet) && bet > 0 && bet <= parseInt(creditsDisplayEl.textContent, 10)) {
            selectedRunnerId = runnerId;
            betAmount = bet;
        } else {
            alert("Invalid bet amount.");
        }
    }

    function move(target, id) {
        const actualPosition = parseInt(getComputedStyle(target).left, 10);
        const targetWidth = target.offsetWidth;

        target.style.left = actualPosition + 1 + "px";

        if (actualPosition + targetWidth >= containerWidth) {
            clearInterval(id);
            const img = target.querySelector("img");
            img.style.display = 'none';
            target.style.left = (containerWidth - targetWidth) + "px";

            if (!finishedOrder.includes(target)) {
                finishedOrder.push(target);

                // Remove 'moving' class from the target
                target.classList.remove('moving');

                // Get the #position element for the current box
                const divSize = target.closest(".div-size");
                const positionElement = divSize.querySelector(".position");

                // Set the positionElement image to the final placement image
                positionElement.src = finalImages[finishedOrder.length - 1];

                if (finishedOrder.length === boxes.length) {
                    // End of race, check if the player won
                    const winnerId = parseInt(finishedOrder[0].dataset.runnerId, 10);
                    if (selectedRunnerId === winnerId) {
                        updateCredits(betAmount); // Player wins
                        showMessage(`Runner ${selectedRunnerId} wins! You won ${betAmount * 2} credits.`);
                    } else {
                        updateCredits(-betAmount); // Player loses
                        showMessage(`Runner ${selectedRunnerId} loses. You lost ${betAmount} credits.`);
                    }
                    selectedRunnerId = null; // Reset selected runner
                    betAmount = 0; // Reset bet amount
                }
            }
        }
    }

    
    startButton.addEventListener("click", () => {
        if (selectedRunnerId === null) {
            alert("Please place a bet before starting the race.");
            return;
        }
        const sound = document.createElement('audio');
        sound.src = "../frontend/rsc/laser-gun-81720.mp3";
        sound.play();
        finishedOrder = [];
        ids.forEach(clearInterval);

        // Start the animation and show the moving image for each box
        Array.from(boxes).forEach(box => {
            const img = box.querySelector("img");
            img.style.display = 'inline'; // Show the moving image
            box.style.left = '0px'; // Ensure box starts at the beginning
            box.classList.add('moving');
        });

        // Set #position images to the placeholder images
        const positions = document.querySelectorAll(".position");
        positions.forEach((img, index) => {
            img.src = placeholderImages[index];
        });


        ids = Array.from(boxes).map((box, index) =>
            setInterval(() => move(box, ids[index]), speeds[index] * Math.random() * (10.16 - 8.0) + 8.0)
        );
        startButton.style.display = "none";
        resetButton.style.display = "inline";
    });

    resetButton.addEventListener("click", () => {

        finishedOrder = [];
        ids.forEach(clearInterval);

        // Reset boxes to start position
        Array.from(boxes).forEach(box => {
            box.style.left = '0px';
            box.classList.remove('moving');

            // Hide the moving image
            const img = box.querySelector("img");
            img.style.display = 'none';
        });

        // Reset #position images to placeholders
        const positions = document.querySelectorAll(".position");
        positions.forEach((img, index) => {
            img.src = placeholderImages[index];
        });

        selectedRunnerId = null; // Reset selected runner
        betAmount = 0; // Reset bet amount
        showMessage(""); // Clear the message
        startButton.style.display = "inline";
        resetButton.style.display = "none";

        
    });


}

function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

export default { render }
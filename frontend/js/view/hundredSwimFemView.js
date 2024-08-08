import router from "../router.js";
import routes from "../routes.js";
function render (athletes){

    console.log(athletes)
    const speeds = athletes.map(athlete => athlete.competitions)
    .map(competition => competition[0].time)
    

    console.log(speeds)
    
    for (let i = 0; i < speeds.length; i++){
        if (speeds[i] === 'OUT'){
            speeds[i] = parseInt(speeds[6]) + 20;
        }
        
    }

    // Create and add all the necessary elements to the body
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
      '../frontend/rsc/img/8th.jpeg'
    ];
  
    const placeholderImages = [
      '../frontend/rsc/img/100m-swim-women/amy_van_dyken.png',
      '../frontend/rsc/img/100m-swim-women/angel_martino.png',
      '../frontend/rsc/img/100m-swim-women/franziska_van_almsick.png',
      '../frontend/rsc/img/100m-swim-women/karin_brienesse.png',
      '../frontend/rsc/img/100m-swim-women/le_jingyi.png',
      '../frontend/rsc/img/100m-swim-women/mette_jacobsen.png',
      '../frontend/rsc/img/100m-swim-women/sandra_volker.png',
      '../frontend/rsc/img/100m-swim-women/sarah_ryan.png'
    ];
 
    const div = document.createElement('div');
    div.classList = "game-container";
    outsideContainer.appendChild(div);

    // Create and add heading
    const heading = document.createElement('div');
    heading.id = 'heading';
    heading.innerHTML = '<h1>100 Meters Freestyle Women</h1>';
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
        container.id = 'containerFilipeSwim';
  
        const box = document.createElement('div');
        box.className = 'boxSwim';
        box.dataset.runnerId = i;
  
        const img = document.createElement('img');
        img.src = '../frontend/rsc/img/female-swimmer.gif';
        img.alt = 'moving image';
        box.appendChild(img);
        container.appendChild(box);
        divSize.appendChild(container);
  
        const positionImg = document.createElement('img');
        positionImg.className = 'position';
        positionImg.id = `img${i}`;
        positionImg.src = placeholderImages[i - 1];
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
    div.appendChild(resetButton);
    resetButton.style.display = "none";

  
    // JavaScript logic for the race
    const boxes = document.getElementsByClassName("boxSwim");
    const containers = document.querySelectorAll("#containerFilipeSwim");
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
        const targetWidth = target.offsetWidth;
        let currentPosition = parseInt(getComputedStyle(target).left, 10);
        let direction = target.dataset.direction || 'right';

  
        if (direction === 'right') {
            target.style.left = currentPosition + 1 + "px";
            if (currentPosition + targetWidth >= containerWidth) {
                target.dataset.direction = 'left';
                // Change image when returning
                const img = target.querySelector("img");
                img.src = '../frontend/rsc/img/female-swimmer-rotate.gif';
            }
        } else {
            target.style.left = currentPosition - 1 + "px";
            if (currentPosition <= 0) {
                target.dataset.direction = 'right';
                // Stop moving and set the position
                clearInterval(id);
                const img = target.querySelector("img");
                img.style.display = 'none';
                target.style.left = '0px';
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
            box.dataset.direction = 'right'; // Initialize direction
            box.classList.add('moving');
        });
  
        // Set #position images to the placeholder images
        const positions = document.querySelectorAll(".position");
        positions.forEach((img, index) => {
            img.src = placeholderImages[index];
        });
  
        ids = Array.from(boxes).map((box, index) =>
            setInterval(() => move(box, ids[index]), Math.random() * (14 - 9.0) + 9.0)
        );
        startButton.style.display="none";
        resetButton.style.display="inline"
    });
  
    resetButton.addEventListener("click", () => {
        finishedOrder = [];
        ids.forEach(clearInterval);
  
        // Reset boxes to start position
        Array.from(boxes).forEach(box => {
            box.style.left = '0px';
            box.dataset.direction = 'right'; // Reset direction
            box.classList.remove('moving');
            
            // Hide the moving image
            const img = box.querySelector("img");
            img.style.display = 'none';
            img.src = '../frontend/rsc/img/female-swimmer.gif';
        });
  
        // Reset #position images to placeholders
        const positions = document.querySelectorAll(".position");
        positions.forEach((img, index) => {
            img.src = placeholderImages[index];
        });
  
        selectedRunnerId = null; // Reset selected runner
        betAmount = 0; // Reset bet amount
        showMessage(""); // Clear the message
        startButton.style.display="inline"
        resetButton.style.display="none"
    });


}

export default { render }
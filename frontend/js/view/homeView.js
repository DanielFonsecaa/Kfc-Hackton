function render() {
  // Create the main container element
  const mainContainer = document.querySelector('#container');
  mainContainer.innerHTML = "";
  mainContainer.style = "background-image: url(/frontend/rsc/mascote.png);";
  // Create the header
  const header = createHeader();
  mainContainer.appendChild(header);
  // Function to create the header
  function createHeader() {
    const header = document.createElement('header');
    header.style.padding = '128px 16px';
    const jumbotron = document.createElement('h1');
    jumbotron.classList.add('w3-margin', 'w3-jumbo');
    jumbotron.textContent = '100 years of Olympic';
    jumbotron.style = "font-size: 6vh";
    jumbotron.style.color = "white";
    jumbotron.style.marginBottom = "1vh";
    header.appendChild(jumbotron);
    const text2 = document.createElement('h1');
    text2.classList.add('w3-margin', 'w3-jumbo');
    text2.style = "font-size: 7vh"
    text2.style.marginBottom = "6vh";
    text2.textContent = '100 BootCamps';
    text2.style.color = "white";
    header.appendChild(text2);
    const templateText = document.createElement('h1');
    templateText.classList.add('w3-xlarge');
    templateText.textContent = 'Kernel Fried Chickens';
    templateText.style = "font-size: medium;";
    templateText.style.color = "white";
    templateText.style.marginBottom = "4vh";
    header.appendChild(templateText);
    const text3 = document.createElement('h1');
    text3.classList.add('w3-xlarge');
    text3.textContent = 'Reach for your dreams.';
    text3.style = "font-size: 5vh"
    text3.style.color = "white";
    text3.style.marginBottom = "7vh";
    header.appendChild(text3);
    const text4 = document.createElement('h1');
    text4.innerHTML = `Reach for the <p style= "font-size: 10vh">MONEY</p>`;
    text4.style = "font-size: 5vh"
    text4.style.color = "white";
    header.appendChild(text4);

    const audio = document.querySelector('audio');
    audio.play();

    const anchor = document.createElement('a');
    anchor.href="/bets"

    header.appendChild(anchor);

    const button = document.createElement('button');
    button.innerHTML = "LET'S WIN SOME MONEY!";
    button.style.marginTop = "8vh";
    button.style.marginLeft = "12Svh";
    button.style.padding = "15px";
    button.style.transition = "transform 0.3s, box-shadow 0.3s";
    button.className = "btn btn-success rounded"
    

    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.02)';
      button.style.boxShadow = '0 8px 20px rgba(255, 255, 255, 0.4)';
    });
    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
      button.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
    });

    anchor.appendChild(button);

    return header;
  }
}
export default { render }
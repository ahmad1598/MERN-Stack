
 let goombaInput = document.getElementById('goombaInput');
 let bobOmbsInput = document.getElementById('bobOmbsInput');
 let cheepCheepsInput = document.getElementById('cheepCheepsInput');

 let cointResult = document.createElement('h1');

document.addEventListener('submit', (e) => {
    e.preventDefault();
    let resultCal = goombaInput.value * 5 + bobOmbsInput.value * 7 + cheepCheepsInput.value * 11;
    goombaInput.value = '';
    bobOmbsInput.value = '';
    cheepCheepsInput.value = '';
    let resultDOM = document.getElementById('result');
    
    cointResult.innerHTML = "";
    cointResult.textContent = resultCal + " Coins";
    cointResult.classList.add("coinResult");
    resultDOM.appendChild(cointResult);
    

})



const options = ["😊", "😡", "😉", "😨", "🤩"];
const votes = [];
for (let i = 0; i < options.length; i++) {
    votes.push(0);
}

const optionsContainer = document.getElementById("options");
const resultsContainer = document.getElementById("results");

options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => {
        votes[index]++;
        updateResults();
    })
    optionsContainer.appendChild(button);
});
function updateResults() {
   
    
    options.forEach((option, index) => {
        const result = document.createElement("div");
        result.textContent = `${option} - ${votes[index]}`;
        resultsContainer.appendChild(result);
    });
}
updateResults();
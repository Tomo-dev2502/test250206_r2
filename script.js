function playGame(playerChoice) {
    const choices = ["rock", "scissors", "paper"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";
    if (playerChoice === computerChoice) {
        result = "引き分け！";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        result = "あなたの勝ち！";
    } else {
        result = "コンピューターの勝ち！";
    }

    document.getElementById("result").textContent = `あなた: ${playerChoice} / 相手: ${computerChoice} → ${result}`;
}

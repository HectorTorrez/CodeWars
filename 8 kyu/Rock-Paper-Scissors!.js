/* Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2-- > Output):

"scissors", "paper" -- > "Player 1 won!"
"scissors", "rock" -- > "Player 2 won!"
"paper", "paper" -- > "Draw!" */


const rps = (p1, p2) => {
    const outcomes = {
        rock: { winsAgainst: "scissors", losesTo: "paper" },
        paper: { winsAgainst: "rock", losesTo: "scissors" },
        scissors: { winsAgainst: "paper", losesTo: "rock" },
    };
    if (p1 === p2) return 'Draw!'
    if (outcomes[p1].winsAgainst === p2) return 'Player 1 won!'

    return 'Player 2 won!'
};
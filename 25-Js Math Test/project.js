const button = document.querySelector('.btn')
button.addEventListener('click', giveScore)
const correctAnswers = ["8", "10", "3", "25"]
function giveScore(e) {
    e.preventDefault()
    let score = 0
    for(let i=1; i<5; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`).value;
        if(answer === correctAnswers[i-1]) {
            score += 25
        }
    }
    const result = document.querySelector('.result')
    result.classList.remove('d-none')
    const span = document.querySelector('#percentage')
    span.innerText = `${score}%`
    if(score == 100) {
        const bravo = document.querySelector('#bravo')
        bravo.classList.remove('d-none')
        button.disabled = true
    }
}

// const correctAnswers = ['E', 'E', 'E', 'E']
// const form = document.querySelector('.question-form')
// const result = document.querySelector('.result')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const userAnswers = [
//         form.q1.value,
//         form.q2.value,
//         form.q3.value,
//         form.q4.value
//     ]
//     let score = 0
//     userAnswers.forEach((answer, index) => {
//         if(answer === correctAnswers[index]) {
//             score += 25
//         }
//     })
//     result.classList.remove('d-none')
//     result.querySelector('#percentage').textContent = `${score}%`
// })
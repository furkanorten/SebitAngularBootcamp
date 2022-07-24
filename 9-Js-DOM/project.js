// const button = document.querySelector('button')
// const button = document.querySelector('#buttonId')
// const button = document.querySelector('.buttonClass')
const button = document.getElementById('buttonId')
// const button = document.getElementsByClassName('buttonClass')[0]

// ilk yöntem
// button.addEventListener('click', () => {
//     console.log("tıklandı")
// })

// İkinci yöntem
function add(){
    console.log("tıklandı")
}

console.log(button)

const liElemanlari = document.querySelectorAll('li')
console.log(liElemanlari)

// liElemanlari.forEach(eleman => {
//     eleman.addEventListener('click', e => {
//         // console.log(e.target)
//         e.target.style.color = "blue"
//     })
// })

const ulDegerleri = document.querySelector('ul')
console.log(ulDegerleri)
// ulDegerleri.remove()

liElemanlari.forEach(eleman => {
    eleman.addEventListener('click', e => {
        // console.log(e.target)
        e.target.remove()
    })
})

const liEleman = document.createElement('li')
liEleman.textContent = "Javascript"

// append // sona eleman ekler
// prepend // başa eleman ekler

button.addEventListener('click', () => {
    const liEleman = document.createElement('li')
    liEleman.textContent = "Javascript"
    // ulDegerleri.prepend(liEleman)   
    ulDegerleri.append(liEleman)   
})


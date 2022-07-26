function hello() {
    console.log("hello")
}
hello()
hello()
hello()

//parametre

const canboz = function(ad, soyad) {
    console.log(`Ad Soyad ${ad} ${soyad}`)
}
canboz('Kemal', 'Doğukan')


// Default parametre
// const canboz = function(ad= "Can", soyad="Boz") {
//     console.log(`Ad Soyad ${ad} ${soyad}`)
// }
// canboz()


//Eski tipten arrowa hafif geçiş
const kareAlani = function(kenar) {
    return kenar**2
}

let sonuc = kareAlani(6)
console.log(sonuc)

//Arrow ilk versiyon
// const alan = (kenar) => {
//     return kenar**2
// }

//Tek parametreyse
// const alan = kenar => {
//     return kenar**2
// }

const alan = kenar => kenar**2
console.log(alan(5))

const donus = () => {
    return "Burak"
}
const stringDonus = () => "Burak"
console.log(stringDonus())

//Uygylama
//Ürünlerin ham fiyatını verip vergili halinin toplamını bulan bir hesaplama yapın

const urunSatis = function(urunler, vergi) {
    let toplam = 0
    for(let i=0; i<urunler.length; i++) {
        toplam += urunler[i] + urunler[i]*vergi
    }
    return toplam
}

console.log(urunSatis([10, 20, 30], 0.25))

const arrowUrunSatis = (urunler, vergi) => {
    let toplam = 0
    for(let i=0; i<urunler.length; i++) {
        toplam += urunler[i] + urunler[i]*vergi
    }
    return toplam
}

console.log(arrowUrunSatis([10, 20, 30], 0.25))




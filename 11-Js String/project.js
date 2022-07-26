// let email = "cnboz@hotmail.com"
let email = 'cnboz@hotmail.com'
console.log(email)

// birleştirme
let ad = "Zekeriya"
let soyad = "Duranel"
let adSoyad = ad + " " + soyad
console.log(adSoyad)
console.log(adSoyad[1])

// kaç karakter
console.log(adSoyad.length)

//string metodlar
console.log(adSoyad.toUpperCase())
let kucukAdSoyad = adSoyad.toLowerCase()
console.log(kucukAdSoyad)

//kaçıncı indexte bulunduğu
let index = adSoyad.indexOf('a')
let indexLast = adSoyad.lastIndexOf('a')
console.log(index)
console.log(indexLast)

//slice kullanımı
let ilkIsim = adSoyad.slice(0,8)
console.log(ilkIsim)

//replace
let yerDegistir = adSoyad.replace(" ", "")
console.log(yerDegistir)

//replaceAll
adSoyad = "Zekeriya Duranel HHHH"
let yerDegistirAll = adSoyad.replaceAll(" ", "")
console.log(yerDegistirAll)

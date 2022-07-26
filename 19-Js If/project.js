//Uygulama

//şifre uzunluğunun 12den büyükse güçlü şifre
// 8-12 arası ise yeterli şifre, 8den küçükse yetersiz şifre

const yeniSifre = "sashgsjakk'1245"

if(yeniSifre.length > 12) {
    console.log("Şifre güçlü")
}
else if(yeniSifre.length >=8) {
    console.log("Şifre yeterli")
}
else {
    console.log("Şifre yetersiz")
}
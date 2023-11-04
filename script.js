// <---------------------------  Exam meselesi      --------------------------->
// 3. Exam funksiyası verilir və 2 parametr saxlayır. 
// 1 - ci imtahana giriş balı, 2 - ci imtahan balı.Əgər imtahan balı minimum 17 olmalıdır.
// 17 - dən kiçikdirsə ümumiyətlə kəsilir, əks halda imtahana giriş balı və 
// imtahan balı toplanır.Cəm 51 - 60 arasındadırsa result olur "E" və bu formada yoxlama aparılır.

function Exam(giris_bali, imtahan_bali) {
    if (giris_bali < 17 || imtahan_bali < 17) {
        return "kesildiniz!!!"
    }
    else {
        let bal = imtahan_bali + giris_bali
        switch (bal>51) {
            case bal >= 51 && bal <= 60:
                console.log("E")
                break
            case bal >= 61 && bal <= 70:
                console.log("D")
                break
            case bal >= 71 && bal <= 80:
                console.log("C")
                break
            case bal >= 81 && bal <= 90:
                console.log("B")
                break
            case bal >= 91 && bal <= 100:
                console.log("A")
                break
            default:
                console.log("kesildin!")
                break
        }
    }
}

Exam(45, 49)


// <---------------------------   Koala Delfin meselesi       --------------------------->
// Delfinler --3 xal toplanib
// Koalalar --3 xal toplanib

// Oyunun shertleri:
// xallarin ortalamasi WebTransportBidirectionalStreamEger birinin ortalamasi digerinden en azi 2 defe cox olarsa,
// qalib onblur, eks halda beraberlik.

// function xallar(a, b, c) {
//     return (a + b + c) / 3
// }
// function qalib(a, b, c, x, y, z) {
//     if (xallar(a, b, c)> xallar(x, y, z)*2) {
//         return "delfinlerler qalibdir"
//     }
//     else if (xallar(x, y, z) > xallar(a, b, c) * 2) {
//         return "koalalar qalibdir"
//     }
//     else{
//         return "beraberlik!"
//     }
// }
// console.log(qalib(1,2,3, 4,5,6))
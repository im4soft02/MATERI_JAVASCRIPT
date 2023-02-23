// -------------------/\---------------/\---------------------
// ===============[]      JS SWITCH      ]====================
// ..............{     23 Februari 2023   }...................

//
////
//[[<==>]]=-----=(  Pernyataan ( switch / PENGALIHAN ) JavaScript
////
//

// Pernyataan ( switch / PENGALIHAN ) digunakan untuk melakukan tindakan yang berbeda berdasarkan kondisi yang berbeda.

// Gunakan pernyataan ( switch ) untuk memilih salah satu dari banyak blok kode yang akan dieksekusi.

//  Bentuknya penulisan Sintak kodenya seperti ini    (-   SWITCH   -)

// _________________________
//                         ]
// switch (Expression) {
//   case x:
//     // Blok kode
//     break;
//   case y:
//     // Blok kode
//     break;
//   default:
//   // Blok kode
// }
// _________________________]
//

// Begini Cara kerjanya ( SWITCH ) =

// 1. ( Expression ) sakelar dievaluasi sekali.
//
// 2. Nilai ( Expression ) dibandingkan dengan nilai dari setiap ( CASE ).
//
// 3. Jika ada kecocokan, _BLOK KODE_ terkait dijalankan.
//
// 4. Jika tidak ada yang cocok, _BLOK KODE_ default dijalankan.

//_______________________________________________________________________________

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 1 - <--<-   \\
//______________________________\\

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    day = "nomor salah";
}

console.log(`today is ${day}`);

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 2 - <--<-   \\
//______________________________\\

// parseInt = untuk mengubah menjadi number
// prompt = untuk memuncul text box
//
// let pertanyaan = parseInt(prompt("pilih angka 1 ATAU 2 ?"));

// switch (pertanyaan) {
//   case 1:
//     console.log("SELAMAT INI NOMOR 1");
//     break;
//   case 2:
//     console.log("SELAMAT INI NOMOR 2");
//     break;
//   default:
//     console.log("nomor salah");
// }

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 3 - <--<-   \\
//______________________________\\

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// let buah = ["pisang", "mangga", "apel"];

// for (let elemen of buah) {
//   elemen += " enak sekali.";
//   console.log(elemen);
// }

// ======
// const cars = ["BMW", "Volvo", "Mini"];

// let text = "masuk";

// for (let x of cars) {
//   text += x ;
//   console.log(text);
// }

// ====
// const cars = ["BMW", "Volvo", "Mini"];

// let text = "masuk ";
// for (let x of cars) {
//   text += x + "<br>";
// }
// document.write(text);

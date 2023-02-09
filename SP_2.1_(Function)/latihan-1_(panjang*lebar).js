// ............................(0_0).............................
// ............................(0_0).............................
// ............................(0_0).............................
//
//
//          POPULAR_BUILT IN FUNCTION
//
//
//          1. String
//
// toUpperCase
// let nama = "ahmad adhin";
// let hasil = nama.toUpperCase();
// console.log(hasil);
// // .
// // .
// // toLowerCase
// let coba = "fadhil";
// let adalah = coba.toLowerCase();
// console.log(adalah);
// // .
// // .
// // toString
// let nomor = 12345;
// const tostring = nomor.toString();
// console.log(typeof tostring);
// // .
// // .
// // includes
// let makan = "pizza";
// const kenyang = makan.includes("z");
// console.log(kenyang);

// .
// .
// .
//          2. Math
//
// // walaupun angka di belakang (,)kecil dia tetep genap ke atas
// let angka = 3.3321;
// const namaceil = Math.ceil(angka);
// console.log(namaceil);
// //
// // genap nya seimbang 5 kebawah dan 5 ke atas
// let angka2 = 5.5432;
// const namaround = Math.round(angka2);
// console.log(namaround);
// //
// // walapun angka di belakang (,) besar dia tetap genap ke bawah
// let angka3 = 3.8765;
// const namafloor = Math.floor(angka3);
// console.log(namafloor);
// //
// // untuk memncul kan angka random
// let angka4 = 3.4435;
// const namarandom = Math.random(angka4);
// console.log(namarandom);
// //
// // untuk menhitung semua huruf atau tanda baca
// let nama2 = "ahmad adhin";
// const hasillenght = nama2.length;
// console.log(hasillenght);

// .
// .
// .
// .
// .
// .
// .

//           PENGGUNAAN FUNCTION argument
//

// function penjumlahan(a, b) {
//   const hasilJ = a + b;
//   return hasilJ;
// }
// let result = penjumlahan(1, 1);
// console.log(result);

// //
// //
// //

// const penjumlahan1 = function (a = 1, b = 2) {
//   const hasilP = a + b;
//   return hasilP;
// };
// // let resultP = penjumlahan(4, 1);
// console.log(penjumlahan1(2, 8));

//
//
// -+-+-<(0_0)>-+-+-
// -+-+-<(0_0)>-+-+- JAVA SCRIPT 6
// -+-+-<(0_0)>-+-+-
//
//

//::||::||  1. ARROW FUNCTION  (Expression)  ||::||::

//
//
//          -= Arrow function  =-

// Arrow function BIASA
const ContohArrowBIASA = (a, b) => {
  return a + b;
};
// di bawah ini buat munculin hasil dari rumus di atas
document.write(ContohArrowBIASA(10, 20));

//  Arrow function SINGKAT (biasa di guanakn klngoding 1 baris)
const ContohArrowSINGKAT = (a, b) => a + b;
// di bawah ini buat munculin hasil dari rumus di atas
document.write(ContohArrowSINGKAT(10, 20));



//
//
//          -= TEMPLATE LITERAL =-

// let FunctionBaru = `
// <br><hr>contoh
// penggunaan =
// ${20 + 20}`;
// // di bawah ini buat munculin hasil dari rumus di atas
// document.write(FunctionBaru);

// let FbaruT = `
// <br><hr>contoh
// penggunaan =
// ${20 + 60}`;
// // di bawah ini buat munculin hasil dari rumus di atas
// document.write(FbaruT);

//
//          -= Ternary Operator =-

//
//          1. ( IF )

// di tambah ( && ) jika hanya menggunakan ( if )
// let angkaBenarIF = 10;
// {
//   // apakah angkaBenar lebih besar dari 9
//   angkaBenarIF > 5 && // <- di taro sini ( && ) nya
//     document.write(`<br><hr>anda Benar ( if )`);
// }
//
//          2. ( ELSE )

// Dengan menggunakan ( ELSE ) lama
// let angkaLAMA = 10;

// if (angkaLAMA < 20) {
//   document.write(`<br><br>benar sekali`);
// } else {
//   document.write(`<br>Anda salah sekali`);
// }

//
// DENGAN MENGGUNAKAN ( ELSE BARU ) Jika Benar
// let angkaBenar = 10;
// {
//   // apakah angkaBenar lebih besar dari 9
//   angkaBenar > 9
//     ? document.write(`<br><br>anda benar`)
//     : document.write(`<br><br>anda salah`);
// }

//
// DENGAN MENGGUNAKAN ( ELSE BARU ) Jika Salah
// let angkaSalah = 10;
// {
//   // apakah angkaSalah lebih besar dari 11
//   angkaSalah > 11
//     ? document.write(`<br><br>anda benar`)
//     : document.write(`<br><br>anda salah`);
// }

//
//   ----> ELSE IF LAMA <----

//  let nilai = prompt(
//     "apakah Nilai santri bernama Alex adalah 84,Berapa Grade nilai Alex ?"
//   );

//   if (nilai >= 90 && nilai <= 101) {
//     alert("A sangat bagus");
//   } else if (nilai >= 80 && nilai <= 90) {
//     alert("B biasa aja");
//   } else if (nilai >= 70 && nilai <= 80) {
//     alert("C mayan gk bego banget");
//   } else if (nilai >= 60 && nilai <= 70) {
//     alert("D mending belajar lu");
//   } else if (nilai >= 0 && nilai <= 60) {
//     alert("E gk ada harapan");
//   } else {
//     alert("F mending lu gk usah belajar");
//   }

//
//    ->-->  ELSE IF - BARU - <--<-

// let NilaiGW = parseInt(prompt("coba tebak nilai yang bagus ruh berapa"));
// {
//   NilaiGW >= 90 && NilaiGW <= 100
//     ? alert("A pinter lu")
//     : NilaiGW >= 80 && NilaiGW <= 90
//     ? alert("B lumayan")
//     : NilaiGW >= 70 && NilaiGW <= 80
//     ? alert("C cupu")
//     : NilaiGW >= 60 && NilaiGW <= 70
//     ? alert("D kebanyakan nge game")
//     : NilaiGW >= 50 && NilaiGW <= 60
//     ? alert("E block")
//     : alert("DI LUAR NALAR LU");
// }

// ............................(0_0).............................
// ............................(0_0).............................
// ............................(0_0).............................

//
//
//
//   !!---===[[[/ TUGAS FUNCTION \]]]===---!!


//
// Di bawah menggunakan (-==  FUNCTION EXPRESSION  ==-)

const Hitung_PxL = function (panjang, lebar) {
  const HasilPxL = panjang * lebar;
  return HasilPxL;
};
document.write(
  `( FUNCTION EXPRESSION ) <BR> Hasil Panjang x Lebar = ` + Hitung_PxL(10, 20)
);

//
// Di bawah menggunakan (-==  FUNCTION DECLARATION  ==-)

function hitung_PxL1(panjang, lebar) {
  return panjang * lebar;
}
const HasilPxL1 = hitung_PxL1(10, 20);
document.write(
  `<BR><BR> ( FUNCTION DECLARATION ) <br> Hasil Panjang x Lebar adalah = ` +
    HasilPxL1
);

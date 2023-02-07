// //  Array -Concat (menggabungkan 2 data variabel)

// var Santrilama = ["Hafif", "Dayat", "Wandi"];
// var Santribaru = ["Yusuf", "Luthfi", "Tompel"];
// // dibawah untuk gabungin 2 var di atas
// var gabungansantri = Santrilama.concat(Santribaru);

// //  di bawah untuk memuncul hasil concat dalam bentuk document text
// document.write("Array - CONCAT = ", gabungansantri);

// // .....................................................
// // ......................................................
// // .......................................................
// //
// // MEAN

// let nilaiSantri = [5, 9, 6, 7, 9, 8, 10, 7, 8];
// console.log(nilaiSantri);

// let jumlahnilai = 0;
// for (i in nilaiSantri) {
//   jumlahnilai += nilaiSantri[i];
// }
// let rataRata = jumlahnilai / nilaiSantri.length;
// document.write(
//   "<br><br>MEAN = rata rata nilai adalah = " + rataRata.toFixed(2)
// );
// // alert("rata rata nilai adalah " + rataRata.toFixed(2));

// // .....................................................
// // ......................................................
// // .......................................................
// //
// // MEDIAN

// let dataMedian = [5, 9, 6, 7, 9, 8, 10, 7, 8];

// let sortir = dataMedian.sort(function median(a, b) {
//   return a - b;
// });
// document.write(`<br><br>MEDIAN = urutan data dari yang terkecil = ${sortir}`);

// let median = sortir;
// if (median.length % 2 === 0) {
//   document.write(
//     "<br>",
//     "median dari data di atas adalah = ",
//     (median[(1 / 2) * median.length - 1] + median[(1 / 2) * median.length]) / 2
//   );
// } else {
//   document.write(
//     `<br> median dari data di atas adalah = ${
//       median[(1 / 2) * (median.length + 1)]
//     }`
//   );
// }

// // .....................................................
// // ......................................................
// // .......................................................
// //
// // MODUS

// let dataModus = [5, 9, 6, 7, 9, 8, 10, 7, 8, 9, 9];

// let sortir2 = dataModus.sort(function modus(a, b) {
//   return a - b;
// });
// document.write(
//   `<br><br>MODUS = angka yang paling banyak muncul = ${sortir2}<br>`
// );
// let modus = sortir2.splice(2, 6);
// document.write(`Modus dari data di atas adalah = ${modus}`);

// .....................................................
// ......................................................
// .......................................................
//
// SIMPANGAN BAKU
//

//
let SimpanganBaku = [5, 9, 6, 7, 9, 8, 10, 7, 8];

const NilaiRataRata =
  SimpanganBaku.reduce((sum, current) => sum + current, 0) /
  SimpanganBaku.length;
//    HASIL NILAI RATA RATA
const HasilRataRata = NilaiRataRata.toFixed();

//
//MENACRI VARIAN PADA DATA

data = SimpanganBaku.map((k) => {
  return (k - HasilRataRata) ** 2;
});

const sum = data.reduce((acc, cur) => acc + cur, 0);

const varians = sum / SimpanganBaku.length;
const varian = varians.toFixed();
//
// meng Kuadratkan dari hasil varian
function PerhitunganSB(varians) {
  return Math.sqrt(varians);
}

const SimpanganBaku1 = PerhitunganSB(varians).toFixed(2);

document.write(
  `nilai rata rata = ${HasilRataRata} <br> nilai varian = ${varian} <br> Simpangan Baku = ${SimpanganBaku1}`
);

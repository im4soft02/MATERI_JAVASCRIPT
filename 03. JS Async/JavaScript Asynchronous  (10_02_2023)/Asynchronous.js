// //----------------------------------------------------------
// ===============[]      Asynchronous      ]==================
// ...............{     10 Februari 2023    }...................
//
//
//
//
//
//         !!---===[[[/   Syncronus / Blocking   \]]]===---!!
//
//     <<_  Single Threaded  _>>
//
//------(  Syncronus dalam JAVASCRIPT =
//
// Secara DEFAULT proses EKSEKUSI JAVASCRIPT adalah Syncronus / Blocking, KARENA secara DEFAULT kalo kita membuat PROGRAM menggunakan JAVASCRIPT itu sebenar nya sudah di RUUNING atau Di jalankan DALAM PROSES SYNCRONOUS

// Threaded = " Urutan eksekusi kode yang dapat dilakukan secara bebas / independent satu sama lain,

// Single-Threaded = Yaitu JavaScript hanya bisa melakukan satu operasi di satu waktu, sehingga code JavaScript dieksekusi secara berurutan dari atas ke bawah layaknya sebuah antrian atau biasa disebut synchronous.

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 1 - <--<-   \\
//______________________________\\

// di bawah gk ada waktu,lgsung keluar klo GK ada (setTimeout), karena penggunaan (setTimeout) untuk memberi jeda muncul nya program agar lebih jelas terlihat Single Threaded nya =

// 1
// console.log("Muncul pertama karena urutan ke 1 tanpa setTimeout");
// // 2
// console.log("Muncul pertama karena urutan ke 2 tanpa setTimeout");
// // 3
// console.log("Muncul pertama karena urutan ke 3 tanpa setTimeout");

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 2 - <--<-   \\
//______________________________\\

//   Kita bisa menggunakan simulasi berikut Dengan menggunakan setTimeout agar terlihat lebih jelas

// setTimeout(() => {
//   console.log("Muncul pertama karena urutan ke 1");
//   document.write("Muncul pertama karena urutan ke 1");
// }, 800);

// setTimeout(() => {
//   console.log("Muncul pertama karena urutan ke 2");
//   document.write("<BR><BR>Muncul pertama karena urutan ke 2");
// }, 1600);

// setTimeout(() => {
//   console.log("Muncul pertama karena urutan ke 3");
//   document.write("<BR><BR>Muncul pertama karena urutan ke 3");
// }, 2400);

// .
// .
// .
// .
// ..
// .
// .

//         !!---===[[[/   Asynchronus / Non-blocking   \]]]===---!!

// Pada konsep asynchronous, code akan dieksekusi tanpa menunggu eksekusi code lain selesai sehingga seakan-akan dieksekusi secara bersamaan.

//  Kita bisa menggunakan simulasi berikut Dengan menggunakan setTimeout agar terlihat lebih jelas =

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 1 - <--<-   \\
//______________________________\\

// console.log("ke satu");

// setTimeout(() => {
//   console.log("ke dua");
// }, 3000);

// console.log("ke tiga");

//    setTimeout pada code di atas membuat kata [ console.log("ke dua") ] akan ditampilkan setelah 3 detik.

//    Namun JavaScript tidak akan menunggu selama 3 detik tapi akan segera menampilkan kata [ console.log("ke tiga") ]

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 2 - <--<-   \\
//______________________________\\

// console.log("Hi Brachio");

// setTimeout(function () {
//   console.log("the time has come");
// }, 3000);

// console.log("to learn how to code");

//    setTimeout pada code di atas membuat kata [ console.log("the time has come") ] akan ditampilkan setelah 3 detik.

//    Namun JavaScript tidak akan menunggu selama 3 detik tapi akan segera menampilkan kata [ console.log("to learn how to code") ]

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 3 - <--<-   \\
//______________________________\\

// console.log("LASUNG MUNCUL 1");
// // document.write("LASUNG MUNCUL 1<BR>");

// setTimeout(function () {
//   console.log("JEDA 3 DETIK");
//   // document.write("<BR><BR>JEDA 3 DETIK");/
//   // alert("3DETI")
// }, 2000);

// console.log("PALING CEPAT MUNCUL 2 KARENA CODINGAN DI URUTAN BAWAH");
// document.write("<BR><BR>PALING CEPAT MUNCUL 2 KARENA CODINGAN DI URUTAN BAWAH");

// setTimeout(function () {
//   console.log("EDA 3 DETI");
//   document.write("<BR><BR>JEDA 3 DETIK");
//   // alert("3DETI")
// }, 2000);
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
const dataSantri = [
  {
    nis: 1,
    nama: "sugar",
    umur: 11,
    divisi: "front_end",
  },
  {
    nis: 2,
    nama: "amar",
    umur: 27,
    divisi: "front_end",
  },
  {
    nis: 3,
    nama: "marco",
    umur: 15,
    divisi: "front_end",
  },
  {
    nis: 4,
    nama: "ibnu",
    umur: 30,
    divisi: "front_end",
  },
  {
    nis: 5,
    nama: "haykal",
    umur: 22,
    divisi: "front_end",
  },
];

const TampildataSantri = () => {
  dataSantri.forEach((santri) => {
    return console.log(santri.nama, `berumur ` + santri.umur);
  });
};

TampildataSantri();

//
//

const TambahSantri = (...SabtriBaru) => {
  setTimeout(() => {
    return dataSantri.push(...SabtriBaru);
  }, 1000);
};

TambahSantri({
  nis: 6,
  nama: "sanca",
  umur: 29,
  divisi: "front_end",
});

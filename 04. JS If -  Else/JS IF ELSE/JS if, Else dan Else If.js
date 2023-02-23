// //-------------------------------------------------------------------------
// ======================[]    JS If - Else - Else if    ]======================
// .........................{     14 Februari 2023    }........................
//

//                    Pernyataan bersyarat / Conditional Statements
// 
// Sangat sering saat Anda menulis kode, Anda ingin melakukan tindakan yang berbeda untuk keputusan yang berbeda.

// Anda dapat menggunakan pernyataan bersyarat dalam kode Anda untuk melakukan ini.

//---===( Dalam JavaScript kami memiliki pernyataan bersyarat berikut =
//
// Gunakan ( if ) untuk menentukan blok kode yang akan dieksekusi, jika kondisi yang ditentukan benar

// Gunakan ( else ) untuk menentukan blok kode yang akan dieksekusi, jika kondisi yang sama salah

// Gunakan ( else if )untuk menentukan kondisi baru yang akan diuji, jika kondisi pertama salah

// Gunakan ( switch ) untuk menentukan banyak blok kode alternatif yang akan dieksekusi    

// <- Pernyataan tersebut ( switch ) dijelaskan pada bab berikutnya.

//
//_______________________________________________________________________________

//--= Percabangan yang menggunakan kata kunci if dan else memiliki # bentuk. =--

//______________________________________________________________________________

//
////
//[[<==>]]=-----=(  1. Percabangan If dalam JAVASCRIPT
////
//

// Pernyataan bersyarat digunakan untuk melakukan tindakan yang berbeda berdasarkan kondisi yang berbeda.

// Percabangan if biasanya digunakan ketika kita hanya memiliki satu kondisi dan satu aksi (pilihan) atau statement.

//
////       <_(  Sintaks  ( If )  di bawah ini  )_>>
//

// if ( kondisi ) {
//   statement ;
// }

// KONDISI  adalah =

// biasanya berupa ekspresi yang mengembalikan nilai boolean ( nilai true/false )seperti perbandingan dan logika.

// Jika kondisi tidak mengembalikan nilai boolean, maka secara otomatis dikonversi ke boolean (truthy atau falsy).

// Kondisi harus bernilai true agar statement dieksekusi.
//_______________________________________________________________________________

// STATEMENT adalah =
// 
// kode atau aksi yang akan dieksekusi jika kondisi bernilai true.

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 1 - <--<-   \\
//______________________________\\

// CONTOH MENGGUNAKAN --{ OPERATOR PERBANDINGAN DI DALAM KONDISI ( > )  }

let score = 6;
// text di atas score adalah VARIABLE

// text score dalam kurung di bawah adalah KONDISI
if (score > 5) {
  console.log("lulus");
  // console.log ADALAH STATEMENT
}

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 2 - <--<-   \\
//______________________________\\

// let luSukaApa = prompt("hobby lu apa? berenang/main game/nonton anime");

// if (luSukaApa === "berenang") {
//   console.log("seru");
//   // alert("seru");
// }

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 3 - <--<-   \\
//______________________________\\

const inputKataSandi = "rahasia123";

if (inputKataSandi === "rahasia123") {
  console.log("Selamat Anda berhasil login.");
}

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 4 - <--<-   \\
//______________________________\\

let hour = 10;

if (hour < 18) {
  console.log("Good day");
}

//__________[  END  ]___________\\
//______________________________\\

//
////
//[[<==>]]=-----=(  2. Percabangan Else dalam JAVASCRIPT  )=--=--==--[+]-[%]
////
//

// Percabangan Else biasanya digunakan ketika kita memiliki dua pilihan atau statement (aksi).
// Statement yang akan dieksekusi ketika kondisi bernilai ( Boolean ) true atau false

//
////       <_(  Sintaks  ( If ) dan ( Else )  di bawah ini  )_>>
//

// if ( kondisi ) {
//   statement1
// } else {
//   statement2
// }

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 1 - <--<-   \\
//______________________________\\

// let hobby = prompt("hobby lu apa? berenang/main game/nonton anime");

// if (hobby === "berenang") {
//   console.log("seru");
//   // alert("seru");
// } else if (hobby === "main game") {
//   console.log("sangat seru");
//   // alert("sangat seru");
// } else if (hobby === "nonton anime") {
//   console.log("lebih seru lagi");
//   // alert("lebih seru lagi");
// } else {
//   console.log("gk jelas");
//   // alert("gk jelas");
// }

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 2 - <--<-   \\
//______________________________\\

// ---------------=[ CONTOH - TRUE - menggunakan operator perbandingan
let Angka = 10;

if (Angka < 20) {
  // ( apakah ANGKA LEBIH KECIL DARI 20 ? )
  console.log("benar / True");
} else {
  console.log("salah / False");
}

// ---------------=[ CONTOH - FALSE - menggunakan operator perbandingan
let Angka1 = 10;

if (Angka1 > 20) {
  // ( apakah ANGKA1 LEBIH BESAR DARI 20 ? )
  console.log("benar / True");
} else {
  console.log("salah / False");
}

//__________[  END  ]___________\\
//______________________________\\

//
////
//[[<==>]]=-----=(  3. Percabangan Else if dalam JAVASCRIPT  )=--=--==--[+]-[%]
////
//

// Percabangan Else if digunakan ketika kita memiliki lebih dari satu kondisi dan lebih dari dua pilihan atau statement (aksi).

// Perilakunya mirip seperti sebelumnya, JavaScript akan memindai setiap kondisi dari atas ke bawah.

// Jika ditemukan kondisi yang bernilai true maka statement yang ada di dalam kondisi tersebut akan dieksekusi lalu keluar dari percabangan.

// Artinya kondisi dan statement berikutnya tidak dieksekusi.

//
////       <_(  Sintaks  ( If ), ( Else If ) dan ( Else ) di bawah ini  )_>>
//

// if (kondisi1) {
//   statement1
// } else if (kondisi2) {
//   statement2
// } else {
//   statement3
// }

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 1 - <--<-   \\
//______________________________\\

// if (true) {
//   console.log('statement1');
// } else if (true) {
//   console.log('statement2');
// } else if (true) {
//   console.log('statement3');
// } else {
//   console.log('statement4');
// }

// ----------== PENTING DI BACA

// Perhatikan kode di atas, statement berapa yang akan ditampilkan ke console? Jawabannya adalah statement1.

// Mengapa statement2, statement3, dan statement4 tidak dieksekusi padahal kondisinya bernilai true?

// Karena statement1 adalah kondisi pertama yang dicek JavaScript.

// Sekali lagi ingat, ketika ditemukan kondisi bernilai true...

// ...JavaScript akan mengeksekusi statement dalam kondisi tersebut dan keluar dari percabangan.

// Bagaimana dengan else?

// Statement dalam blok else hanya dieksekusi ketika semua kondisi bernilai false.

// Jadi, selamat ada kondisi yang bernilai true, statement dalam blok else tidak akan dieksekusi.

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 2 - <--<-   \\
//______________________________\\

const nilai = 50;

if (nilai <= 100 && nilai >= 80) {
  console.log("Grade: A");
} else if (nilai < 80 && nilai >= 60) {
  console.log("Grade: B");
} else if (nilai < 60 && nilai >= 40) {
  console.log("Grade: C");
} else if (nilai < 40 && nilai >= 20) {
  console.log("Grade: D");
} else if (nilai < 20 && nilai >= 0) {
  console.log("Grade: E");
} else {
  console.log("Nilai tidak valid");
}

// ----------== PENTING DI BACA

// Kode di atas akan menampilkan Grade: C ke console karena nilai berada dalam rentang 60 - 40.

// Anda dapat mengubah nilai dari variabel nilai untuk menguji masing-masing kondisi, termasuk memasukkan angka diluar rentang 0 - 100.

// Kode di atas memang terlihat kompleks, tapi ini lebih ketat.

// Kode di atas juga bisa mengasah pemahaman Anda mengenai operator perbandingan dan logika.

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// let makanan = prompt("pilih hadian anda 1/2/3");

// if (makanan === "1") {
//   console.log("suka bakso");
// }

// nested if

// let nilai = 14;

// if (nilai == 14) {
//   if (nilai < 15) {
//     console.log("nilai lebih kecil dari 15");

//     if (nilai < 12) {
//       console.log("nilai lebih kecil dari 12");
//     } else {
//       console.log("nilai lebih besar dari 15");
//     }
//   }

// let pilihmakanan = prompt('pilih makanan (bakso/mie/seblak)')

// if (pilihmakanan === 'bakso'){
//       let pilihjenismakanan = prompt ('urat/telor/kuah')

//       if (pilihjenismakanan === 'urat')

// }

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// MATERI switch
// .
// .
// let pertanyaan = parseInt(prompt("pilih hadiah 1/2/3"));

// switch (pertanyaan) {
//   case 1:
//     alert("uang");
//     break;

//   case 2:
//     alert("mobil");
//     break;

//   case 3:
//     alert("mainan");
//     break;

//   default:
//     alert("gak jelas lu !!!");
//     break;
// }

// .
// .
// .
// .
// .

// let makanankhasdaerah = parseInt(
//   prompt(
//     "pilih NOMOR makanan khas daerah berikut,1.sunda/2.jawa/3.padang/4.bali"
//   )
// );

// switch (makanankhasdaerah) {
//   case 1:
//     alert("nasi timbel, kupat tahu, bakakak hayam");
//     break;

//   case 2:
//     alert("Rujak cingur, Tahu campur, Tahu tek");
//     break;

//   case 3:
//     alert("Sate padang, Lontong sayur, Dendeng balado");
//     break;

//   case 4:
//     alert("Ayam beutu, Sate lilit, Nasi jinggo");
//     break;

//   default:
//     alert("lu nulis apaan ?");
//     break;
// }

// .
// .
// .
// .
// .

// PERULANGAN = WHILE  . cek dulu baru tampil.    CONTOH =
// .
// .
// let makanan = 0;

// while (makanan < 10) {
//   document.write("<h6>gk jelas lu</h6>");
//   makanan++;
// }

// .
// .
// .
// .
// .

// PERULANGAN = DO/WHILE . tampil dulu baru cek.  CONTOH =
// .
// .
// let angka = 0;

// do {
//   document.write("DO/WHILE<br>");
//   angka++;
// } while (angka < 10);

// .
// ..
// ...
// ....
// ...........
// ...........
// ....
// ...
// ..
// .

// PERULANGAN = FOR

// for (let angka = 0; angka < 10; angka++) {
//   document.write("PERULANGAN FOR<br>");
// }

// .
// .
// .

// ANGKA GENAP
// .
// .
// let angka = 0;

// for (let angka = 0; angka <= 20; angka++) {
//   document.write(+angka * 2);
// }

// .
// .
// .

// ANGKA GANJIL
// .
// .
// let angka = 1;

// for (let angka = 1; angka <= 20; angka++) {
//   document.write(+angka * 2 - 1);
// }

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// SOAL PERULANGAN =
// .
// .
// let n = 9;

// for (x = 1; x <= n; x++) {
//   for (let y = 1; y < x; y++) {
//     if (x + y) {
//       document.write("-");
//     } else {
//       document.write("+");
//     }
//   }
//   document.write("<br>");
// }

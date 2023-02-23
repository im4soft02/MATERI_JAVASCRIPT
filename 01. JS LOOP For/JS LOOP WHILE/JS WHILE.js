// --------------------/\----------------/\---------------------
// ===============[]      JS LOOP WHILE      ]==================
// ...............{     21 Februari 2023    }...................

// Perulangan akan membantu kita mengeksekusi kode yang berulang-ulang, berapapun yang kita mau.

// Ada lima macam bentuk perulangan di Javascript. Secara umum, perulangan ini dibagi dua.

// Yaitu: counted loop dan uncounted loop.

// Perbedaanya:

// Counted Loop = merupakan perulangan yang jelas dan sudah tentu banyak perulangannya.

// Uncounted Loop = merupakan perulangan yang tidak jelas berapa kali ia harus mengulang.

// Perulangan yang termasuk dalam Counted Loop:

// 1. Perulangan For
// 2. Perulangan Foreach
// 3. Perulangan Repeat

// Perulangan yang termasuk dalam Uncounted Loop:
//
// 1. Perulangan While
// 2. Perulangan Do / While

//                                   _______
////                               /
//////                           /
//=---==}            !!---===[[[\     1.WHILE    \]]]===---!!
//////                                          /
////                                  ________/
//

//
//
//------(  While Loop / Putaran Sementar  )
//
// PENGULANGA while loop melalui blok kode akan selalu berjalan selama kondisi yang ditentukan True / benar.

// While Loop / Putaran Sementar = merupakan Uncounted Loop

// Uncounted Loop = merupakan perulangan yang tidak jelas berapa kali ia harus mengulang.

//  Bentuknya penulisan Sintak kodenya seperti ini    (-   WHILE   -)
// _________________________________________
//                                          \
// while ( condition / KONDISI ) {          \
//     // AKSI                              \
//   }                                      \
// _________________________________________\

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 1 - <--<-   \\
//______________________________\\

//===---------------{ PERTAMBAHAN  ( + )
//
// let nilaiAwal = 1;

// while (nilaiAwal <= 5) {
//   // <- di samping varibaler nilaiAwal di baca = ( apakah variabe nilaiAwal lebih KECIL dari sama dengan 5 ?)
//   console.log(`CONTOH 1 DARI  ${nilaiAwal}`);
//   nilaiAwal++; //  <- baris ini adalah increment / decrement,
//   // nilaiAwal++ = variabel menggunakan ( ++ ) yang arti nya variabel di tambah 1 di setiap pengulangan nya.
// }

//===---------------{ PERTAMBAHAN  ( + )
//
// let nilaiAwal = 0;

// while (nilaiAwal <= 10) {
//   // <- di samping varibaler nilaiAwal di baca = ( apakah variabe nilaiAwal lebih KECIL dari sama dengan 5 ?)
//   console.log(`CONTOH 1 DARI  ${nilaiAwal}`);
//   nilaiAwal += 2; //  <- baris ini adalah increment
//   // nilaiAwal+=2 = variabel menggunakan ( +=2 ) yang arti nya variabel di tambah 2 di setiap pengulangan nya.
// }

//===---------------{ PENGURANGAN  ( - )
//
// let nilaiAwal = 20;

// while (nilaiAwal >= 0) {
//   // <- di samping varibaler nilaiAwal di baca = ( apakah variabe nilaiAwal lebih KECIL dari sama dengan 5 ?)
//   console.log(`CONTOH 1 DARI  ${nilaiAwal}`);
//   nilaiAwal--; //  <- baris ini adalah increment
//   // nilaiAwal -- = variabel menggunakan ( -- ) yang arti nya variabel di kurang 1 di setiap pengulangan nya.
// }

// ===---------------{ PENGURANGAN  ( - )
//
// let nilaiAwal = 30;

// while (nilaiAwal >= 0) {
//   // <- di samping varibaler nilaiAwal di baca = ( apakah variabe nilaiAwal lebih KECIL dari sama dengan 5 ?)
//   console.log(`CONTOH 1 DARI  ${nilaiAwal}`);
//   nilaiAwal -= 3; //  <- baris ini adalah increment
//   // nilaiAwal -=3 = variabel menggunakan ( -=3 ) yang arti nya variabel di kurang 3 di setiap pengulangan nya.
// }

//===---------------{ PEMBAGIAN  ( / )
//
// let nilaiAwal = 1000;

// while (nilaiAwal >= 1) {
//   // <- di samping varibaler nilaiAwal di baca = ( apakah variabe nilaiAwal lebih BESAR dari sama dengan 1 ?)
//   console.log(`CONTOH 1 DARI PEMBAGIAN /2  ${nilaiAwal}`);
//   nilaiAwal /= 2; //  <- baris ini adalah increment
//   // nilaiAwal /= 2 = variabel menggunakan ( /= 2 ) yang arti nya variabel di BAGI 2 di setiap pengulangan nya.
// }

//===---------------{ PEMBAGIAN  ( / )
//
// let nilaiAwal = 9999999999999;

// while (nilaiAwal >= 1) {
//   // <- di samping varibaler nilaiAwal di baca = ( apakah variabe nilaiAwal lebih BESAR dari sama dengan 1 ?)
//   console.log(`CONTOH 1 DARI PEMBAGIAN /30 ${nilaiAwal}`);
//   nilaiAwal /= 30; //  <- baris ini adalah increment
//   // nilaiAwal /= 2 = variabel menggunakan ( /= 2 ) yang arti nya variabel di BAGI 2 di setiap pengulangan nya.
// }

//===---------------{ PERKALIAN  ( * )
//
// let nilaiAwal = 1;

// while (nilaiAwal <= 99999) {
//   // <- di samping varibaler nilaiAwal di baca = ( apakah variabe nilaiAwal lebih KECIL dari sama dengan 1 ?)
//   console.log(`( CONTOH 1 ) 2 DI KALI =  ${nilaiAwal}`);
//   nilaiAwal *= 2; //  <- baris ini adalah increment
//   // nilaiAwal *= 2 = variabel menggunakan ( *= 2 ) yang arti nya variabel di KALI 2 di setiap pengulangan nya.
// }

//===---------------{ PERKALIAN  ( * )
//
// let nilaiAwal = 1;
// let nilaiAwal2 = 1;
// let nilaiAkhir = 1;
// while ((nilaiAwal <= 10, nilaiAkhir <= 100)) {
//   console.log(`( CONTOH 1 ) ${nilaiAwal} + ${nilaiAwal2} = ${nilaiAkhir}  `);
//   nilaiAwal += 1;
//   nilaiAwal2 += 1;
//   nilaiAkhir *= 2;
// }                              { blm selesai , msh dalam percobaan }

//
//____________________________________________________________

//===-------{   NOTE !!!!   }
//
// increment = adalah penambahan terhadap variabel nilaiAwal
// decrement = adalah pengurangan terhadapat variabel nilaiAwal\
//
// ____________________________________________________________

//===-------{   PENJELASAN   }

// Yang perlu diperhatikan adalah kondisi yang ada di dalam kurung setelah kata ( WHILE ).

// Kondisi ini akan menentukan =
//
// Hitungan akan dimulai dari 1 ( let nilaiAwal = 1; )
// Hitungannya sampai berapa? Sampai ( nilaiAwal <= 5 )
// Lalu di setiap perulangan nilaiAwal akan bertambah +1 ( nilaiAwal++ )

// Variabel ( nilaiAwal ) pada perulangan ( WHILE ) berfungsi untuk menyimpan nilai hitungan.

// Jadi setiap perulangan dilakukan nilai i akan selalu bertambah satu. Karena kita menentukannya di bagian i++.

//=--=--=--=--=--=--=--=--=--=--=--=--=--=--=--=

// Apakah nama variabelnya harus selalu NilaiAwal?
// Tidak !!!
// Kita juga bisa menggunakan nama lain.

// Misalnya seperti di bawah ini =
//
// let MencariNilaiGanjil = 1;

// while (MencariNilaiGanjil <= 30) {
//   // ( let MencariNilaiGanjil lebih kecil dari 100 ? ) variabel bernilai true akan jalan sampai nilai false,
//   console.log(`nilai GANJIL  ${MencariNilaiGanjil}`);
//   MencariNilaiGanjil += 2; //  <- baris ini adalah increment / decrement,
// }

// _____________________________________________________________________
//

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 2 - <--<-   \\
//______________________________\\

// let ulang = true;

// while (ulang) {
//   alert("CONTOH 2- while jika true");
//   ulang = confirm("while / ulang, lagi?");
//   // confirm seperti Tipe data Boolean ( False / True ), memiliki dua pilihan yaitu ( Cancel = False ) dan ( Ok = True)
// }

// _____________________________________________________________________
//

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 3 - <--<-   \\
//______________________________\\

// let ulangi = confirm("Apakah anda mau mengulang?");
// let counter = 0;

// while (ulangi) {
//   let jawab = confirm(
//     "click OK untuk menambah pengulangan dan click CANCEL untul melihat hasil pengulangan anda"
//   );
//   counter++; // untuk menambah hasil pengulangan jika nilai ( TRUE )
//   if (jawab == false) {
//     ulangi = false;
//   }
// }
// // untul melihat hasil pengulangan yang sudah di click berapa banyak
// document.write(`Perulangan sudah dilakuakn sebanyak  ${counter}kali`);

//
////----------====[ Bisa disederhanakan menjadi:
//

// let ulangi1 = confirm("Apakah anda mau mengulang?");
// let counter1 = 0;

// while (ulangi1) {
//   counter1++; // untuk menambah hasil pengulangan jika nilai ( TRUE )
//   ulangi1 = confirm("Apakah anda mau mengulang?");
// }
// // untul melihat hasil pengulangan yang sudah di click berapa banyak
// document.write("Perulangan sudah dilakuakn sebanyak " + counter1 + " kali");

// _____________________________________________________________________
//

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 4 - <--<-   \\
//______________________________\\

//---== {   PERHITUNGAN BUNGA BANK menggunakan ( WHILE )

// -------=[ SEDERHANA
// 
let saldo = 300000; // Saldo / uang
let diskon = 0.2; //bunga sebesar 2,5%
let noBulan = 1; //bulan

while (noBulan <= 12) {
  document.write(`Bulan ke ${noBulan} = Rp. ${(saldo += saldo * 0.025)}<br>`);
  noBulan++;
  saldo++; // <- baris ini adalah increment / decrement, JANGAN LUPA DI KASI SEPERTI INI AGAR TIDAK MASUK KE ( INFINITY LOOPING )
}

// -------=[ KOMPLEKS ( RUMIT )
//
// function hitung() {
//   let saldo = parseFloat(document.grup.isaldo.value);
//   let bunga = parseFloat(document.grup.ibunga.value);
//   let waktu = parseFloat(document.grup.iwaktu.value);
//   let hasil = "";

//   for (i = 1; i <= waktu; i++) {
//     saldo = saldo + (saldo * bunga);
//   }
// }

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 5 - <--<-   \\
//______________________________\\

// let angka = 1;

// while (angka <= 10) {
//   console.log(angka);
//   angka++;
// }

//_______________________________[  END  ]______________________________\\
//______________________________________________________________________\\

//                                    _______
////                                /
//////                            /
//=---==}            !!---===[[[/  2. DO WHILE  \]]]===---!!
//////                                          /
////                                  ________/
//

// Perulangan Do / while sama seperti perulangan while.

// Perbedaanya =

// Perulangan Do / while akan melakukan perulangan sebanyak 1 kali terlebih dahulu, lalu mengecek kondisi yang ada di dalam kurung while.

//  Bentuknya penulisan Sintak kodenya seperti ini   (-   DO WHILE   -)

// __________________________________________
//                                           \
// Do {                                      \
//   // ( blok kode yang akan di ulang ) {   \
// }                                         \
// While (condition / KONDISI );             \
// __________________________________________\

//-------------= DO WHILE penerapan seperti di bawa ini langsung tamplil dahulu
//
// let contoh = "ini di isi bebas, bisa 1.String 2.boolean 3.Number";

// do {
//   console.log(`DI TAMPILKAN TERLEBIH DULU DO WHILE ${contoh}`);
// } while (
//   ini_GW_Tulisan_Apaan_Aja_Terserah_yng_penting_ada_isi_nya_disini_buat_contoh
// );

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 1 - <--<-   \\
//______________________________\\

//-------------= DO WHILE
//
// let text = "";
// let i = 0;

// do {
//   console.log((text += i));
//   console.log(`nomor 1 sampi ${i}`);
//   i++;
// } while (i < 10);

// let text = "";
// let i = 0;

// do {
//   console.log((text += i));
//   console.log(`nomor 1 sampi ${text}`);
//   console.log(`nomor 1 sampi ${i}`);
//   i++;
// } while (i < 10);

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 2 - <--<-   \\
//______________________________\\

//-------------= DO WHILE
//
// let ulangi = confirm("Apakah anda mau mengulang?");
// let jumlahUlang = 0;

// do {
//   jumlahUlang++;
//   ulangi = confirm("Apakah anda mau mengulang?");
// } while (ulangi);

// // untul melihat hasil pengulangan yang sudah di click berapa banyak
// document.write("Perulangan sudah dilakuakn sebanyak " + jumlahUlang + " kali");

//-------------= WHILE
//
// let ulangi1 = confirm("Apakah anda mau mengulang?");
// let jumlahUlang = 0;

// while (ulangi1) {
//   jumlahUlang++; // untuk menambah hasil pengulangan jika nilai ( TRUE )
//   ulangi1 = confirm("Apakah anda mau mengulang?");
// }

// // untul melihat hasil pengulangan yang sudah di click berapa banyak
// document.write("Perulangan sudah dilakuakn sebanyak " + jumlahUlang + " kali");

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 3 - <--<-   \\
//______________________________\\

//-------------= DO WHILE
//
// let contoh = "ini di isi bebas, bisa 1.String 2.boolean 3.Number";

// do {
//   console.log(`DI TAMPILKAN TERLEBIH DULU DO WHILE ${contoh}`);
// } while (
//   ini_GW_Tulisan_Apaan_Aja_Terserah_yng_penting_ada_isi_nya_disini_buat_contoh
// );

//-------------= DO WHILE
//
// let nilai = 1;

// do {
//   console.log(`TAMPILKAN INI DO WHILE ${nilai}`);
//   nilai++;
// } while (nilai <= 10);

// //-------------= WHILE
//
// let nilai1 = 1;

// while (nilai1 <= 10) {
//   console.log(`CONTOH 3 While ${nilai1}`);
//   nilai1++;
// }

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 3 - <--<-   \\
//______________________________\\

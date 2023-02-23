// --------------------/\---------------/\---------------------
// ===============[]      JS LOOP FOR      ]==================
// ...............{     21 Februari 2023   }...................

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

//
////
//////
//=---==}            !!---===[[[/  1. FOR  \]]]===---!!
//////
////
//

// Perulangan ( FOR ) merupakan perulangan yang termasuk dalam couted loop, karena sudah jelas berapa kali ia akan mengulang.

//  Bentuknya penulisan Sintak kodenya seperti ini    (-   WHILE   -)

//_______________________________________________________
//                                                       \
// For  ( condition / KONDISI ) {                        \
//   // AKSI                                             \
// }                                                     \
// ______________________________________________________\

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 1 - <--<-   \\
//______________________________\\

// for (let i = 0; i <= 10; i++) {
//   console.log(`Perulangan ke ${i}`);
//   document.write("<p>Perulangan ke-" + i + "</p>");
// }

// Yang perlu diperhatikan adalah kondisi yang ada di dalam kurung setelah kata ( For ).

// Kondisi ini akan menentukan =

// Hitungan akan dimulai dari 0 ( i = 0 );
// Hitungannya sampai berapa? Sampai i < 10;
// Lalu di setiap perulangan i akan bertambah +1 (i++).
// Variabel i pada perulangan ( For ) berfungsi untuk menyimpan nilai hitungan.

// Jadi setiap perulangan dilakukan nilai ( i ) akan selalu bertambah satu. Karena kita menentukannya di bagian i++.

// ______|\_____________|\______\\
//                              \\
//    ->-->  CONTOH 2 - <--<-   \\
//______________________________\\

for (counter = 0; counter < 30; counter += 2) {
  console.log(`Perulangan CONTOH 2 ke ${counter}`);
  document.write("<p>Perulangan ke-" + counter + "</p>");
}

//
// for (let i = 18; i >= 10; i--) {
//   console.log(i);
// }

//
//
//
// for (let i = 20; i >= 1; i--) {
//   console.log(`hay${i}`);
// }

//
//----= ARRAY
//
// let mobil = ["Buggati", "lamborgini", "motor", "mobil"];

// // bisa menggunakan length

// // etiap paramter harus make titik koma ( ; ) untuk pemisah nya
// for (let i = 0; i < mobil.length; i++) {
//   console.log(mobil[i]);
// }

//
//----= ARRAY
//
// let mobil = ["Buggati", "lamborgini", "motor", "mobil"];

// for (item of mobil) {
//   console.log([item]);
// }

// //
// //----= OBJECT
// //
// let mobil = {
//   nama: "adhin",
//   harga: 200,
//   warna: "merah",
// };

// for (item in mobil) {
//   console.log(mobil.harga);
// }

// let tes1 = [
//   {
//     nama: "buku",
//     harga: 100,
//     warna: "biru",
//   },
//   {
//     nama: "pensil",
//     harga: 200,
//     warna: "merah",
//   },
//   {
//     nama: "pulpen",
//     harga: 300,
//     warna: "kuning",
//   },
//   {
//     nama: "tv",
//     harga: 400,
//     warna: "hitam",
//   },
// ];

// for (item of tes1) {
//   console.log(item.nama);
// }

// let tes1 = [
//   {
//     nama: "buku",
//     harga: 100,
//     warna: "biru",
//   },
//   {
//     nama: "pensil",
//     harga: 200,
//     warna: "merah",
//   },
//   {
//     nama: "pulpen",
//     harga: 300,
//     warna: "kuning",
//   },
//   {
//     nama: "tv",
//     harga: 400,
//     warna: "hitam",
//   },
// ];

// for (item of tes1) {
//   console.log(item.nama);
// }

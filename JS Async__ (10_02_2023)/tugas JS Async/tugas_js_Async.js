//                                                          //
//                                                          //
//       !!---===[[[/    TUGAS ASYNC     \]]]===---!!       //

// _________________________________________________________//
//
//
// 1. buatlah program yg menjalankan 3 fungsi ( synchcronous/ blocking)

// 2. buatlah program yang menjalankan 4 fungsi (piket makan, mandi, makan, menyalakan lampu) secara asynchronous/non-blocking

// 3. buatlah program callback synchcronous

// 4. buatlah program callback asynchronous

//
//_______________________________JAWABAN__________________________________
//

//
// 1. buatlah program yg menjalankan 3 fungsi ( synchcronous/ blocking)

//
//         !!---===[[[/   Syncronus / Blocking   \]]]===---!!

// Secara DEFAULT proses EKSEKUSI JAVASCRIPT adalah Syncronus / Blocking, KARENA secara DEFAULT kalo kita membuat PROGRAM menggunakan JAVASCRIPT itu sebenar nya sudah di RUUNING atau Di jalankan DALAM PROSES SYNCRONOUS

// _____________________________
//
//->-->  JAWABAN 1 - <--<-
//______________________________

// di bawah gk ada waktu,lgsung keluar klo GK ada (setTimeout), karena penggunaan (setTimeout) untuk memberi jeda muncul nya program agar lebih jelas terlihat Single Threaded nya =

// 1
console.log("Muncul pertama karena urutan ke 1 tanpa setTimeout");
// 2
console.log("Muncul kedua karena urutan ke 2 tanpa setTimeout");
// 3
console.log("Muncul ketiga karena urutan ke 3 tanpa setTimeout");

/// _____________________________
//
//->-->  JAWABAN 2 - <--<-
//______________________________

let tugas = {
  hobi: "Main game",
  jawaban: function () {
    console.log(`HOBI ${this.hobi}`);
  },
};
tugas.jawaban();

let tugas1 = {
  makanan: "Roti Aoka",
  jawaban: function () {
    console.log(`Makanan kesukaan ${this.makanan}`);
  },
};
tugas1.jawaban();

let tugas2 = {
  Waifu: "Columbina",
  jawaban: function () {
    console.log(`Waifu gw ${this.Waifu}`);
  },
};
tugas2.jawaban();

//
//____________________________{  2  }_____________________________________
//

// 2. buatlah program yang menjalankan 4 fungsi (piket makan, mandi, makan, menyalakan lampu) secara asynchronous/non-blocking

//
//         !!---===[[[/   Asynchronus / Non-blocking   \]]]===---!!

//Pada konsep asynchronous, code akan dieksekusi tanpa menunggu eksekusi code lain selesai sehingga seakan-akan dieksekusi secara bersamaan.

// _____________________________
//
//->-->  JAWABAN 1 - <--<-
//______________________________

// Array = Setiap nilai di dalam array / [] , disebut item atau elemen.Bedanya kalau objek menggunakan nama properti sedangkan array menggunakan indeks. Item pertama pada array memiliki indeks 0, item kedua 1 dan seterusnya berurutan.

let PRIORITAS = ["main game", "ngopi", "turu", "nonton anime"];

setTimeout(() => {
  document.write(PRIORITAS[0]); //dalam kuruang siku ( Array ) itu nama nya item atau elemen.Item pertama pada array memiliki indeks 0, item kedua 1 dan seterusnya berurutan.
}, 1000);
setTimeout(() => {
  document.write(`<br>` + PRIORITAS[1]);
}, 2000);
setTimeout(() => {
  document.write(`<br>` + PRIORITAS[2]);
}, 3000);
console.log(PRIORITAS[3]);

// _____________________________
//
//->-->  JAWABAN 2 - <--<-
//______________________________

console.log("ke satu");

setTimeout(() => {
  console.log("ke dua");
}, 3000);

setTimeout(() => {
  console.log("ke tiga");
}, 1000);

//    setTimeout pada code di atas membuat kata [ console.log("ke dua") ] akan ditampilkan setelah 3 detik.

//    Namun JavaScript tidak akan menunggu selama 3 detik tapi akan segera menampilkan kata [ console.log("ke tiga") ]

//
//____________________________{  3  }_____________________________________
//

// 3. buatlah program callback synchcronous

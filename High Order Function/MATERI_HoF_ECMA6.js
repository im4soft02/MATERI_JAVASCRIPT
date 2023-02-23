//---------------------------------------------------------------------
// ===============[]       High Order Function      ]==================
// ....................{     8 Februari 2023    }......................
//

//==-
//========----[   1. Closure   -( FUNCTION )-
//==-
// Closure adalah fitur dalam JavaScript di mana fungsi yang ada di dalam memiliki akses ke variabel milik fungsi yang ada di luar. Dengan Closure, kita dapat mengembalikan sebuah fungsi yang memiliki akses terhadap scope fungsi ketika ia didefinisikan.

//=-
//=---  Closure
//=-
// // --[ Contoh Soal PERTAMBAHAN ( + ) DAN PENGURANGAN ( - )

function Total_ABC(a, b, c) {
  return function (d, e, f, g) {
    return (a + b + c) * (d + e + f + g);
  };
}

let Total_DEFG = Total_ABC(10, 20, 10);
document.write(
  `Contoh Soal PERTAMBAHAN ( + ) DAN PENGURANGAN ( - ) <span style="color: rgb(255, 187, 51);"> Closure</span>  =  ` +
    Total_DEFG(10, 20, 10, 30)
);

//=-
//=---  Closure
//=-
// // --[ Contoh Soal PEMBAGIAN ( / ) DAN PERKALIAN ( * )

function Total_ABC1(a, b, c) {
  return function (d, e, f, g) {
    return (a + b / c) * (d + (e + f) * g);
  };
}

let Total_DEFG2 = Total_ABC1(10, 20, 10);
document.write(
  `<br><br>Contoh Soal PEMBAGIAN ( / ) DAN PERKALIAN ( * ) <span style="color: rgb(255, 187, 51);"> Closure</span> =  ` +
    Total_DEFG2(10, 20, 10, 70)
);

//=-
//=---  KESIMPULAN   -( Closure )-
//=-
// Kesimpulan : Wujud dari konsep Closure adalah fungsi yang tetap memiliki referensi terhadap konteks ketika fungsi tersebut didefinisikan. Konsep Closure masih memiliki hubungan yang erat dengan konsep Scope.

//

//

//

//

//
//\\
//00\\___________________________MATERI__BARU__________________________________
//
//
// {\__/}
// (• _•)        _/[==--\|/                   1. Map
// />__ >(0000]==_=[==---o   -{   Memahami =     2. Filter
// \/ \/          \[==--/|\                         3. Reduce
//
//_____________________________________________________________________________
//00//
////
//

//=-
//=---  1. Map    -=   Method .map ( )  =-
//=-
//
//   PENGERTIAN MAP
//
//   Katakanlah kita telah menerima array yang berisi banyak objek
//   masing-masing objek mewakili seseorang. Hal yang benar-benar
//   kita butuhkan pada akhirnya adalah sebuah array yang hanya
//   berisi id dari setiap orang.
//______________________________________________________________________________

// =
// =                    -=(    CONTOH 1    )=-
// =

//
// Apa yang kita punya, DI dalam [ let Kita_punya ]

let Kita_punya = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

//
// Yang kita butuhkan KITA panggil, contoh nya SAYA INGIN NAMA NYA SAJA

const HasilFilterNama = Kita_punya.map((i) => i.name);

document.write(
  `<br><br>HASIL SELEKSI YANG KITA BUTUHKAN DARI DATA  <span style="color: rgb(24, 219, 206);">Name</span> <span style="color: chartreuse;">Method .map()</span> = <br>` +
    HasilFilterNama
);

//
// ----JIKA INGIN MENGAMBIL 2 KEY DALAM 1 OBJECT tapi dalam 1 ARRAY
const HasilFilterNama1 = Kita_punya.map((santri) => ({
  nama: santri.name,
  id: santri.id,
}));

console.log(HasilFilterNama1);

const HasilFilterID = Kita_punya.map((i) => i.id);
document.write(
  `<br><br>HASIL SELEKSI YANG KITA BUTUHKAN DARI DATA <span style="color: rgb(24, 219, 206);">ID</span></span>  <span style="color: chartreuse;">Method .map()</span> = <br>` +
    HasilFilterID
);

// =
// =                    -=(    CONTOH 2    )=-
// =

const pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];

const HasilPilod = pilots.map((i) => i.years);
document.write(
  `<br><br>HASIL SELEKSI YANG KITA BUTUHKAN DARI DATA <span style="color: rgb(24, 219, 206);">Years</span> <span style="color: chartreuse;">Method .map()</span>  = <br> ` +
    HasilPilod
);

//

//

//

//=-
//=---  2. Reduce    -=   Method .reduce ( )  =-
//=-

//        PENGERTIAN REDUCE
//
//      Sama seperti .map(), .reduce() juga menjalankan callback untuk
//      setiap elemen array. Yang berbeda di sini adalah bahwa reduce
//      melewati hasil dari callback ini (akumulator) dari satu elemen
//      array ke elemen array yang lain.

//      Akumulator dapat berupa apa saja (integer, string, objek, dll.)
//      Dan harus dipakai atau dilewatkan saat memanggil .reduce().

//      Waktunya untuk contoh! Katakanlah kita memiliki array dengan
//      pilot-pilot dan tahun pengalamannya masing-masing:

//______________________________________________________________________________

// =
// =                    -=(    CONTOH 1    )=-
// =

const KTP_orang = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];

//
// Kita perlu tahu total usia tahun mereka semua.
// Dengan .reduce ( ) , ini cukup mudah:

const Usia_orang = KTP_orang.reduce(function (accumulator, Orang) {
  return accumulator + Orang.years;
}, 0);

document.write(
  `<br></br><span Style="color: rgb(191, 1, 255);"> Method .reduce</span> jumlah usia  = ` +
    Usia_orang
);

// =
// =                    -=(    CONTOH 2    )=-
// =
//  Kita perlu tahu total ID mereka semua.

const Usia_orang1 = KTP_orang.reduce(function (accumulator, Orang) {
  return accumulator + Orang.id;
}, 0);

document.write(
  `<br></br><span Style="color: rgb(191, 1, 255);"> Method .reduce</span> jumlah ID  = ` +
    Usia_orang1
);

//

//

//

//=-
//=---  3. Filter    -=   Method .filter ( )  =-
//=-

// =
// =                    -=(    CONTOH 1    )=-
// =

const Benar_salah = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "salah1",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "true1",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "true1",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "salah1",
  },
];

const salah1 = Benar_salah.filter(function (coba) {
  return coba.faction === "salah1";
});
const true1 = Benar_salah.filter(function (coba) {
  return coba.faction === "true1";
});

console.log(Benar_salah);

//______________________________________________________________________________

// ---------- 1. For

// `````````` 2. Filter

// ANGKA JANGAN DI MATIKAN
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];/

// const newAngka0 = angka.filter(function (Filter_segala_angka_yang) {
//   return Filter_segala_angka_yang >= 3;
// });

// document.write(newAngka0);

// filter arrow

// const newAngka2 = angka.filter((a) => a >= 3);
// document.write(newAngka2);

// const angkaBaru1 = angka.filter((b) => b < 4);
// document.write('<br><br>'+angkaBaru1);

// --------- 3. Map

// -------- 4. Reduce

// const angkaBaru1 = angka.reduce(
//     (acc, cur) );
// document.write();

// mencari angka >= 3

// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// document.write(newAngka);

// filter

// const newAngka = angka.filter(function (a) {
// return a >= 3;
// });

// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// reduce
// jumlhkn seluruh element pada array
// 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9

// const newAngka = angka.reduce(
// // (accumulator, currentValue) => accumulator + currentValue,0
// );
// console.log(newAngka);

// Method Chaining(berantai)
// cari angka > 5
// kalikan 3
// jumlahkan semua

// const hasil = angka
// .filter((a) => a > 5) // 8,9,9
// .map((a) => a * 3) // 24,27,27
// .reduce((acc, cur) => acc + cur); // 78
// console.log(hasil);

//-------------= spreed operator
//
//
// datasantri = [
//   ...dataSantri,
//   { nis: 7, nama: "adhin", umur: 21, divisi: "mobile" },

// ];

// const myFunction = (...params) => console.log(params);

// myFunction(1, 2, 3, 4, 5, 6, 7);

//
//

// const myFunction = (a, b, c, ...params) => {
//   return console.log(a, b, c, params);
// };

// myFunction(1, 2, 3, 4, 5, 6, 7);

//
//

// const myFunction = (a, b, c, ...params) => {
//   return console.log(a, b, c, ...params);
// };

// myFunction(1, 2, 3, 4, 5, 6, 7);

//
//

// const Nama = "adhin";
// console.log(...Nama);

//
//

// const Contohh = ["adhin", "Fadhil", "adhmad"];
// console.log(...Nama);

// document.write(Contoh);

// const Datasantri = [
//   {
//     nama: "adhin",
//   },
// ];

// const Hasil = contoh.map((item) =>{
//     console.log(item
//         )
// })

//
//
//
//
//
//
//
//
//
//         CONCAT
// const buah = ["apel", "jeruk", "anggur"];
// const buah2 = ["kiwi", "kelapa", "strawberi"];
// const buah3 = ["Duku", "pisang", "semangka"];

// // RUMUS CONCAT LAMA
// //
// const hasil = buah.concat(buah, buah2, buah3);
// document.write(`<br><br>` + hasil);

// // RUMUS CONCAT BARU
// //
// const hasil1 = [...buah, ...buah2];
// document.write(`<br><br>` + hasil1);
// //
// // CONCAT BARU BISA SEPERTI INI JUGA
// const hasil2 = [...buah, "SIRSAK", ...buah2, "SIRSAK"];
// document.write(`<br><br>` + hasil2);

// const hasil3 = buah.splice(1, 0, "BEBAS");
// document.write(`<br><br>` + buah2);

// //
// const salinBuah = [...buah2];
// document.write(`<br><br>` + salinBuah);

// ..
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
// .
//
//

const santri0 = [
  {
    nama: "ahmad",
    usia: 20,
    menikah: true,
  },
  {
    nama: "adhin",
    usia: 30,
    menikah: true,
  },
  {
    nama: "madara",
    usia: 10,
    menikah: true,
  },
  {
    nama: "fadhil",
    usia: 14,
    menikah: true,
  },
];

const [madara, fadhil, adhin] = santri0;
// const santri1 = ["nama", "saya", "edward"];
// const { name, me, santri } = santri1;

// document.write();

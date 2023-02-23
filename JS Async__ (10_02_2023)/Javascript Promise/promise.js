// -------------------------------------------------------------
// ==================[]      Promise      ]=====================
// ................{     11 Februari 2023    }..................

//
//->-->  CONTOH 1 - <--<-

// const AyoBuatKopi = false;
// const AyoBuatKopi = true;

// const MulaiBuatKopi = new Promise((P_resolve, P_reject) => {
//   //   jika resolve, tampilkan dalam ( if )
//   if (AyoBuatKopi) {
//     P_resolve("Kopi Berhasil Dibuat");
//     //  jika reject, tampilkan ( else )
//   } else {
//     P_reject("Mesin Kopi Rusak Cuy");
//   }
// });

// // cara memanggil eksekutor function nya
// MulaiBuatKopi.then((result) => document.write(result)).catch((eroor_cuy) =>
//   document.write(eroor_cuy)
// );
//
// Akses nilai pada komdisi resolve maupun reject menggunakan method
// .then
// .catch

//-----------------------------------

// const AyoBuatKopi = false;
// const AyoBuatKopi = true;

// const MulaiBuatKopi = new Promise((P_resolve, P_reject) => {
//   //   jika resolve, tampilkan dalam ( if )
//   if (AyoBuatKopi) {
//     P_resolve("<br><br>Kopi Berhasil Dibuat");
//     //  jika reject, tampilkan ( else )
//   } else {
//     P_reject("<br><br>Mesin Kopi Rusak Cuy");
//   }
// });

// // cara memanggil eksekutor function nya
// MulaiBuatKopi
//   .finally(() => document.write("<br>Selesai Menunggu"))
//   .then((result) => document.write(result))
//   .catch((eroor_cuy) => document.write(eroor_cuy))
//   .finally(() => document.write("<br><br>Selesai buat kopi cuy.Siap minum"));

//____________________________________________________________________________________
//
//     DENGAN SETTIMEOUT  ( ASYNCHRONOUS )
//____________________________________________________________________________________
//          1. Pending
//
// const AyoBuatKopi = false;
const AyoBuatKopi = true;

const MulaiBuatKopi = new Promise((P_resolve, P_reject) => {
  //   jika resolve, tampilkan dalam ( if )
  if (AyoBuatKopi) {
    P_resolve("<br><br>Kopi Berhasil Dibuat");
    //  jika reject, tampilkan ( else )
  } else {
    P_reject("<br><br>Mesin Kopi Rusak Cuy");
  }
});

// //Cara pendek nya
// // -----------------------------------
// MulaiBuatKopi.then((hasil) => console.log(hasil)).catch((err_cuy) =>
//   console.log(err_cuy)
// );
// // ----------------------------------

// cara memanggil eksekutor function nya
MulaiBuatKopi.finally(() => {
  setTimeout(() => {
    // document.write("<br>Selesai Menunggu")
    console.log("Silahkan Menunggu");
  }, 1000);
})

  .then((result) => {
    setTimeout(() => {
      //   document.write(result)
      console.log(result);
    }, 2000);
  })

  .catch((eroor_cuy) => {
    setTimeout(() => {
      //   document.write(result)
      console.log(eroor_cuy);
    }, 2500);
  })

  .finally(() => {
    setTimeout(() => {
      if (AyoBuatKopi) {
        console.log("Selesai buat kopi cuy.Siap minum");
      } else {
        console.log("gk bisa buat kopi");
      }
    }, 4000);
  });

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

// Akses nilai pada komdisi resolve maupun reject menggunakan method
// .then
// .catch

// ==
// ==--------[      Promise Object Properties       ]
//
//
//          1. Pending
//          2. Fulfilled
//          3. Rejected

//
//
//              3. Rejected

//
// const stokKopi = {
//   bijiKopi: 100,
//   air: 50,
// };

// let cekStok = new Promise ((resolve, reject) => {
//     if stok
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

//  ------------------ akses data dengan PROMISE

fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then((response) => console.json(response))
  .then((data) => {
    console.log(data);
    console.log(`pokemon bernama ${data.species.name}`);
  })
  .catch((error) => console.log("Data tidak di temukan"));

//   ----------------- akses data dengan Asyng wait

const getPokemon = async (id) => {
  try {
    const response = await fetch("https://animechan.vercel.app/api/random");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("pokemon tidak di temukan");
  }
};

getPokemon(1);

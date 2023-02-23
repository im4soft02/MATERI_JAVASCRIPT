//
//---------------------------------------------------------------------
// ===============[]    JavaScript Callbacks    ]======================
// .................{     10 Februari 2023    }........................
//
//

//
//   !!---===[[[/     Synchronous Callback   \]]]===---!!
//

// -----MENGGUNAKAN ALERT  !!!

function halo(nama) {
  alert(`halo ${nama}`);
}

function tampilkanPesan(Callback) {
  const nama = prompt("Masukkan Nama :");
  Callback(nama);
}

tampilkanPesan(halo);  

//
//
//---------[ CONTOH 1 ]

// function main(param1, param2, callback) {
//   console.log(param1, param2);
//   callback();
// }

// function myCallback() {
//   setTimeout(() => {
//     console.log("Hello callback");
//   }, 2000);
// }

// main(1,2, myCallback);

//
//
//---------[ CONTOH 2 ]

function main(param1, param2, callback, callbackdua) {
  // dia ambil data berurutan bedasarkan di bawah ini
  console.log(param1, param2);
  callback();
  callbackdua();
}

function myCallback() {
  setTimeout(() => {
    console.log("Hello callback");
  }, 1000);
}

function myCallbackdua() {
  setTimeout(() => {
    console.log("Hello callback dua");
  }, 2000);
}

main(1, 2, myCallbackdua, myCallback);

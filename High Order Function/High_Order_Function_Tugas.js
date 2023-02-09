//
//\\
//00\\___________________________MATERI__BARU__________________________________
//
//
// {\__/}
// (• _•)        _/[==--\|/
// />__ >(0000]==_=[==---o   -{   LATIHAN SOAL___High Order Function
// \/ \/          \[==--/|\
//
//_____________________________________________________________________________
//00//
////
//

let personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

//
//
// MENGGUNAKAN FILTER =

//      VERSI PANJANG NYA
//
// const ForceuserTrue = personnel.filter(function (a) {
//   return a.isForceUser === true;
// });
// const ForceuserFalse = personnel.filter(function (b) {
//   return b.isForceUser === false;
// });

// console.log(ForceuserTrue);
// console.log(ForceuserFalse);

//      VERSI PENDEK NYA
//
const ForceuserTrue = personnel.filter((a) => a.isForceUser === true);
const ForceuserFalse = personnel.filter((a) => a.isForceUser === false);

console.log(ForceuserTrue);
console.log(ForceuserFalse);
document.write(
  ` <span style="color: rgb(255, 187, 51);"> Method .filter ()</span> <br>
  untuk memfilter forceuser yang true dan false  =  ` + typeof +ForceuserTrue
);

//
//
// MENGGUNAKAN MAP = UNTUK MENGAMBIL DATA DALAM OBECJCT { }

const JumlahForceScore = ForceuserTrue.map(
  (a) => a.pilotingScore + a.shootingScore
);

console.log(JumlahForceScore);
document.write(
  `<br><br><span style="color: chartreuse;">Method .map ()</span> <br>Jumlah hasil seleksi data yang kita butuhkan dari pilotingscore dan shootingscore yang True <span style="color: rgb(24, 219, 206);"></span>  = <br> ` +
    JumlahForceScore
);

//
//
// MENGGUNAKAN REDUCE = MENJUMLAHKAN TOTAL SELURUH DATA DI DALAM ARRAY

const JumlahseluruForce = JumlahForceScore.reduce(
  (acc, Jumlah) => acc + Jumlah
);

console.log(JumlahseluruForce);
document.write(
  `<br></br><span Style="color: rgb(191, 1, 255);"> Method .reduce ()</span> <BR> TOTAL user force True  = ` +
    JumlahseluruForce
);

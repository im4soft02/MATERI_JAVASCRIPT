// /
//=---==}            !!---===[[[/  1. FOR  \]]]===---!!
// /
x = "aku"; // <- variabel yang belum di deklarasi,,otomatis akan jadi var

///--2

var aku = "aku";
var aku = "aku"; // var bisa di deklarasi ulang

///--3

// tipe data const tidak bisa di ubah
const dia = 20;
dia = 30;
console.log(dia);

///--4

// object dalam object

const santri = {
  nama: "adin",
  alamat: {
    jalan: "fatimah",
  },
};

console.log(santri.alamat.jalan); // cara manggil object dalam object menggunakan ( . )

///--5

let x = 9;
let y = 17;

let result1 = x < y;

console.log( result1! )

// hasil nya false karena ada tanda ! di dalam


//--6

// operator or or ||  dan operator &&

let xx = 9;
let yy = 17;

const result = xx < yy || yy == 18 
// karena make or walaupun  ada salah tetap true

///--7

let xxx = 9
x -= 5

console.log(first)

///--8

// pengulangan

// for in = untuk Array
// for of = untuk Object

///--9

let quest = prompt('pilih angka') t

switch (quest) {
    case 1:
        console.log('kpopi')
        break
    case 2:
        console.log('susu') 
        break
    default:
        console.log('nomor salah')
}

// parseIN mengubah menjadi number

///--10

// --- salah ( error karena gk ada parameter )
// 
function tampilNama() {
    return `halo ${nama}`
}
tampilNama(nama)

//-----benar ( gk error ) 
// 
// function tampilNama(nama) {
//     return `halo ${nama}`
// }
// tampilNama(nama)

///---11

function tampilNomor (a, b, c) { // C masih undifine karena blm dikasih argument
    return b + c 
}

let result4 = tampilNomor( 2, 1)


// angka + undifine = Nun

///---12

// method array

// shift hapus depas

// unshift nambah depan

// push nambah belakang

// pop hapus belakang

///---13

// untuk menggabung kan semua array menggunakan Method 

let angka1 = [1,2,3]
let angka2 = [4,5,6]

let gabung = angka1.concat(angka2)

// method sudah pasti menggunakan ( . )

///---14

let buah = ['apel','anggur','pisang','jeruk','nangka']

buah.splice(2, 0, 'Markisa')
// menambahkan 'Markisa' sebelum index ke 2
// ( 2, 2,) 
// nomor 2 untuk menambhakan sebelum index 2
// nomor 0 untuk menghapus index yang di hitung dari index 2
console.log(buah)

///---15

// Destructing assigman = PENTING !!!!

// ----------Destructing Array
// 
let a = 1
let b = 2

[a,b] = [b,a]

console.log(a) //Output nya adalah = 2

///---16

// Function dalam object

const nama1 = {
    nama:'adhin',
    umur: 21,
    halo: function() {
       return `Halo ${this.nama}`
    } 
} 

console.log(santri.halo)

///---17

// Canva-

// JS this Keyword 

///---18

// function dalam function 
// innerFunction

function myfunc () {
    function innerFunc (){
        let a = 1 
        console.log(a)
    } 
    innerFunc(a)
}
myfunc (a)

///---19


// const number = [3,5,7,9]

// const hasil = number.reduce(total, nilaiSaatIni => {
//     return total + nilaiSaatIni
// })

// console.log(hasil)


// untuk mengkali setiap index dalam Array
// 
const number = [3,5,7,9]

const hasil = number.map((angka) => {
    return angka *2
})

console.log(hasil)

///---20

// Canva-71 = popular-built in string

const karakter = ['luffy','zorro','mihawk','shanks']

const MemFilter = karakter.filter ((hurufKarakter) =>{
    return hurufKarakter.includes('k')
})

console.log(MemFilter)









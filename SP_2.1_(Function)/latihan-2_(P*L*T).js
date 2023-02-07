//
//
//  ----====[[  MENGHITUNG VOLUME BALOK  ]]====----

//
// Di bawah menggunakan (-==  FUNCTION DECLARATION  ==-)
document.write(`MENGHITUNG VOLUME BALOK <br>`);

function hitung_PxLxT(panjang, lebar, tinggi) {
  return panjang * lebar * tinggi;
}
const HasilPxLxT = hitung_PxLxT(10, 20, 10);
document.write(
  `<BR> ( FUNCTION DECLARATION ) <BR>  Hasil Panjang x Lebar x Tinggi <BR> adalah = ` +
    HasilPxLxT
);

//
//
//  ----====[[  MENGHITUNG LUAS PERMUKAAN BALOK  ]]====----
document.write(`<br><br><br> MENGHITUNG LUAS PERMUKAAN BALOK`);
//
// Di bawah menggunakan (-==  FUNCTION DECLARATION  ==-)

function hitung_PxLxT2(panjang, lebar, tinggi) {
  const luas = panjang * lebar + panjang * tinggi + lebar * tinggi;
  return luas;
}
const HasilPxLxT2 = hitung_PxLxT2(10, 10, 10) * 2;
document.write(
  `<BR><br> ( FUNCTION DECLARATION ) <br> Hasil Panjang x Lebar x Tinggi <BR> adalah = ` +
    HasilPxLxT2
);

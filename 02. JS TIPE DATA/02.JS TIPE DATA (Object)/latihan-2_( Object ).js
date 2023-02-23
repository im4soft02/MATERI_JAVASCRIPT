//
document.write("<hr>");
var jualMobil = {
  iklan: function () {
    document.write(
      `Bu, saya ${this.nama}, jual mobil ${this.merk}, tahun ${this.tahun}, bekas`
    );
  },
};

const saya = Object.create(jualMobil);

saya.nama = "Tompel";
saya.merk = "Avanza";
saya.tahun = 2017;
saya.iklan();

// objek siswa

let siswa = {
    nama: 'haekal',
    umur: 18,
    alamat: 'bandung',
    
    perkenalan: function () {
        document.write(`nama saya ${this.nama} dan umur saya ${this.umur}. saya tinggal di ${this.alamat}`)
    }
}

siswa.perkenalan()

document.write('<br>')
// objek seragam

let seragam = {
    senin: 'baju hitam',
    rabu: 'baju batik',
    jumat: 'baju muslim',

    jadwalSeragam: function () {
        document.write(`seragam hari senin adalah ${this.senin}, seragam hari rabu adalah ${this.rabu} dan                        seragam hari jumat adalah ${this.jumat}  `)
    }
}

seragam.jadwalSeragam()

document.write('<br>')

// objek  kucing

let kucing = {
    nama: 'sumbul',
    warnaBulu: 'oren',
    jumlahKaki: 4, 

    anakKucing: function () {
        document.write(`warna kucing ${this.nama} adalah ${this.warnaBulu}. ${this.nama} mempunyai kaki berjumlah ${this.jumlahKaki}`)
    }
}

kucing.anakKucing()

document.write('<br>')

// objek laptop

let laptop = {
    merk: 'acer aspire 3',
    ram: 8,
    chipset: 'amd ryzen 5',

    laptopKu: function () {
        document.write(`dijual laptop ${this.merk} dengan ram ${this.ram} dan chipset ${this.chipset}`)
    }
}

laptop.laptopKu()

document.write('<br>')  

// objek hp

let hp = {
    merk: 'samsung',
    ram: 4,
    pemilik: 'haekal',

    hpKU: function () {
        document.write(`${this.pemilik} mempunyai handphone merk ${this.merk} dengan ram ${this.ram}`)
    }
}

hp.hpKU()
// Antrian menggunakan (Queue)
let nomorUrut = document.getElementById('nomorUrut')
const btnNum = document.getElementsByName('classNumber')


var antrian = []
function tambah(nama, antrian) {
    antrian.push(nama);
    // return antrian;
    return nomorUrut.innerHTML = antrian.join('<br><br>');
    
}

tambah('Aka', antrian);
tambah('Kamal', antrian);
tambah('Dorem', antrian);
tambah('Kasa', antrian);
tambah('Sai', antrian);
tambah('Durahem', antrian);
tambah('Dobi', antrian);
tambah('Satia', antrian);
tambah('Tika', antrian);
tambah('Zae', antrian);
tambah('Yori', antrian);
tambah('Fara', antrian);
tambah('Enggi', antrian);
tambah('Kosi', antrian);
tambah('Gera', antrian);
tambah('Nuda', antrian);
tambah('Nori', antrian);
tambah('Meka', antrian);


 

 



function proses(antrian){
    if(antrian.length == 0){
        nomorUrut.innerHTML = ('...Yeayyyy... <br> Quis 1 Selesai');
    }else{
        antrian.shift(antrian);
        return nomorUrut.innerHTML = antrian.join('<br><br>');
    }
}



// nomer tabel menggunakan implemetasi (stack)

const angkaD = document.getElementById('angkaD')

var angkaPs = []
function berrik(angka, angkaPs) {
    angkaPs.push(angka);
    // return antrian;
    return angkaD.innerHTML = angkaPs.join('<br><br>');
    
}

berrik(1, angkaPs);
berrik(2, angkaPs);
berrik(3, angkaPs);
berrik(4, angkaPs);
berrik(5, angkaPs);
berrik(6, angkaPs);
berrik(7, angkaPs);
berrik(8, angkaPs);
berrik(9, angkaPs);
berrik(10, angkaPs);
berrik(11, angkaPs);
berrik(12, angkaPs);
berrik(13, angkaPs);
berrik(14, angkaPs);
berrik(15, angkaPs);
berrik(16, angkaPs);
berrik(17, angkaPs);
berrik(18, angkaPs);



function mulai(angkaPs){
    if(angkaPs.length == 0){
        angkaD.innerHTML = ('-');
    }else{
        angkaPs.pop(angkaPs);
        return angkaD.innerHTML = angkaPs.join('<br><br>');
    }
}



// nomor urut (id class) menggunakan implementasi (Queue)
const idclass = document.getElementById('idclass')

var angkaid = []
function gift(id, angkaid) {
    angkaid.push(id);
    // return antrian;
    return idclass.innerHTML = angkaid.join('<br><br>');
    
}
gift(1, angkaid);
gift(2, angkaid);
gift(3, angkaid);
gift(4, angkaid);
gift(5, angkaid);
gift(6, angkaid);
gift(7, angkaid);
gift(8, angkaid);
gift(9, angkaid);
gift(10, angkaid);
gift(11, angkaid);
gift(12, angkaid);
gift(13, angkaid);
gift(14, angkaid);
gift(15, angkaid);
gift(16, angkaid);
gift(17, angkaid);
gift(18, angkaid);



function start(angkaid){
    if(angkaid.length == 0){
        idclass.innerHTML = ('-');
    }else{
        angkaid.shift(angkaid);
        return idclass.innerHTML = angkaid.join('<br><br>');
    }
}
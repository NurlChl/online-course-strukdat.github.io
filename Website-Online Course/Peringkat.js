// // Bubble Sorting

// var data = [Aka=9, Lufi=12, Fian=3, Soni=1, Josi=20, Rino=5];
// console.log (`data = ${data.join(' - ')}`);

// var datapeserta = function namaPeserta() {
    
//     // looping index
//     for(var i = 0; i < data.length-1; i++) {
//         // looping perbandingan data
//         for(var j = 0; j < data.length-1;  j++) {
//             // algoritma bubble sort
//             if(data[j] > data[j+1]) {
//                 temp = data[j];
//                 data [j] = data[j+1];
//                 data[j+1] = temp;
//             }
//         }
//         console.log (`proses ke ${i+1} =${data.join('-')}`);
//     }
    // return namaPeserta.innerHTML = datapeserta;
    
// }
// datapeserta();



// Bubble Sorting
let namaPeserta = document.getElementById('namaPeserta')
//memanggil nama peserta yang ada di peringkat html

function bubble_sort(dataPeserta) { 
    for (let i=0; i < dataPeserta.length; i++) {
        for (let j = 1; j < dataPeserta.length - i; j++) {
            if (dataPeserta[j] < dataPeserta[j - 1]) {
                let temp = dataPeserta[j];
                dataPeserta[j] = dataPeserta [j - 1];
                dataPeserta[j - 1] = temp;
            }
        }
    }
    dataPeserta.reverse()
    return namaPeserta.innerHTML = dataPeserta.join('<br>');

}
console.log(bubble_sort([10, 0, 70, 60, 70, 85, 70, 99.9, 90, 87.5, 100, 90, 100, 85, 87.5, 90, 99.9, 100]));




// Sequential search
// Kita buat data dummy untuk pencarian data
// Nantinya data ini akan diambil dari database
const data = ['Aka <br> Nilai : 100', 'Kasa <br> Nilai : 100', 'Sai <br> Nilai : 100', 'Dobi <br> Nilai : 99.9', 'Durahem <br> Nilai : 99.9', 'Satia <br> Nilai : 90', 'Dorem <br> Nilai : 90', 'Tika <br> Nilai : 90', 'Kamal <br> Nilai : 87.5', 'Meka <br> Nilai : 87.5', 'Nori <br> Nilai : 85', 'Nuda <br> Nilai : 85', 'Zae <br> Nilai : 70', 'Yori <br> Nilai : 70', 'Fara <br> Nilai : 70', 'enggi <br> Nilai : 60', 'Kosi <br> Nilai : 10', 'Gera <br> Nilai : 0'];



// Kita akan mendefinisikan selector-selector yang kita perlukan
const buttonSearch	= document.getElementById('buttonSearch');
const search = document.getElementsByName('keyword')[0];
const data_section 	= document.getElementsByClassName('data')[0];
const dataKelas = document.getElementById('dataKelas')
const datkel = document.getElementById('data')




// Membuat event ketika menekan enter pada inputan search
search.addEventListener('keyup', event => {
	if (event.keyCode === 13) {
		searchData();
        search.style.color = "black";
        
	}
});

// delete search
search.addEventListener('keyup', event => {
	if (event.keyCode === 8) {
		search.value = "";

	}
});

// clear search and back
search.addEventListener('keyup', event => {
	if (event.keyCode === 46) {
		search.value = "";
        location.reload()

	}
});



function searchData() {
	const search_value 	= search.value.toLowerCase();

	// Copy array data ke variable data_filtered
	const data_filtered = data.slice(0);

	// Lakukan perulangan pada semua data untuk cek apakah ada yang mengandung "keyword" atau tidak
	data_section.innerHTML = "";
	for (var i = 0; i < data_filtered.length; i++) {
		if ( data_filtered[i].toLowerCase().includes(search_value)) {			
			// Jika ada, Masukkan data ke list data pencarian yang didapat
			data_section.innerHTML = data_filtered[i];
            namaPeserta.style.display="none";
            dataKelas.style.display="none";
            data_section.style.height="200px";
            data_section.style.color="black";
            data_section.style.width="1025px";
            

		}
        
	}	
}
search.style.color = "black";









// // Sequential Search
// var data2 = ['Asa', 'Ujo', 'Jun' , 'Sen'];
// var ydc = 'Jun';
// console.log(`data2 = ${data2.join(' - ')}`);
// console.log(`cari = ${ydc}`);

// var ss = function() {
//     for(var i = 0; i < data2.length; i++) {
//         if (data2[i] == ydc) {
//             console.log(`ditemukan pada index ke ${i}`);
//             break;
//         } else {
//             hasil = `tidak ditemukan`;
//         }     
//         console.log(`pada index ke ${i} ${hasil}`);
//     }
        
// }




// stack
// var keramik = [];
// function tambah(warna, keramik){
//     keramik.push(warna);
//     return keramik;
// }

// function ambil(keramik){
//     if(keramik.length == 0){
//         console.log('tidak ada tumpukan');
//     }
//     else{
//         keramik.pop(keramik);
//         return keramik;
//     }
// }

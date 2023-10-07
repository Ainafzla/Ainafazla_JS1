// if-else
let nilai = 83;

if (nilai >= 80) {
    console.log("Nilai A");
} else if (nilai >= 70) {
    console.log("Nilai B");
} else {
    console.log("Nilai C");
}

// nested if
let umur = 4;
let izinKhusus = false;

if (umur >= 5) {
    if (izinKhusus) {
        console.log("Boleh masuk wahana dengan izin khusus");
    } else {
        console.log("Boleh masuk wahana");
    }
} else {
    console.log("Belum cukup umur untuk masuk wahana");
}

// switch case
let hari = "Sabtu";

switch (hari) {
    case "Senin":
        console.log("Hari ini adalah hari kerja");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Hari ini adalah hari libur");
        break;
    default:
        console.log("Hari ini adalah hari kerja");
}

// for statement
for (let i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
}

// while
let count = 0;
while (count < 5) {
    console.log("Perulangan ke-" + count);
    count++;
}

// do while
let counter = 0;
do {
    console.log("Perulangan ke-" + counter);
    counter++;
} while (counter < 10);

// function
function tambahkan(angka1, angka2) {
    return angka1 + angka2;
}

let hasilPenambahan = tambahkan(100, 5);
console.log("Hasil penambahan: " + hasilPenambahan);
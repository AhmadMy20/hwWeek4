function valueAcak() {
    return Math.floor(Math.random() * 50) + 1;
}
const arrayAcak = Array.from({ length: 100 }, valueAcak);

const genap = [];
const ganjil = [];

for (let i = 0; i < arrayAcak.length; i++) {
    if (i % 2 === 0) {
        genap.push(arrayAcak[i]);
    } else {
        ganjil.push(arrayAcak[i]);
    }
}

function kalkulasi(array) {
    const min = Math.min(...array);
    const max = Math.max(...array);
    const total = array.reduce((acc, value) => acc + value, 0);
    const rata_rata = total / array.length;

    return { min, max, total, rata_rata };
}

const statsGenap = kalkulasi(genap);
const statsGanjil = kalkulasi(ganjil);

const perbandingan = {
    min: statsGenap.min > statsGanjil.min ? "Min lebih besar array genap" : "Min lebih besar array ganjil",
    max: statsGenap.max > statsGanjil.max ? "Max lebih besar array genap" : "Max lebih besar array ganjil",
    total: statsGenap.total === statsGanjil.total ? "Total memiliki nilai sama antara array genap dan ganjil" : "Total memiliki nilai berbeda antara array genap dan ganjil",
    rata_rata: statsGenap.rata_rata > statsGanjil.rata_rata ? "Rata-rata lebih besar array genap" : "Rata-rata lebih besar array ganjil"
};

console.log("Array Genap:", genap);
console.log("Array Ganjil:", ganjil);
console.log("Statistik Array Genap:", statsGenap);
console.log("Statistik Array Ganjil:", statsGanjil);
console.log("Perbandingan:", perbandingan);

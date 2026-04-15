"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const siswa = {
    id: 1,
    nama: "Michello",
    kelas: "XI PG1",
};
console.log(siswa);
//Tugas 2
function Umur(tahunKelahiran) {
    const tahunSekarang = new Date().getFullYear();
    const umur = tahunSekarang - tahunKelahiran;
    return umur;
}
console.log(Umur(2009));
//# sourceMappingURL=index.js.map
//Tugas 1
interface Siswa 
{
    id: number,
    nama: string,
    kelas: string,
}

const siswa : Siswa =
{
    id: 1,
    nama: "Michello",
    kelas: "XI PG1",
}

console.log(siswa);

//Tugas 2

function Umur(tahunKelahiran : number) : number
{
    const tahunSekarang = new Date().getFullYear();
    const umur = tahunSekarang - tahunKelahiran;
    return umur;
}

console.log(Umur(2009));

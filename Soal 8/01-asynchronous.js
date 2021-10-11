// 1. Apa itu synchronous?
//Synchronous adalah proses eksekusi atau output berdasarkan urutan kode, memakai blocking sehingga urutan satu harus selesai terlebih dahulu baru akan dijalankan yang selanjutnya.
// 2. Apa itu asynchronous?
//Asyncrhonous adalah proses eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses (tidak ada blocking)
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
//Tentu bisa karena browser memiliki waktu untuk mengerjakan setiap code sehingga konsep asynchronous dapat diterapkan.
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
//first log:  1
//first log:  2
//first log:  3
//first log:  4
//first log:  5
//second log:  6
//second log:  6
//second log:  6
//second log:  6
//second log:  6
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi?
//Bisa,karena menggunakan var sehingga merujuk pada global seharusnya ini karena tidak menggunakan let sehingga 
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (let i = 1; i <= 5; i++) {
  console.log("first log: ", i); // 01 - Pertama
  setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}
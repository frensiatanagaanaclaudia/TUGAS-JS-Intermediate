/* poin 1:
-Ketika dijalankan kedua function dapat berjalan 

poin 2:
-Hasilnya berbeda 
function pertama yaitu fun1 mengeluarkan semua function yang ada (fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
sedangkan function kedua yaitu fun2 mengeluarkan object keseluruhan yang ada di console

poin 3: 
Ini terjadi karena this menyesuaikan dengan scope dan memiliki fungsi yang berbeda ketika digunakan

*/
const obj = {
    fun1: function() {
        console.log("fun1", this);
    },
    fun2: () => {
        console.log("fun2", this);
    }
};

obj.fun1();
obj.fun2();






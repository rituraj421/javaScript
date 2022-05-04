// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr)
// for(var i = 0; i<arr.length;i++){
//     if(i==2){
//         break;
//     }
//     console.log(arr[i])
// }

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr)
for(var i = 0; i<arr.length;i++){
    if(i==2){
        continue; //here it will stop at 2 and then again start printing, 3 will not print
    }
    console.log(arr[i])
}
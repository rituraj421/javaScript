//for, do, do-while loops
// for(let i=0; i<=100; i++){
//     console.log(i);
// }

// let j = 0;
// while(j<7){
//     j +=1;
//     console.log(j);
// }

// let k = 0;
// do{
//     console.log(k);
//     k++;
// }
// while (k<10);

// let k = 0;
// do{
//     console.log(k);
//     if(k===2){
//         break;
//     }
//     k++;
// }
// while (k<10);

let k = 0;
do{
    if(k===3){
        k++;
        continue;
    }
    console.log(k);
    k++;
}while (k<10);

//for each loop

let arr = [2,3,4,5,6,2,1];
arr.forEach(function(element){
    console.log(element);
});

let obj = {
    name : "nita",
    age : 19,
    class : "upper",
    os : "mac"
    
}
for(let key in obj){
    console.log(obj[key])
}
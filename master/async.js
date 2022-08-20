for (let index = 0; index <= 10; index++){
    const element = index;
    console.log("this is index number " + index);
}
console.log("done");


//here the loop will carry on and the next xode will execute 
setTimeout(() => {
    for (let index = 0; index <= 10; index++){
        const element = index;
        console.log("this is index number " + index);
    }
}, 100);
console.log("done");
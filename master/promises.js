function func1(){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            const error = true;
            if (!error){
                console.log("Your promise has been resolved")
                resolve();
            }
            else {
                console.log("Your promise is not resolved")
                reject('sorry!!')
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("ritu: thanks for resolving")
}).catch(function(){
    console.log("ritu : very bad")
})
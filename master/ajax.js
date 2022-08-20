let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log('You have clicked fetchBtn');

    //initiate an xhr object 

    const xhr = new XMLHttpRequest();

    //open the object

    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getAllResponseHeaders('Content-type', 'application/x-www-form-urlencoded');
    //what to do on progress
    xhr.onprogress = function(){
        console.log('on progress');
    }
    //what to do when response is ready

    xhr.onload = function (){
        if (this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log('some error ossured');
        }
    }
    //send the request
    // xhr.send();
    params = "name=test&salary=123&age=23"
    xhr.send(params);
}



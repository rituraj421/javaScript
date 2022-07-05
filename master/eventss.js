let btn = document.getElementById('btn');
btn.addEventListener('click', func1); //dblclick can also be used
btn.addEventListener('mousedown', func2);

function func1(e){
    console.log("aye", e);
}

function func2(e){
    console.log("mouse", e);
}

// document.querySelector('.no').addEventListener('mouseleave', fumction(){
//     console.log('exit'),
// })

document.querySelector('.container')
.addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.ofsetY);
    console.log('mousemove triggered');
});
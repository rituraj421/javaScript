document.getElementById('heading').addEventListener('click', function(e){
    let variable;
    console.log('you are on heading');
    variable = e.target;
    // variable = e.target.className;
    console.log(variable);
});
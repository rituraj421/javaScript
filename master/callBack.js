//do change the timeout time and see rhe differences , interesting 
// also removge call back  and see the dufference to understand callback 
const students = [
    {name: 'rituraj', subject: 'js'},
    {name: 'ritu', subject: 'N/A'}
]

function enrollStudent(student, callback){
    setTimeout(function(){
        students.push(student);
        console.log("student have been enrolled");
        callback();
    }, 8000);
}

function getStudents(){
    setTimeout(function(){
        let str = "";
        students.forEach (function(student){
            str += `<li> ${student.name}</li>`
        })
        document.getElementById('students').innerHTML = str;
        console.log("students have been fetched");
    }, 1000);
}

let newStudent = {name: 'sunny', subject:'java'};
enrollStudent(newStudent, getStudents);
// getStudents();
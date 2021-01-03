document.getElementById(submitButton).onclick = function() {grades()};


function grades(){

var q = parseFloat(document.getElementById(Quizes).value);
var m = parseFloat(document.getElementById(Midterm).value);
var f = parseFloat(document.getElementById(FinalTest).value);
var o = parseFloat(document.getElementById(Oral).value);

var total = q + m + f + o 
document.getElementById(total_grades).value = total; 

if (total = 100 && total >= 90 ){
    document.getElementById('final_grade').innerHTML = "A";
}

if (total >= 80 ){
    document.getElementById('final_grade').innerHTML = "B";
}

if (total >=70 ){
    document.getElementById('final_grade').innerHTML = "C";
}

if (total >=60 ){
    document.getElementById('final_grade').innerHTML = "D";
}

else{
    document.getElementById('final_grade').innerHTML = "F";
}




}
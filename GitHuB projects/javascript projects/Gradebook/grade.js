function Calculate(){
    let  fname =  document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let grade1 = document.getElementById("grade1").value;
let grade2 = document.getElementById("grade2").value; 
let grade3 = document.getElementById("grade3").value;
let Lgrade;

   
    document.getElementById("fullName").innerHTML += fname + " "  + lname;
    document.getElementById("Grade1").innerHTML += grade1;
    document.getElementById("Grade2").innerHTML += grade2;
    document.getElementById("Grade3").innerHTML += grade3;

   let Avg = (parseInt(grade1) + parseInt(grade2) + parseInt(grade3))/3;

    document.getElementById("Avg").innerHTML = "Average: " + Avg;
        if (Avg == 100){
            Lgrade = "A+";
        }else if ( Avg >= 90){
            Lgrade = "A";
        } else if (Avg >= 80 ){
            Lgrade = "B";
        } else if ( Avg >= 70){
            Lgrade = "C";
        } else if (Avg >= 60){
            Lgrade = "D";
        } else {
            Lgrade = "F";
   
} 

document.getElementById("Lgrage").innerHTML = "Letter grade:" + Lgrade;
    }

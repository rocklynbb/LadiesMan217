function myFunction(){
    let loop = document.getElementById("loop").value;
    let loop1 = document.getElementById("loop1").value;
    let loop2 = document.getElementById("loop2").value;
    
    for( i = parseInt(loop); i <= parseInt(loop1) ;i+= parseInt(loop2)){

        document.getElementById('ouTput').innerHTML += i +"<hr>"
    }

    
}
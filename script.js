function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 10;
    var year = new Date().getFullYear()+parseInt(years);
    if (principal != null && principal >0 ){
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year<mark> "+year+"</mark>\<br\>"
    }
    
}

function rateUpdate(){
    var rateValue = document.getElementById("rate").value;
    document.getElementById("interestVal").innerHTML = document.getElementById("rate").value;
}

function validAmount(){
    var principal = document.getElementById("principal").value;
    var moreThanZero = parseInt(principal) >0;
    if (!moreThanZero) {
        alert("Please enter a positive number");
        document.getElementById("principal").focus()
    }
}

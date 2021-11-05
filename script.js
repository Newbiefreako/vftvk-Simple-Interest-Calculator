function compute()
{
    p = document.getElementById("principal").value;
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
    document.getElementById("rate_val").innerText = rateValue;
}

function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var c = parseInt(document.querySelector("#value3").value);
    var d = parseInt(document.querySelector("#value4").value);
    var op =document.querySelector("#operator").value;
    var calculate;
    if (op == "add"){
      calculate = a+b+c+d;
    }
    document.querySelector("#results").innerHTML=calculate;
}

function calculate(){
    var e =parseInt(document.querySelector("#weekp").value);
    var f =parseInt(document.querySelector("#cost").value);
    var op =document.querySelector("#operatorr").value;
    var calculatee;
    if(op == "multiply"){
        calculatee=e*f;
    }
    document.querySelector("#resultss").innerHTML=calculatee;

}

function product(){
    var g =parseInt(document.querySelector("#weeke").value);
    var h =parseInt(document.querySelector("#numweek").value);
    var op =document.querySelector("#operata").value;
    var calculate;
    if(op == "multiply"){
        calculate=g*h;
    }
    document.querySelector("#result").innerHTML=calculate;
}





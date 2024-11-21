
var btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    var n1=document.getElementById("parcial1").value;    
    var n2=document.getElementById("parcial2").value;    
    var n3=document.getElementById("final").value;    
    //alert("Nota 1: "+n1+", Nota 2:"+n2+", Nota final:"+n3);

    var por1=(n1*30)/100;
    var por2=(n2*30)/100;
    var porf=(n3*40)/100;    
    var nd=(por1+por2+porf).toFixed(2);
   //alert("La nota fina es "+nd);
   document.getElementById("mensaje").innerHTML="La nota final es "+nd;
 
   if(nd<3){
       document.getElementById("mensaje1").innerHTML="te tiraste la materia";
    }else{
       document.getElementById("mensaje1").innerHTML="Aprobado";
   }

});


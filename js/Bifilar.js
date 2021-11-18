document.getElementById("btn_dimensiones_bifilar").onclick=function(){

    Calculo_dimensiones_bifilar();

}

document.getElementById("btn_impedancia_bifilar").onclick=function(){

    Calculo_impedancia_bifilar();

}



function Calculo_impedancia_bifilar(){

    let D=Number(document.getElementById("Distancia_conductores").value);

    let d=Number(document.getElementById("Diametro_conductor").value);

    var perm=document.getElementById("dielectrico3");

    var permitividad_relativa;

    var z0;//Variables



    



    //Para verificar si ingreso valores o uso el select

    if(perm.value==0 && (document.getElementById("dielectrico_in3").value==null || document.getElementById("dielectrico_in3").value=="" )){

        swal("Datos faltantes!", "Seleccionar dielectrico o ingresar permitividad", "warning");

        return;

    }

    

    if(perm.value!=0){

        permitividad_relativa=dielectrico(perm.value);

    }else{

       permitividad_relativa=Number(document.getElementById("dielectrico_in3").value);

    }





    //VERIFICAR CAMPOS NO VACIOS

    if(D==null || D=="" || d==null || d=="" ){

        swal("Datos faltantes!", "", "warning");

        return;

    }



    if(d>D){

        swal("Datos incongruentes","El valor del diametro del conductor(d) no puede ser mas grande que la distancia entre conductores(D)","warning")

        return;

    }

    


    z0=(120/Math.sqrt(permitividad_relativa))*Math.acosh(D/d);



    if(z0<0){

        swal("Datos incorrectos", "", "warning");

        return;

    } 

    

    



    document.getElementById("Impedancia_caracteristica_bifilar").value=z0.toPrecision(8);

  

}

function Calculo_dimensiones_bifilar(){



    let d=Number(document.getElementById("Diametro_conductor").value);

    let z0=Number(document.getElementById("Impedancia_caracteristica_bifilar").value);

    var perm=document.getElementById("dielectrico3");

    var permitividad_relativa;

    let u0=1.256637061*10**-6;

    let e0=8.854187817*10**-12;

    var D,Zc;



    if(perm.value==0 && (document.getElementById("dielectrico_in3").value==null || document.getElementById("dielectrico_in3").value=="" )){

        swal("Datos faltantes!", "Seleccionar dielectrico o ingresar permitividad", "warning");

        return;

    }

    

    if(perm.value!=0){

        permitividad_relativa=dielectrico(perm.value);

    }else{

       permitividad_relativa=Number(document.getElementById("dielectrico_in3").value);

    }

    



    if(z0==null || z0=="" || d==null || d=="" ){

        swal("Datos faltantes!", "", "warning");

        return;

    }

    Zc=Math.sqrt(u0/e0);

   

    D=d*Math.cosh(Math.PI*(z0/Zc)*Math.sqrt(permitividad_relativa));

    if(D<0) swal("Datos incorrectos", "Distancia entre conductores menor a 0", "warning");



    



    

    document.getElementById("Distancia_conductores").value=D.toPrecision(6);



}
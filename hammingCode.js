 var hamkodu = [];
  var parity=[];
  var data = []; 

  var parityIndx  =[];  
  
function hesapla() {
   var x = document.getElementById("veri").value;
   
   
   data = x ; 
   var uzunluk = x.length ;
  if(uzunluk==0){
    alert("Veri giriniz !! ");
  }
  else if ( x.match(/[^10]/)) {
    alert("Girilen veri binary olmali (101101) ");
  } 
  
  else {
    if (document.getElementById("four").checked) {
      if (uzunluk != 4) {
        alert("Girilen bitlerin sayisi 4 olmalidir !!");
      } else {
         
        parity[2] = data[3] ^ data[2] ^ data[0] ; 
        parity[1] = data[3] ^ data[1] ^ data[0] ;
        parity[0] = data[2] ^ data[1] ^ data[0] ;

         hamkodu [6] = parity[2];
         hamkodu [5] = parity[1];
         hamkodu [4] = data[3];
         hamkodu [3] = parity[0];
         hamkodu [2] =data[2];
         hamkodu [1] = data[1];
         hamkodu [0]= data[0]; 

         document.getElementById("parity").value = parity;
         document.getElementById("gelenVeri").value=data;
         document.getElementById("parity").style.color="#FF0000";
         document.getElementById("gelenVeri").style.color="#017D4C";
         hamkodu= hamkodu.toString(); 
         hamkodu = hamkodu.replace(/,/g,'') ;
         document.getElementById("hamData").value=hamkodu;

         

      }
    } else if (document.getElementById("eight").checked) {
      if (uzunluk != 8) {
        alert(" Girilen bitler 8 bit olmalidir !!");
      } else {
        
        
        parity[3] = data[7] ^ data[6] ^ data[4] ^ data[3] ^ data[1] ; 
        parity[2] = data[7] ^ data[5] ^ data[4] ^ data[2] ^ data[1]  ;
        parity[1] =  data[6] ^ data[5] ^ data[4] ^ data[0] ;
        parity[0] = data[3] ^ data[2] ^ data[1] ^ data[0];
         
         hamkodu [11] = parity[3];
         hamkodu [10] = parity[2];
         hamkodu [9] = data[7];
         hamkodu [8] = parity[1];
         hamkodu [7] =data[6];
         hamkodu [6] = data[5];
         hamkodu [5] = data[4];
         hamkodu [4] = parity[0];
         hamkodu [3] = data[3];
         hamkodu [2] =data[2];
         hamkodu [1] = data[1];
         hamkodu [0]= data[0]; 

         document.getElementById("parity").value = parity;
         document.getElementById("gelenVeri").value=data;
         document.getElementById("parity").style.color="#FF0000";
         document.getElementById("gelenVeri").style.color="#017D4C";
         hamkodu= hamkodu.toString(); 
         hamkodu = hamkodu.replace(/,/g,'') ;
         document.getElementById("hamData").value=hamkodu;

      }
    } else if (document.getElementById("sixteen").checked) {
      if (uzunluk != 16) {
        alert("Girilen bitler 16 olmalidir !!");
      } else {
        parity[4] = data[15] ^ data[14] ^ data[12] ^ data[11] ^ data[9] ^ data[7] ^ data[5] ^ data[4] ^ data[2] ^ data[0] ; 
        parity[3] = data[15] ^ data[13] ^ data[12] ^ data[10] ^ data[9] ^ data[6] ^ data[5] ^ data[3] ^ data[2]; 
        parity[2] = data[14] ^ data[13] ^ data[12] ^data[8] ^ data[7]^ data[6] ^ data[5] ^ data[1] ^ data[0] ;
        parity[1] =  data[11] ^ data[10] ^ data[9] ^data[8]^ data[7]^ data[6] ^ data[5] ;
        parity[0] = data[4] ^ data[3] ^ data[2] ^ data[1] ^ data[0];


         hamkodu [20] = parity[4];
         hamkodu [19] = parity[3];
         hamkodu [18] = data[15];
         hamkodu [17] = parity[2];
         hamkodu [16] =data[14];
         hamkodu [15] = data[13];
         hamkodu[14] = data[12];
         hamkodu [13] = parity[1];
         hamkodu [12] = data[11];
         hamkodu [11] = data[10];
         hamkodu [10] =data[9];
         hamkodu [9] = data[8];
         hamkodu [8] = data[7];
         hamkodu [7] =data[6];
         hamkodu [6] = data[5];
         hamkodu [5] = parity[0] ;
         hamkodu [4] = data[4];
         hamkodu [3] = data[3];
         hamkodu [2] =data[2];
         hamkodu [1] = data[1];
         hamkodu [0]= data[0]; 
      
        document.getElementById("parity").value = parity;
        document.getElementById("gelenVeri").value=data;
        document.getElementById("parity").style.color="#FF0000";
        document.getElementById("gelenVeri").style.color="#017D4C";
        hamkodu= hamkodu.toString(); 
        hamkodu = hamkodu.replace(/,/g,'') ;
        document.getElementById("hamData").value=hamkodu;
        
       
      }
    } else {
      alert("Veri'nin uzunluğu giriniz !!! ");
    }
  }
}

function yanlisiDuzelt(){
   var diziKontrol=[];
  
   diziKontrol=document.getElementById("hamData").value;
   var  dizi1 = hamkodu.toString(); 
      


   if(diziKontrol == dizi1 ){
    
      alert("Bir tane bit degistiriniz !! ")
   }
   else if(diziKontrol.match(/[^10]/) ){
    alert("Bir tane bit degistiriniz ve (10101) binary seklinde olmali ");
        
     }
 
   else {
    
    
    document.getElementById("dv").value = dizi1 ; 
    document.getElementById("yv").value = diziKontrol;

    let  dizi2 = document.getElementById("dv").value ; 
    let dizi3 = document.getElementById("yv").value; 
    
    dizi2.toString(); 
    dizi3.toString(); 
    dizi2 = dizi2.replace(/,/g,'') ;
    dizi3 = dizi3.replace(/,/g,'') ;
    
    var bin= compare(dizi2, dizi3);
   }
    
  } 

  function compare(dizi2, dizi3){
    var hata ; 
    i
    for(var i =0; i<dizi3.length; i++){
      
      if(dizi2[i] != dizi3[i]){
        hata = dizi3.length - i ; 
        console.log(hata);
        var hataBin = decimalToBin(hata);
        console.log(hataBin);
        document.getElementById("pb").value=hataBin; 
      }
      
    }
     

  }
  function decimalToBin(no){
    return (no >>> 0).toString(2);
  }

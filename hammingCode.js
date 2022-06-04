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
        document.getElementById("hamData").value=hamkodu;
        
       
      }
    } else {
      alert("Choose the bit's length !! ");
    }
  }
}

function yanlisiDuzelt(){
   var diziKontrol=[];
   var parity1 =[]
   diziKontrol=document.getElementById("hamData").value;
  

   if(diziKontrol == hamkodu ){
    
      alert("Bir tane bit degistiriniz !! ")
      
   }
   
   
   else {
    document.getElementById("dv").value = hamkodu ; 
    document.getElementById("yv").value = diziKontrol;
  
   }
    
  } 

function hesapla() {
  var veriler =[]; 
  var x = document.getElementById("veri").value;
  veriler.push(x) ; 
 
  if(veriler.length==0){
    alert("Veri giriniz !! ");
  }
  else if ( x.match(/[^10]/)) {
    alert("Girilen veri binary olmali (101101) ");
  } 
  
  else {
    if (document.getElementById("four").checked) {
      if (x.length != 4) {
        alert("Girilen bitlerin sayisi 4 olmalidir !!");
      } else {
        veriler=hamming(x); 
        document.getElementById("hamData").value = veriler;
        parity = veriler[0]+ veriler[1] +veriler[3];  
        data = veriler[2]+veriler[4]+veriler[5]+veriler[6]; 
        document.getElementById("gelenVeri").value=data;
        document.getElementById("parity").value = (parity);

       

      }
    } else if (document.getElementById("eight").checked) {
      if (x.length != 8) {
        alert("Girilen bitler 8 bit olmalidir !!");
      } else {
        veriler=hamming(x); 
        document.getElementById("hamData").value = veriler;
        parity = veriler[0]+ veriler[1] +veriler[3]+veriler[7];  
        data = veriler[2]+veriler[4]+veriler[5]+veriler[6]+veriler[8]+veriler[9]+veriler[10]+veriler[11]; 
        document.getElementById("gelenVeri").value=data;
        document.getElementById("parity").value = (parity);



      }
    } else if (document.getElementById("sixteen").checked) {
      if (x.length != 16) {
        alert("Girilen bitler 16 olmalidir !!");
      } else {
        
        veriler=hamming(x); 
        document.getElementById("hamData").value = veriler;
        parity = veriler[0]+ veriler[1] +veriler[3]+ veriler[7]+veriler[15];  
        data = veriler[2]+veriler[4]+veriler[5]+veriler[6]+veriler[8]+veriler[9]+veriler[10]+veriler[11]+veriler[12]+veriler[13]+veriler[14]
       +veriler[16]+veriler[17]+veriler[18]+veriler[19]+veriler[20]; 
        document.getElementById("gelenVeri").value=data;
        document.getElementById("parity").value = parity;
      }
    } else {
      alert("Choose the bit's length !! ");
    }
  }
}

function hamming(x) {
	

	var veri = x;
	var parityBitIndex = [];
	var r = x.length;
	var i = 1;
	var  j,  temp, check;

	while (r / i >= 1) {
		parityBitIndex.push(i);
		i *= 2;
	}

	for (j = 0; j < parityBitIndex.length; j++) {
		anhtar = parityBitIndex[j];
		dizi = veri.slice(anhtar - 1).split('');
		temp = parca(dizi, anhtar);
		check = (temp.reduce(function (onceki, ondeki, indeks) {
			if (!(indeks % 2)) {
				onceki = onceki.concat(ondeki);
			}
			return onceki;
		}, []).reduce(function (onceki, ondeki) 
    {
       return +onceki + +ondeki
       }, 0) % 2) ? 1 : 0;
		veri = veri.slice(0, anhtar - 1) + check + veri.slice(anhtar - 1);
		if (j + 1 === parityBitIndex.length && veri.length / (anhtar * 2) >= 1) {
			parityBitIndex.push(anhtar * 2);
		}
	}
  console.log(veri);

	return veri;
}

function parca(dizi, boyut) {
	var parcalar = [],
	i = 0,
	n = dizi.length;
	while (i < n) {
		parcalar.push(dizi.slice(i, i += boyut));
	}
	return parcalar;
}

function yanlisiDuzelt(){
 
  veriler = document.getElementById("hamData").value; 
  var  uzunluk = veriler.length ; 
  
  if(uzunluk == 7 ){
    data =veriler[2]+veriler[4]+veriler[5]+veriler[6];
    parity = veriler[0]+ veriler[1] +veriler[3];  
  }
  else if (uzunluk == 12 ){
     data = veriler[2]+veriler[4]+veriler[5]+veriler[6]+veriler[8]+veriler[9]+veriler[10]+veriler[11]; 
     parity = veriler[0]+ veriler[1] +veriler[3]+veriler[7];  
  }
  else if (uzunluk == 21){
    data = veriler[2]+veriler[4]+veriler[5]+veriler[6]+veriler[8]+veriler[9]+veriler[10]+veriler[11]+veriler[12]+veriler[13]+veriler[14]
    +veriler[16]+veriler[17]+veriler[18]+veriler[19]+veriler[20];
    parity = veriler[0]+ veriler[1] +veriler[3]+ veriler[7]+veriler[15];  
  }
  else {
    alert("gelen veri uzerine ekleyemezsiniz !! "); 
  }

  dataStr = data.toString(); 
  var eskiData = hamming(dataStr);  

  for(var i =0 ; i<veriler.length; i++){
    if(veriler[i] != eskiData[i]){

       veriler[i] = 2; 
      }

    }
    
    console.log(eskiData+"\n" +veriler);
  
      if(veriler == eskiData){
        alert("Yanlis veri bulunmadi  ");
        document.getElementById("yv").value="";
     
    }
    else {
      document.getElementById("yv").value = veriler;
      document.getElementById("dv").value = eskiData;
    }
    
    
  }
 

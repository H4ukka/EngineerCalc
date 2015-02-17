function lasketaajuus(){
	
      var tulos=document.createElement("p");
      var c = document.getElementById("kapasitanssi").value;
      var r = document.getElementById("resistanssi").value;

      var vastaus =( 1 / ( 2*3.1415926535897932*(r*c*0.001*0.001*0.001) ) );
      var teksti=document.createTextNode("Kun R = " + r + " Ohm ja C = " + c + " nF, on taajuus noin " + vastaus + " Hz.");
   
   
      var tulostaulu=document.getElementById("div1");      
      tulos.appendChild(teksti);   
      //tulos.appendChild(document.createTextNode(vastaus));   
      tulostaulu.appendChild(tulos);
      
   }

   function laskekapasitanssi(){
 
      var tulos=document.createElement("p");
   
      var f = document.getElementById("taajuus").value;
      var r = document.getElementById("resistanssi").value;
      //var vastaus =( (1*0.001*0.001*0.001) / ( 2*3.1415926535897932*(r*f) ) );
      var vastaus =( 1000000000 / ( 2*3.1415926535897932*(r*f) ) );
      var teksti=document.createTextNode("Kun R = " + r + " Ohm ja f = " + f + " Hz, on kapasitanssi noin " + vastaus + " nF.");   
   
      var tulostaulu=document.getElementById("div1");
      //tulos.appendChild(document.createTextNode(vastaus));   
      tulos.appendChild(teksti);   
      tulostaulu.appendChild(tulos);
      
   }

   function laskeresistanssi(){
 
      var tulos=document.createElement("p");
      
      var f = document.getElementById("taajuus").value;
      var c = document.getElementById("kapasitanssi").value;
      var vastaus =( 1 / ( 2*3.1415926535897932*(c*f*0.001*0.001*0.001) ) );
      var teksti=document.createTextNode("Kun f = " + f + " Hz ja C = " + c + " nF, on resistanssi noin " + vastaus + " Ohm.");    
 
   
      var tulostaulu=document.getElementById("div1");
      //tulos.appendChild(document.createTextNode(vastaus));   
      tulos.appendChild(teksti);   
      tulostaulu.appendChild(tulos);
      
   }
   function lasketaajuus(){
	
      var tulos=document.createElement("p");
      var c = document.getElementById("kapasitanssi").value;
      var r = document.getElementById("resistanssi").value;

      var vastaus =( 1 / ( 2*3.1415926535897932*(r*c*0.001*0.001*0.001) ) );
      var teksti=document.createTextNode("f = " + vastaus + " Hz");

      var result = document.createElement("p");
      result.appendChild(teksti);

      var resultPlaceholder = document.getElementById("frequency_button");
      var resultContainer = resultPlaceholder.parentNode;

      resultContainer.replaceChild(result, resultPlaceholder);
      
   }

   function laskekapasitanssi(){

      var f = document.getElementById("taajuus").value;
      var r = document.getElementById("resistanssi").value;
      var vastaus =( 1000000000 / ( 2*3.1415926535897932*(r*f) ) );
      var teksti= document.createTextNode("C = " + vastaus + " nF");

      var result = document.createElement("p");
      result.appendChild(teksti);

      var resultPlaceholder = document.getElementById("capacitance_button");
      var resultContainer = resultPlaceholder.parentNode;

      resultContainer.replaceChild(result, resultPlaceholder);
      
   }

   function laskeresistanssi(){
 
      var f = document.getElementById("taajuus").value;
      var c = document.getElementById("kapasitanssi").value;
      var vastaus =( 1 / ( 2*3.1415926535897932*(c*f*0.001*0.001*0.001) ) );
      var teksti=document.createTextNode("R = " + vastaus + " Ω");

      var result = document.createElement("p");
      result.appendChild(teksti);

      var resultPlaceholder = document.getElementById("resistance_button");
      var resultContainer = resultPlaceholder.parentNode;

      resultContainer.replaceChild(result, resultPlaceholder);
      
   }
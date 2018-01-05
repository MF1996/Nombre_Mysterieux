var rest=7;
var nu_Mys = parseInt(""+Math.random()*99)+1;
var reponse;
document.getElementById('rep').style.display="none";
document.getElementById('rep2').style.display="none";
document.getElementById('petit').style.display="none";
document.getElementById('grand').style.display="none";
document.getElementById('rep1').innerHTML=""+""+rest;
document.getElementById('rep1').style.position="relative";
document.getElementById('rep1').style.top="-35px";
document.getElementById('rep1').style.fontSize="45px"; 

function generateMys() {
	    nu_Mys =  parseInt(""+Math.random()*99)+1;
		rest =7;
 		document.getElementById('rep1').innerHTML=""+""+rest;
        document.getElementById('rep1').style.position="relative";
		document.getElementById('rep1').style.top="-45px";
	    document.getElementById('rep1').style.right=" -1px";
	    document.getElementById('rep1').style.fontSize="45px"; 
        document.getElementById('rep').style.display="none";
        document.getElementById('rep2').style.display="none";
        document.getElementById('petit').style.display="none";
        document.getElementById('grand').style.display="none";	
}


function numbreMyst(){       
							rest--;
                          
						if (rest<=0) {

							       reponse = confirm("Vous avez perdur Rejouer");
                                 if (reponse) { 	
												generateMys();
                                  											}
                                 
                                 else		
                                 {
									    GameOver();
                                           	}
                                                     										}
   
						else{		

						               
					             document.getElementById('rep1').innerHTML=""+""+rest;
		 
                                changeRap1((rest+1));

		 						 if(document.getElementById('number').value > nu_Mys){
									                                         document.getElementById('rep2').style.display="none";
                                                                             document.getElementById('petit').style.display="none";
	                                                  
	                                                                         document.getElementById('rep').style.display="inline";
	                                                                         document.getElementById('grand').style.display="inline";
    																		
    																		document.getElementById('rep').innerHTML="trop grand";
    																		
    																	

																																			} 
								else{
									                                        document.getElementById('rep').style.display="none";
									                                        document.getElementById('grand').style.display="none";
									                                         
									                                        document.getElementById('rep2').style.display="inline";
									                                        document.getElementById('petit').style.display="inline";
									                                        

  																			document.getElementById('rep2').innerHTML="trop petit";
  																			
																													}

								if (nu_Mys ==  document.getElementById('number').value) {
									                                        document.getElementById('rep').style.display="inline";
    																		document.getElementById('rep').innerHTML="trouver";
     																		reponse = confirm("Vous avez gagner Vous l'es vous rejouer");
     																			   
      							if (reponse==true) {  generateMys();    }

     							else
     								{     
                                                   GameOver();
     								 }
                         }
                     }
                 }

                 function GameOver() {
                 	                      document.getElementById('rep1').innerHTML="Game Over";  
                                          document.getElementById('petit').style.display="none";
                                          document.getElementById('grand').style.display="none";
                                          document.getElementById('rep').style.display="none";
                                          document.getElementById('rep2').style.display="none";
                                          document.getElementById('rep1').style.position="relative";
                                          document.getElementById('rep1').style.top="-45px";
                                          document.getElementById('rep1').style.right="65px";
                                          document.getElementById('rep1').style.fontSize="25px";
                                          
                 }


                 function changeRap1(num ) {

                 	if(num==7 ){
                 				document.getElementById('rep1').style.position="relative";
								 document.getElementById('rep1').style.top="-75px";
								 document.getElementById('rep1').style.fontSize="45px"; 
                                 }
                    
                    
		 						
                 }


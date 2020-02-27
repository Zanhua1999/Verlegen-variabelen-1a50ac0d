var dia = prompt("Diameter");
			dia=parseFloat(dia) && Number(dia);
			
			if(!isNaN(dia))
				var opp=Math.PI*dia*dia;
				var omtre=2*Math.PI*dia;
				
				document.getElementById('dia').value= dia;
				document.getElementById('omtre').value=omtre.toFixed(2);
				document.getElementById('opp').value=opp.toFixed(2);
			}else{
				alert("Voer een nummer in")
			}

